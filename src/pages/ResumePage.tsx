import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import ResumeContent from "@/components/ResumeContent";
import { Separator } from "@/components/ui/separator";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaInfinity,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { BsBodyText } from "react-icons/bs";
import { BiSolidBookContent } from "react-icons/bi";

import {
  SiCsharp,
  SiCypress,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiUml,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const SummarySection = {
  title: "Summary",
  content: `Highly motivated and results-oriented software engineer with 1.5+ years of experience in both frontend and
        backend development. Passionate about developing high quality software with a strong interest in writing
        efficient code.`,
};

const SkillSections = [
  {
    title: "Backend Development",
    content: [
      {
        skill: "Python",
        logo: <FaPython />,
      },
      {
        skill: "Node.js",
        logo: <FaNodeJs />,
      },
      {
        skill: "PHP",
        logo: <FaPhp />,
      },
      {
        skill: "REST API",
        logo: <TbApi />,
      },
      {
        skill: "Laravel",
        logo: <FaLaravel />,
      },
      {
        skill: "Firebase",
        logo: <SiFirebase />,
      },
      {
        skill: "C#",
        logo: <SiCsharp />,
      },
    ],
  },
  {
    title: "Frontend Development",
    content: [
      {
        skill: "React",
        logo: <FaReact />,
      },
      {
        skill: "Flutter",
        logo: <SiFlutter />,
      },
      {
        skill: "JavaScript",
        logo: <SiJavascript />,
      },
      {
        skill: "TypeScript",
        logo: <SiTypescript />,
      },
      {
        skill: "Bootstrap",
        logo: <FaBootstrap />,
      },
      {
        skill: "Tailwind CSS",
        logo: <SiTailwindcss />,
      },
      {
        skill: "HTML",
        logo: <FaHtml5 />,
      },
      {
        skill: "CSS",
        logo: <FaCss3 />,
      },
    ],
  },
  {
    title: "Machine Learning",
    content: [
      {
        skill: "Python",
        logo: <FaPython />,
      },
      {
        skill: "Pandas",
        logo: <SiPandas />,
      },
      {
        skill: "NumPy",
        logo: <SiNumpy />,
      },
      {
        skill: "Sci-kit learn",
        logo: <SiScikitlearn />,
      },
      {
        skill: "Huggingface",
        logo: "🤗",
      },
      {
        skill: "Large Language Models",
        logo: <GiProcessor />,
      },
      {
        skill: "Natural Language Processing",
        logo: <BsBodyText />,
      },
    ],
  },
  {
    title: "Other",
    content: [
      {
        skill: "Git",
        logo: <FaGitAlt />,
      },
      {
        skill: "GitHub",
        logo: <FaGithub />,
      },
      {
        skill: "UI/UX",
        logo: <BiSolidBookContent />,
      },
      {
        skill: "UML",
        logo: <SiUml />,
      },
      {
        skill: "WordPress",
        logo: <FaWordpress />,
      },
      {
        skill: "CI/CD",
        logo: <FaInfinity />,
      },
      {
        skill: "Cypress",
        logo: <SiCypress />,
      },
    ],
  },
];

const ResumePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-start w-[70%] m-auto mt-5">
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-purple-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal hidden md:block"></div>
        <div className="absolute top-[10%] left-[55%] w-[300px] h-[300px] bg-orange-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000 hidden md:block"></div>
        <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-blue-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000 hidden md:block"></div>

        {/* Summary */}
        <div>
          <Heading heading={SummarySection.title} />
          <ResumeContent content={SummarySection.content} />
        </div>

        {/* Skills */}
        <div className="py-5">
          <Heading heading="Skills" />
          {SkillSections.map((item) => (
            <div key={item.title} className="flex flex-col items-start justify-start py-3 z-0">
              <h2 className="text-lg text-slate-500">{item.title.toUpperCase()}</h2>
              <div className="flex flex-wrap items-start justify-start gap-2">
                {item.content.map((contentItem) => (
                  <div key={contentItem.skill} className="flex flex-wrap items-center justify-start gap-2">
                    <div> {contentItem.skill}</div>
                    <div> {contentItem.logo}</div>
                    <div className="w-4 h-5">
                      <Separator orientation="vertical" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </>
  );
};

export default ResumePage;
