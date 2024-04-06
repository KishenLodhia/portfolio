import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";

type AboutContent = {
  title: string;
  content: string;
};

const AboutPage = () => {
  let data: AboutContent[] = [
    {
      title: "About",
      content: `Hello! I'm Kishen Lodhia, a passionate Software Engineer currently pursuing my studies at Queensland
        University of Technology (QUT). From a young age, I've been fascinated by technology and its potential to
        transform the world around us. This curiosity led me to pursue a career in software engineering, where I
        thrive on solving complex problems and building innovative solutions.`,
    },
    {
      title: "Background",
      content: `My journey in software engineering began during my undergraduate studies, where I immersed myself in 
      learning va for software engineering and inspired me to pursue further education and career 
      opportunities in the field.`,
    },
    {
      title: "Beyond Tech",
      content: `When i'm not coding, you'll often find me: (1) Playing badminton, table tennis, or cricket. (2) Venturing
      the great outdoors, capturing landscapes and discovering gems in the natures playground. (3) Intrigued by the mysteries of
      the quantum world, I explore mind blowing concepts of quantum mechanics, from wave-partcle theory to quantum entanglement. 
      (4) I'm fascinated by the cosmos, I folow space exploration missions and developments, marveling at humanity's greatest quest
      to explore the final frontier. (5) I have a deep appreciation of the life of cinema, indulging in various genres and eras. 
      
    `,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-start w-[70%] m-auto mt-5">
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-purple-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal hidden md:block"></div>
        <div className="absolute top-[10%] left-[55%] w-[300px] h-[300px] bg-orange-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-4000 hidden md:block"></div>
        <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-blue-500 rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-3000 hidden md:block"></div>

        <div>
          {data.map((item) => (
            <div key={item.title} className="py-10">
              <Heading heading={item.title} />
              <p>{item.content}</p>
            </div>
          ))}
        </div>

        <div className="py-10">
          <Heading heading="Education" />
          <ul className="list-disc pl-5">
            <li>Bachelor of Software Engineering, The University of the South Pacific (Class of 2021)</li>
            <li>
              Master of IT (Computer Science), Queensland University of Technology (Expected Graduattion: July 2024)
            </li>
          </ul>
        </div>
        <div className="py-10 w-full">
          <Heading heading="Inspirational Quote" />
          <Quote />
        </div>

        <div className="py-10"></div>
      </div>
    </>
  );
};

export default AboutPage;
