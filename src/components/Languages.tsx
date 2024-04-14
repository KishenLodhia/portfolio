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
    <div className="flex flex-wrap gap-1">
      {loading ? (
        <div>loading...</div>
      ) : (
        languages && (
          <div className="flex flex-wrap gap-1">
            {Object.entries(languages).map(([language, lines]) => (
              <Badge key={language} variant="secondary">
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
