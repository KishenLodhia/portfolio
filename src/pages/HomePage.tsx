import { Navbar } from "../components/Navbar";
import LargeBadge from "@/components/LargeBadge";
import { FaJs, FaPython, FaPhp, FaReact, FaNodeJs, FaLaravel, FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiTypescript, SiExpress } from "react-icons/si";
import { RiFlutterFill, RiReactjsFill } from "react-icons/ri";
import { TbBrandCSharp, TbSql, TbApi } from "react-icons/tb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import HomePageDrawer from "@/components/HomePageDrawer";

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
        { name: "GitHub", icon: <FaGithub /> },
        { name: "REST APIs", icon: <TbApi /> },
      ],
    },

    // {
    //   title: "Web Development",
    //   subtitle: "QUT Project",
    //   description: "Building a personal portfolio project",
    //   technologies: webDevProjectStack,
    // },
    // {
    //   title: "Software Developer",
    //   subtitle: "@ LifeShape Clinic",
    //   description: "Currently building a platform that provides content to support weightloss medications",
    //   technologies: evioleWebStack,
    // },
  ];

  // const programmingLanguagesAndFrameworks = [
  //   { name: "JavaScript", icon: <FaJs /> },
  //   { name: "Python", icon: <FaPython /> },
  //   { name: "Flutter", icon: <RiFlutterFill /> },
  //   { name: "C#", icon: <TbBrandCSharp /> },
  //   { name: "PHP", icon: <FaPhp /> },
  //   { name: "TypeScript", icon: <SiTypescript /> },
  //   { name: "SQL", icon: <TbSql /> },
  //   { name: "HTML", icon: <SiHtml5 /> },
  //   { name: "CSS", icon: <SiCss3 /> },
  //   { name: "React", icon: <FaReact /> },
  //   { name: "Node.js", icon: <FaNodeJs /> },
  //   { name: "Express.js", icon: <SiExpress /> }, // Express.js icon not found in react-icons
  //   { name: "Laravel", icon: <FaLaravel /> },
  // ];

  return (
    <>
      <Navbar />
      <div className="m-0 pt-10">
        <div className="absolute top-[30%] left-[40%] w-[200px] h-[200px] bg-purple-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-2000"></div>
        <div className="absolute top-[10%] left-[55%] w-[300px] h-[300px] bg-orange-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-blue-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000"></div>

        <div className="flex flex-col md:px-32 md:w-[80%] md:py-20  text-center md:text-left">
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
          <div className="md:p-3 md:justify-start md:items-start p-3 flex justify-center items-center">
            <div>
              <HomePageDrawer />
            </div>
          </div>
        </div>
      </div>

      <div className="relative m-0 p-0 flex flex-col mb-24">
        <div className="absolute top-[50%] left-[9%] transform translate-y-[-50%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000"></div>
        <div className="absolute top-[10%] left-[18%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-orange-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-500 rounded-full opacity-15 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000"></div>

        <div className="px-20 py-10 text-3xl text-muted-foreground pb-4">Highlights, what i'm up to...</div>
        <div className="flex flex-wrap gap-4 px-20">
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
    </>
  );
};

export default HomePage;
