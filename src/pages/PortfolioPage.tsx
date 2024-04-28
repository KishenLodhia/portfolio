// Effect hook to perform side effects
import MdBlob from "@/components/MdBlob";
import Languages from "@/components/Languages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SetStateAction, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import GitHubCommitAreaChart from "@/components/GithubCommitAreaChart";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

// Effect hook to perform side effects
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

// Effect hook to perform side effects
type User = {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  twitter_username: string | null;
};

// Effect hook to perform side effects
type News = {
  status: string;
  totalResults: number;
  articles: Article[];
};

// Defining the Article type
type Article = {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
};

// Main component
const PortfolioPage = () => {
  // State variables
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNews, setSearchNews] = useState("Programming");
  const [news, setNews] = useState<News>();

  // Array of languages
  const languages = [
    "Web Development",
    "Database",
    "Software Engineering",
    "C++",
    "TypeScript",
    "React.js",
    "Node.js",
    "Python Django",
    "Java Spring",
    "Machine Learning",
  ];

  const navigate = useNavigate(); // For navigation

  // Function to handle card click
  const handleCardClick = (user: User | null, repo: Repo) => {
    // if (repo.private) {
    //   return toast("Not allowed", {
    //     description: "Cannot view private repos",
    //   });
    // }
    if (repo.name && user) {
      const repoName = repo.name;
      navigate(`/portfolio/${repoName}`, { state: { userName: user.login, repoName: repoName } });
    }
  };

  // Effect hook to set document title
  useEffect(() => {
    document.title = "Kishen | Portfolio";
  }, []);

  // Effect hook to fetch news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        const pastMonth = date.toISOString().split("T")[0];
        const token = import.meta.env.VITE_NEWS_API_KEY;
        const url = `https://newsapi.org/v2/everything?q=programming AND ${searchNews}&from=${pastMonth}&sortBy=popularity&pageSize=20&page=1`;
        const response = await fetch(url, {
          headers: {
            "x-api-key": token,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data);
        console.log(data);
      } catch (error) {}
    };
    fetchNews();
  }, [searchNews]);

  // Effect hook to fetch user and repos
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

  // Function to handle search change
  const handleSearchChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepos = repos.filter((repo) =>
    Object.values(repo).some((val) => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col w-[90%] md:w-[70%] m-auto">
      <div>
        {user ? (
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

        <div>
          <div className="py-5 w-full md:w-[50%] flex items-center justify-center mx-auto flex-wrap">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select : {searchNews}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup value={searchNews} onValueChange={setSearchNews}>
                  {languages.map((lang) => (
                    <DropdownMenuRadioItem key={lang} value={lang}>
                      {lang}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-center">
            <Carousel className="w-[80%]">
              <CarouselContent>
                {news?.articles
                  .filter((item) => item.urlToImage)
                  .map((item) => (
                    <CarouselItem key={item.url} className=" md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <a href={item.url} target="_blank" className="cursor-pointer">
                          <Card className="max-h-44 p-2 md:opacity-45 hover:opacity-100 transition duration-300">
                            <div className="bg-cover overflow-hidden rounded-md h-full w-full">
                              <img
                                src={item.urlToImage}
                                alt="image"
                                className="max-h-28 w-full object-cover object-center"
                              />
                            </div>
                            <div className="p-2 text-sm truncate">{item.title}</div>
                          </Card>
                        </a>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div>
          <div className="py-5 w-full md:w-[50%] flex items-center justify-center mx-auto">
            <Input type="search" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          <MdBlob color="bg-green-500" isStatic={true} top="30%" left="40%" />
          <MdBlob color="bg-red-500" isStatic={true} top="60%" left="20%" />
          <MdBlob color="bg-blue-500" isStatic={true} top="70%" left="10%" />
          <MdBlob color="bg-yellow-500" isStatic={true} top="90%" left="60%" />

          {filteredRepos
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .map((item) => (
              <div key={item.id}>
                <Card
                  className="w-full h-full p-5 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
                  onClick={() => user && item && handleCardClick(user, item)}
                >
                  <CardHeader className="p-0 overflow-auto text-sm font-semibold ">
                    <div className="flex flex-wrap">
                      {item.name.toUpperCase()}
                      <span>
                        <Badge variant="outline" className="ml-1">
                          {item.private.toString() == "false" ? "PUBLIC" : "PRIVATE"}
                        </Badge>
                      </span>
                    </div>
                  </CardHeader>
                  <p className="text-xs text-gray-500">Created {new Date(item.created_at).toLocaleDateString()}</p>
                  <CardContent></CardContent>
                  <Languages userName={"KishenLodhia"} repoName={item.name} />
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
