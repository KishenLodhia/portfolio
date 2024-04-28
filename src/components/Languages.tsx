import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

interface LanguagesProps {
  userName: string;
  repoName: string;
}

type Languages = Record<string, number>;

const Languages = ({ repoName, userName }: LanguagesProps) => {
  const [languages, setLanguages] = useState<Languages>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = import.meta.env.VITE_GITHUB_PAT;
      const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}/languages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      let data: Languages = await response.json();

      setLanguages(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-0">
      {loading ? (
        <div>loading...</div>
      ) : (
        languages && (
          <div className="">
            {Object.entries(languages).map(([language]) => (
              // <div className="text-xs px-1 py-0 bg-slate-500 opacity-50 rounded-3xl text-nowrap">{language}</div>
              <Badge className="text-xs text-nowrap" key={language} variant="secondary">
                {language}
              </Badge>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Languages;
