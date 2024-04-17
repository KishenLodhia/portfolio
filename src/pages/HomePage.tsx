import { Navbar } from "../components/Navbar";
import LargeBadge from "@/components/LargeBadge";
import { FaJs, FaGithub, FaPeopleArrows, FaFigma } from "react-icons/fa";
import { SiHtml5, SiCss3, SiVite } from "react-icons/si";
import { RiEmpathizeFill, RiFlutterFill, RiReactjsFill } from "react-icons/ri";
import { TbSql, TbApi, TbBrandTailwind } from "react-icons/tb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import HomePageDrawer from "@/components/HomePageDrawer";
import { IoDocumentTextSharp } from "react-icons/io5";

type HighlightsCard = {
  title: string;
  subtitle: string;
  description: string;
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
};

const HomePage = () => {
  const highlights: HighlightsCard[] = [
    {
      title: "Eviole Web Application",
      subtitle: "@ LifeShape Clinic",
      description: "Building an all in one platform that supports patients on weightloss medications.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "MySQL", icon: <TbSql /> },
        { name: "REST APIs", icon: <TbApi /> },
      ],
    },
    {
      title: "Eviole Mobile App",
      subtitle: "@ LifeShape Clinic",
      description: "Extending the Eviole Web Application to an app for a better user experience.",
      technologies: [
        { name: "Flutter", icon: <RiFlutterFill /> },
        { name: "MySQL", icon: <TbSql /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
    {
      title: "Portfolio Project",
      subtitle: "IFN666 project (this one)",
      description: "Create a portfolio project that displays data dynamically",
      technologies: [
        { name: "React", icon: <RiReactjsFill /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "Tailwind CSS", icon: <TbBrandTailwind /> },
      ],
    },
    {
      title: "UX Research",
      subtitle: "IFN591",
      description: "Conduct a UX research for the a real world scenario",
      technologies: [
        { name: "Interviews", icon: <FaPeopleArrows /> },
        { name: "Documentation", icon: <IoDocumentTextSharp /> },
        { name: "UI Design", icon: <FaFigma /> },
        { name: "User Experience Methods", icon: <RiEmpathizeFill /> },
      ],
    },
  ];

  return (
    <div className="m-auto w-[80%]">
      <Navbar />
      <div className="m-0 pt-10 overflow-hidden">
        <div className="absolute top-[30%] left-[40%] w-[200px] h-[200px] bg-purple-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal hidden md:block"></div>
        <div className="absolute top-[10%] left-[55%] w-[300px] h-[300px] bg-orange-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000 hidden md:block"></div>
        <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-blue-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000 hidden md:block"></div>

        <div className="flex flex-col md:py-20  text-center md:text-left">
          <p className="text-3xl text-muted-foreground pb-4 ">Welcome to my portfolio!</p>
          <p className="font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500   pb-4 animate-pulse">
            I'm Kishen Lodhia.
          </p>
          <p className="text-3xl text-muted-foreground">
            A passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 pb-3 animate-pulse">
              Software Engineer
            </span>{" "}
            and a student at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 pb-3 animate-pulse">
              QUT.{" "}
            </span>
            Here you'll find details about my professional career in the world of Software Engineering.
          </p>
          <div className="md:justify-start md:items-start py-2 flex justify-center items-center">
            <div>
              <HomePageDrawer />
            </div>
          </div>
        </div>
      </div>

      <div className="relative m-0 p-0 flex flex-col mb-24 ">
        <div className="absolute top-[50%] left-[9%] transform translate-y-[-50%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000"></div>
        <div className="absolute top-[10%] left-[18%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-orange-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000"></div>

        <div className="py-10 text-3xl text-muted-foreground pb-4">I am working on these projects</div>
        <div className="flex flex-wrap gap-4">
          {highlights.map((item, index) => (
            <div className="w-full md:max-w-72" key={index}>
              <Card className="bg-card h-full">
                <CardHeader className="h-24">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="h-20">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <div>
                    {item.technologies.map((tech, techIndex) => (
                      <LargeBadge key={techIndex} title={tech.name} icon={tech.icon} />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* <button className="relative">
        <div className="flex flex-col p-20 gap-10">
          <p className="text-2xl text-muted-foreground">Top skills</p>
          <div className="flex flex-wrap gap-2 justify-stretch">
            {programmingLanguagesAndFrameworks.map(({ name, icon }, index) => (
              <LargeBadge key={index} title={name} icon={icon} />
            ))}
          </div>
        </div>
      </div>  */}
    </div>
  );
};

export default HomePage;
