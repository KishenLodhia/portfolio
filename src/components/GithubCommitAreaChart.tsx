// Importing necessary hooks and components from React and Recharts
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Defining the Commit interface
interface Commit {
  commit: {
    author: {
      date: string;
    };
  };
}

// Defining the props for the GitHubCommitCumulativeChart component
interface GitHubCommitCumulativeChartProps {
  userLogin: string;
}

// GitHubCommitCumulativeChart component
const GitHubCommitCumulativeChart = ({ userLogin }: GitHubCommitCumulativeChartProps) => {
  // State variables
  const [isLoading, setIsLoading] = useState(false);
  const [transformedData, setTransformedData] = useState<{ date: string; commits: number }[]>([]);
  const token = import.meta.env.VITE_GITHUB_PAT;

  // Effect hook to fetch commit data
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/search/repositories?q=user:${userLogin}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ items }) => {
        // Fetching commit data for each repository
        const promises = items.map((repo: { owner: { login: string }; name: string }) => {
          return fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => response.json());
        });

        Promise.all(promises)
          .then((allCommits) => {
            // Aggregating all commits
            const aggregatedCommits = allCommits.flat() as Commit[];

            // Transforming the commit data
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

  // Function to transform the commit data
  const transformData = (commitData: Commit[]): { date: string; commits: number }[] => {
    // If there's no commit data, return an empty array
    if (!commitData || commitData.length === 0) return [];

    // Sorting the commit data by date
    const sortedCommitData = [...commitData].sort(
      (a, b) => new Date(a.commit.author.date).getTime() - new Date(b.commit.author.date).getTime()
    );

    // Counting the number of commits for each date
    const commitCounts: { [key: string]: number } = {};

    sortedCommitData.forEach((commit) => {
      const date = new Date(commit.commit.author.date);
      const dateString = `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
      commitCounts[dateString] = (commitCounts[dateString] || 0) + 1;
    });

    // Calculating the cumulative sum of commits
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

  // Rendering the component
  return (
    <div className="w-[350px] md:w-[600px] h-[300px] flex items-center justify-center">
      {isLoading ? (
        <div className="flex items-center justify-center h-[300px] w-[600px]"></div>
      ) : (
        transformedData.length > 0 && (
          <ResponsiveContainer width="90%" height="80%">
            <LineChart data={transformedData}>
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
        )
      )}
    </div>
  );
};

// Exporting the GitHubCommitCumulativeChart component
export default GitHubCommitCumulativeChart;
