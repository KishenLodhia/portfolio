// Importing necessary components and hooks
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Importing custom components
import RepoCard from "@/components/ComponentCard";
import LanguagesChart from "@/components/LanguagesChart";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

// Defining the Repo type
type Repo = {
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  html_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  open_issues_count: number;
};

// Function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

// Main component
const RepoPage = () => {
  const location = useLocation();
  const { userName, repoName } = location.state || {};
  const [repo, setRepo] = useState<Repo | null>(null);
  const [languages, setLanguages] = useState({});

  // Effect hook to perform side effects
  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_PAT;
    const fetchRepo = async () => {
      const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data: Repo = await response.json();
      setRepo(data);
    };

    const fetchLanguages = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}/languages`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (userName && repoName) {
      fetchRepo().then(fetchLanguages);
    }
  }, [userName, repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-[90%] md:w-[70%] m-auto gap-2">
      <Card>
        <CardHeader className="flex flex-row gap-2">
          <CardTitle>
            <div className="flex flex-row gap-2 items-center">
              <div>{repo.full_name}</div>
              {repo.private ? (
                <div>
                  <Badge>PRIVATE REPO</Badge>
                </div>
              ) : (
                <div>
                  <a href={repo.html_url} target="_blank">
                    <FaExternalLinkAlt color="#3A1AEE" className="cursor-pointer" />
                  </a>
                </div>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardContent className="flex flex-row gap-2 items-center">
            <img src={repo.owner.avatar_url} alt="User Avatar" className="rounded-full h-10" />
            <div className="flex flex-col">
              <div className="text-sm">Owner</div>
              <div>{repo.owner.login}</div>
            </div>
          </CardContent>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <RepoCard title={"Created at"} data={formatDate(repo.created_at)} />
        <RepoCard title={"Last updated"} data={formatDate(repo.updated_at)} />
        <RepoCard title={"Last push"} data={formatDate(repo.pushed_at)} />
        <RepoCard title={"Watchers"} data={repo.watchers_count.toString()} />
        <RepoCard title={"Size"} data={`${repo.size.toFixed(1)} KB`} />
        <RepoCard title={"Primary Language"} data={repo.language} />
      </div>
      <div className="h-[700px]">
        <LanguagesChart languages={languages} />
      </div>
    </div>
  );
};

export default RepoPage;
