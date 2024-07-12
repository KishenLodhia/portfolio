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
import { TbApi } from "react-icons/tb";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import weatherAppImage from "@/assets/weather-app.gif";
import linkedInFeatured from "@/assets/linkedin-featured.jpeg";
import cosApp from "@/assets/cos-app.jpeg";
import goldMedal from "@/assets/gold-medal.jpeg";
import uspApp from "@/assets/usp-app.jpeg";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MdBlob from "@/components/MdBlob";
import ContentDiv from "@/components/ContentDiv";
import { useEffect } from "react";

const SummarySection = {
  title: "Summary",
  content: `Highly motivated Software Engineer with full working rights and over 2 years of full stack development experience. Awarded a gold medal
for academic excellence. Passionate about developing high-quality software with a focus on writing efficient code. Proven track record in
successfully leading projects, collaborating with cross-functional teams, and delivering solutions that enhance user experience and
operational efficiency.`,
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
        content: `Collaborated with the company's CEO, Marketing, and Business Development Manager to identify the current 
        painpoints in the system. Then, collaborated and engineered a hybrid platform by merging a web application with WordPress-based 
        technologies, enhancing user and staff experience, resulting in a 30% increase in user satisfaction.`,
      },
      {
        title: "External API Development",
        content: `Collaborated with external software engineers and negotiated a new API design that integrates with the web application 
        seamlessly and reduced the error rate to almost zero. The API integrated with the system seamlessly`,
      },
      {
        title: "Internal API Development",
        content: `Engineered a new method to implement a REST API to enable communication between Web Application and the Mobile Application.
        Created a new plugin to integrate with WordPress environment and allowed the mobile app to link to it.`,
      },
      {
        title: "Mobile app",
        content: `Devised an architecture for the mobile app to seamlessly integrate with the web application using minimal resources 
        available. This allowed the app to load all data and cache it within 2 seconds. Initiated a UI/UX principles to building 
        beautiful and effective screen designs.`,
      },
      {
        title: "Automated testing",
        content: `Carried out automated end to end tests for the whole web application and debugged as required.`,
      },

      {
        title: "Stack",
        content: `PHP, JavaScript, Flutter, Dart, REST APIs, Cypress, HTML, CSS`,
      },
    ],
  },
  {
    company: "Queensland University of Technology",
    role: "Web and Mobile Development Project",
    start: "February 2024",
    end: "June 2024",
    details: [
      {
        title: "Portfolio Project",
        content: `Designed, implemented, and deployed a responsive personal portfolio website using state-of-the-art technologies 
        including React, Vite, Tailwind CSS, and Shadcn/UI. Demonstrated advanced Git/GitHub skills and integration of open-source packages.`,
      },
      {
        title: "Full-Stack Application",
        content: `Developed a user-friendly fitness tracking mobile app with React Native, Expo, Node.js, Express, and MySQL. 
        Integrated secure REST APIs for tracking water intake, steps, and personal wellbeing, showcasing full-stack development expertise.`,
      },
      {
        title: "Stack",
        content: `JavaScript, TypeScript, React, Vite, React Native, Expo, Postman, REST APIs, HTML, CSS, Tailwind, Shadcn/ui`,
      },
    ],
  },

  {
    company: "Mettlesome",
    role: "User Experience Research Project",
    start: "February 2024",
    end: "May 2024",
    details: [
      {
        title: "Research",
        content: `Conducted comprehensive user research using techniques such as photo elicitation and affinity diagrams. 
        Through in-depth interviews and usability testing, key user needs and pain points were identified, informing the 
        development of a more effective mood tracking app, Toucan Health, and significantly improving user satisfaction`,
      },
      {
        title: "App Redesign",
        content: `Expertly leveraged Figma to design intuitive, data-driven user interfaces. This redesign included usability 
        testing and evaluation, optimizing the user experience for the Toucan Health app and resulting in increased user 
        engagement and satisfaction.`,
      },
      {
        title: "Tools and Techniques",
        content: `Figma, Usability Testing, Photo Elicitation, Affinity Diagrams, Hook Model`,
      },
    ],
  },
  {
    company: "Queensland University of Technology",
    role: "Large Language Models - Sentiment Analysis",
    start: "August 2023",
    end: "November 2023",
    details: [
      {
        title: "Performance Analysis and Comparison",
        content: `Conducted an in-depth analysis and comparison of four models on Twitter's hydrogen energy discourse. 
        Traditional models, such as logistic regression and Naive Bayes, were found to overfit the data, while fine-tuned 
        BERT-based transformers generalized well, achieving state-of-the-art accuracy of 89%. This study provided valuable 
        insights into the advantages of large language models over traditional approaches in understanding and processing 
        hydrogen energy-related discussions.`,
      },
      {
        title: "Research Publication",
        content: `Authored a comprehensive research paper on the analysis of large language models (LLMs) versus traditional 
        models in the context of Twitter's hydrogen energy discussions. The paper detailed the methodologies, findings, and 
        implications of the study, highlighting how traditional models tended to overfit while LLMs demonstrated superior 
        generalization capabilities. This research received excellent marks (Grade: 7 / 7) for its quality, depth of analysis, 
        and significant contribution to the field, showcasing the potential of BERT-based transformers in achieving high accuracy 
        and impactful research outcomes.`,
      },

      {
        title: "Stack",
        content: `Python, Jupyter Notebook, Tensorflow, Huggingface, Sci-kit learn`,
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
        content: `Designed and implemented a custom backend solution for a realty company, this led to enhancing the customer 
        relationships through a modern web application. The solution helped the client by reducing their day-to-day activities by 85%.`,
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
        content: `6.375/7`,
      },
    ],
    awards: [
      {
        title: "Scholarship Award",
        content: `International Merit Scholarship`,
      },
      {
        title: "Academic Award",
        content: `Deans Excellence Award Semester 1 2023`,
      },
      {
        title: "Academic Award",
        content: `Deans Excellence Award Semester 1 2024`,
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

const HighlightsSection = [
  {
    title: "Featured on USP",
    closedDescription: "Official USP LinkedIn page",
    openDescription: "I was featured on the university LinkedIn page",
    imageLink: linkedInFeatured,
  },
  {
    title: "Gold Medal Winner",
    closedDescription: "Software Engineering Gold Medalist",
    openDescription: "Gold Medal for Most outstanding Software Engineering graduate",
    imageLink: goldMedal,
  },

  {
    title: "Cafeteria App Project",
    closedDescription: "My first large software project",
    openDescription:
      "CS415: Advanced Software Engineering project. This is a very deary project to me as it was my first large scale project. In this project, we designed a system for the university staff/students to order online from the cafeteria. 3 releases were made: (1) Web Application with limited features. (2) Web Application with all features. (3) Mobile App with full features. The image below depicts the UI for the app.",
    imageLink: cosApp,
  },
  {
    title: "USP Mobile App",
    closedDescription: "University mobile app project",
    openDescription:
      "A comprehensive mobile app, web portal, and API were developed to serve the needs of over 20,000 students, employing technologies like Flutter, Laravel, Firebase, MySQL, Node.JS, and RESTful APIs within an Agile (Scrum) methodology. Emphasizing intuitive UI/UX, offline functionality, and stringent security measures, the solution ensures an enjoyable user experience. Features include dynamic display of research and innovation data, access to university disciplines, emergency services integration for quick assistance, a digital notice board for announcements and trading, COVID-19 updates, and app notifications for staff-student communication via Firebase Cloud Messaging.",
    imageLink: uspApp,
  },
  {
    title: "Weather App Project",
    closedDescription: "Minimal weather app",
    openDescription:
      "This app boasts a clean and minimalistic interface, offering real-time weather updates fetched from weatherapi.com for accurate information. It automatically detects users' locations, delivering precise weather details at their fingertips. Whether users are weather enthusiasts or simply curious about forecasts, the app provides a user-friendly experience. Developed entirely using Flutter, this project allowed me to hone my mobile app development skills and delve into API integrations. You can check out the code on my GitHub. Stay tuned for future enhancements, including tailored insights, customizable weather widgets, and alert notifications for severe weather conditions. Thanks to the supportive Flutter community, this project became a reality.",
    imageLink: weatherAppImage,
  },
];

const ResumePage = () => {
  useEffect(() => {
    document.title = "Kishen | Resume";
  }, []);
  return (
    <>
      <div className="flex flex-col items-start justify-start w-[90%] md:w-[70%]  m-auto mt-5">
        <MdBlob color="bg-purple-500" />
        <MdBlob color="bg-orange-500" />
        <MdBlob color="bg-blue-500" />

        {/* Summary */}
        <ContentDiv heading={SummarySection.title}>
          <ResumeContent content={SummarySection.content} />
        </ContentDiv>

        {/* Skills */}
        <ContentDiv className="py-5" heading="Skills">
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
        </ContentDiv>

        {/* Experience */}
        <ContentDiv className="py-5" heading="Experience">
          <MdBlob color="bg-green-500" />
          <MdBlob color="bg-red-500" />
          <MdBlob color="bg-slate-500" />
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
        </ContentDiv>

        {/* Education */}
        <ContentDiv heading="Education">
          <MdBlob color="bg-purple-500" />
          <MdBlob color="bg-orange-500" />

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
        </ContentDiv>

        {/* Highlights */}
        <ContentDiv className="py-5" heading="Highlights">
          <div className="flex flex-wrap gap-2 p-3">
            {HighlightsSection.map((item) => (
              <div key={item.title}>
                <Dialog>
                  <DialogTrigger>
                    <Card className="bg-clip-border overflow-hidden h-96 md:opacity-45 hover:opacity-100 transition duration-300">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.closedDescription}</CardDescription>
                      </CardHeader>
                      <div className="h-72 w-72 bg-cover overflow-hidden rounded-md ">
                        <img src={item.imageLink} alt="Featured image" className="h-full w-full object-cover" />
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.openDescription}</DialogDescription>
                    </DialogHeader>
                    <div className="h-full rounded-md overflow-hidden touch-pinch-zoom">
                      <img src={item.imageLink} alt="Featured image" className="h-full w-full object-cover" />
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </ContentDiv>
      </div>
    </>
  );
};

export default ResumePage;
