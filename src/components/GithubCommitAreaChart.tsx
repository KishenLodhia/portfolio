import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Commit {
  commit: {
    author: {
      date: string;
    };
  };
}

interface GitHubCommitCumulativeChartProps {
  userLogin: string;
}

const GitHubCommitCumulativeChart = ({ userLogin }: GitHubCommitCumulativeChartProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [transformedData, setTransformedData] = useState<{ date: string; commits: number }[]>([]);
  const token = import.meta.env.VITE_GITHUB_PAT;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/search/repositories?q=user:${userLogin}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ items }) => {
        const promises = items.map((repo: { owner: { login: string }; name: string }) => {
          return fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => response.json());
        });

        Promise.all(promises)
          .then((allCommits) => {
            const aggregatedCommits = allCommits.flat() as Commit[];

            setTransformedData(transformData(aggregatedCommits));
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching commit data:", error);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setIsLoading(false);
      });
  }, []);

  const transformData = (commitData: Commit[]): { date: string; commits: number }[] => {
    if (!commitData || commitData.length === 0) return [];

    const sortedCommitData = [...commitData].sort(
      (a, b) => new Date(a.commit.author.date).getTime() - new Date(b.commit.author.date).getTime()
    );

    const commitCounts: { [key: string]: number } = {};

    sortedCommitData.forEach((commit) => {
      const date = new Date(commit.commit.author.date);
      const dateString = `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
      commitCounts[dateString] = (commitCounts[dateString] || 0) + 1;
    });

    let cumulativeSum = 0;
    const cumulativeData = Object.keys(commitCounts).map((date) => {
      cumulativeSum += commitCounts[date];
      return {
        date,
        commits: cumulativeSum,
      };
    });

    return cumulativeData;
  };
  return (
    <div className="w-[350px] md:w-[600px] h-[300px] flex items-center justify-center">
      {isLoading ? (
        <div className="flex items-center justify-center h-[300px] w-[600px]"></div>
      ) : (
        <ResponsiveContainer width="90%" height="80%">
          <LineChart
            // width={600}
            // height={300}
            data={transformedData}
            // margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis dataKey="date" tick={{ color: "#fff", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                fontSize: 12,
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="commits"
              stroke="#82ca9d"
              strokeWidth={1.3}
              dot={{ stroke: "#82ca9d", fill: "#ffffff", r: 2 }}
              animationDuration={4000}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GitHubCommitCumulativeChart;
