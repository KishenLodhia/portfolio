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
import ContentHeading from "@/components/ContentHeading";
import ResumeContentDiv from "@/components/ResumeContentDiv";
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

const ExperienceSection = [
  {
    company: "LifeShape Clinic",
    role: "Software Engineer",
    start: "April 2023",
    end: "Present",
    details: [
      {
        title: "Eviole web application",
        content: `Engineered a platform merging a custom web application with and
    existing WordPress functionalities, enabling easy and dynamic content. Collaborated with marketing to refine the design.`,
      },
      {
        title: "API development",
        content: `Developed 2 APIs following the OpenAPI 3.0 spec. Firstly, to communicate with a leading
        Australian Electronic Medical Record (eMR) System. Secondly, JWT authenticated API to communicate with the eviole
        mobile app.`,
      },
      {
        title: "Automated testing",
        content: `Carried out automated end to end tests for the whole web application`,
      },
      {
        title: "Mobile app",
        content: `Created a mobile app with UI/UX design considerations, preserving all functionalities and enhancing
        user engagement.`,
      },
      {
        title: "Stack",
        content: `PHP, JavaScript, Flutter, REST APIs, Cypress, HTML, CSS`,
      },
    ],
  },

  {
    company: "Solutions Studio",
    role: "Developer/Consultant",
    start: "December 2022",
    end: "July 2023",
    details: [
      {
        title: "Real-estate CRM Solution",
        content: `Designed and implemented a custom backend
        solution for a realty company, this led to enhancing the customer relationships through a modern web application. The
        solution helped the client by reducing their day-to-day activities by 85%.`,
      },
      {
        title: "Mobile Application - Tonga 'Atautolu",
        content: `Developed a personal diary feature for the Tongan Government
        Covid-19 contact tracing app. It allowed users to keep track of their location during the pandemic.`,
      },
      {
        title: "Mobile App - Healing Plants of Fiji",
        content: `Re-engineered the app’s architecture by using the provider and consumer design
        pattern, this resulted in an increase of the app’s framerate by 20% and reduced the API calls by 25%. I also assisted with
        training and improving the plant’s detection algorithm by 4%.`,
      },
      {
        title: "Stack",
        content: `Laravel MVC, MySQL, Eloquent ORM, Kotlin, SQLite, Flutter`,
      },
    ],
  },

  {
    company: "The University of the South Pacific",
    role: "Lead Software Engineer/Project Manager",
    start: "July 2022",
    end: "December 2022",
    details: [
      {
        title: "University Mobile App",
        content: `Led a team of software developers and collaborated with stakeholders in an
        agile environment (SRUM). Designed and implemented the mobile app such that it can be used by 20,000 students per
        semester. Additionally, we focused on student security, this feature utilised geo-location and integration with campus
        security to allow for real-time communication between students and campus security.`,
      },
      {
        title: "Web Portal and API",
        content: `Developed a web application to manage and modify the
        mobile app's content (keeping it dynamic). This included implementing an API with JWT authentication to keep
        communication secure and encrypting the data while transmitting over the network.`,
      },
      {
        title: "Stack",
        content: `Flutter, REST API, Laravel, JWT, Bootstrap`,
      },
    ],
  },
];

const EducationSection = [
  {
    uniName: "Queensland University of Technology",
    shortName: "QUT",
    start: "July 2022",
    end: "July 2024",
    details: [
      {
        title: "Course",
        content: `Master of Information Technology (Computer Science)`,
      },
      {
        title: "GPA",
        content: `6.33/7`,
      },
    ],
    awards: [
      {
        title: "Scholarship Award",
        content: `International Merit Scholarship`,
      },
      {
        title: "Academic Award",
        content: `Deans Excellence Award`,
      },
    ],
  },

  {
    uniName: "The University of the South Pacific",
    shortName: "USP",
    start: "January 2018",
    end: "December 2021",
    details: [
      {
        title: "Course",
        content: `Bachelor of Software Engineering`,
      },
      {
        title: "GPA",
        content: `4.1/4.5`,
      },
    ],
    awards: [
      {
        title: "Gold Medal",
        content: `Most outstanding Software Engineering graduate`,
      },
      {
        title: "Academic Award",
        content: `Outstanding Discipline Award for Computer Science`,
      },
    ],
  },
];

const ResumePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-start w-[90%] md:w-[70%]  m-auto mt-5">
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-purple-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal hidden md:block"></div>
        <div className="absolute top-[10%] left-[55%] w-[300px] h-[300px] bg-orange-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000 hidden md:block"></div>
        <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-blue-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000 hidden md:block"></div>

        {/* Summary */}
        <ResumeContentDiv heading={SummarySection.title}>
          <ResumeContent content={SummarySection.content} />
        </ResumeContentDiv>

        {/* Skills */}
        <ResumeContentDiv className="py-5" heading="Skills">
          {SkillSections.map((item) => (
            <div key={item.title} className="flex flex-col items-start justify-start py-3 z-0">
              <ContentHeading text={item.title} />
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
        </ResumeContentDiv>

        <ResumeContentDiv className="py-5" heading="Experience">
          {ExperienceSection.map((experienceItem) => (
            <div key={experienceItem.company}>
              <h2 className="text-2xl pt-3 text-slate-500 font-semibold">{experienceItem.role}</h2>
              <ContentHeading
                text={`${experienceItem.company.toUpperCase()} (${experienceItem.start} - ${experienceItem.end})`}
              />

              {experienceItem.details.map((detail) => (
                <ul className="p-2 list-disc ml-2 md:ml-5" key={detail.content}>
                  <li>
                    <p className="font-semibold text-lg text-primary">
                      {detail.title}:{" "}
                      <span className="text-primary opacity-90 font-normal text-base ">{detail.content}</span>
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </ResumeContentDiv>

        <ResumeContentDiv heading="Education">
          {EducationSection.map((item) => (
            <div key={item.start}>
              <h2 className="text-2xl pt-3 text-slate-500 font-semibold">
                {item.uniName} ({item.shortName})
              </h2>
              <ContentHeading text={`${item.start} - ${item.end}`} />
              {item.details.map((detail) => (
                <ul className="p-2 list-disc ml-2 md:ml-5" key={detail.content}>
                  <li>
                    <p className="font-semibold text-lg text-primary">
                      {detail.title}:{" "}
                      <span className="text-primary opacity-90 font-normal text-base ">{detail.content}</span>
                    </p>
                  </li>
                </ul>
              ))}
              <ContentHeading text="Awards" />
              {item.awards.map((detail) => (
                <ul className="p-2 list-disc ml-2 md:ml-5" key={detail.title}>
                  <li>
                    <p className="font-semibold text-lg text-primary">
                      {detail.title}:{" "}
                      <span className="text-primary opacity-90 font-normal text-base ">{detail.content}</span>
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </ResumeContentDiv>
      </div>
    </>
  );
};

export default ResumePage;
