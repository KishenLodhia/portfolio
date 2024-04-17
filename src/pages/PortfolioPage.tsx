import MdBlob from "@/components/MdBlob";
import Navbar from "@/components/Navbar";
import Languages from "@/components/Languages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import GitHubCommitAreaChart from "@/components/GithubCommitAreaChart";

type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  visibility: string;
  created_at: string;
  updated_at: string;
  languages_url: string;
  language: string;
  private: boolean;
};

type User = {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  twitter_username: string | null;
};

const PortfolioPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_PAT;
        const response = await fetch("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }

        const userData: User = await response.json();
        setUser(userData);
        return userData;
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    const fetchRepos = async (user: User) => {
      try {
        const token = import.meta.env.VITE_GITHUB_PAT;
        const response = await fetch(`https://api.github.com/search/repositories?q=user:${user?.login}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: { items: Repo[] } = await response.json();
        setRepos(data.items);
        // setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    async function fetchData() {
      const user = await fetchUser();
      if (user) {
        await fetchRepos(user);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-[90%] md:w-[70%] m-auto">
      <MdBlob color="bg-green-500" />
      <MdBlob color="bg-red-500" />
      <MdBlob color="bg-blue-500" />

      <Navbar />

      <div>
        {user ? (
          <div>
            <div>
              <Card className="flex flex-col items-center justify-center">
                <CardContent className="flex flex-wrap items-center justify-center">
                  <CardHeader className="flex items-center justify-center">
                    <img src={user.avatar_url} alt="User Avatar" className="rounded-full h-24" />
                  </CardHeader>
                  <CardHeader>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>Github Portfolio</CardDescription>
                  </CardHeader>
                </CardContent>
                <CardContent>
                  <GitHubCommitAreaChart userLogin={user.login} />
                </CardContent>
              </Card>

              <Table className="my-5">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Languages</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Visit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {repos
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                    .map((repo) => (
                      <TableRow key={repo.id}>
                        <TableCell>{repo.name.toUpperCase()}</TableCell>
                        <TableCell>{new Date(repo.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Languages userName={"KishenLodhia"} repoName={repo.name} />
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{repo.private.toString() == "false" ? "PUBLIC" : "PRIVATE"}</Badge>
                        </TableCell>
                        <TableCell>
                          {repo.private == false ? (
                            <Button className="w-32">
                              <a href={repo.html_url} target="_blank">
                                Visit Repo
                              </a>
                            </Button>
                          ) : (
                            <Button disabled={true} className="w-32">
                              Private Repo
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <Card>
            <div className="flex flex-row w-full p-4 items-center justify-center">
              <Skeleton className="rounded-full h-16 w-16 m-2" />
              <div className="flex flex-col p-4">
                <Skeleton className="rounded-full w-40 h-5 m-2" />
                <Skeleton className="rounded-full w-20 h-5 m-2" />
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
