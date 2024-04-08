import Heading from "./Heading";

interface ResumeContentDivProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
}

const ResumeContentDiv = ({ children, heading, ...props }: ResumeContentDivProps) => {
  return (
    <div {...props}>
      {/* <Heading heading={heading} /> */}
      <div className="flex flex-row py-5 px-1 relative">
        <div className="border-l-2 rounded-sm mt-3 mr-4 border-lime-500 "></div>
        <div>
          <Heading heading={heading} />
          {children}
        </div>
        <div className="absolute top-0 left-0 my-8 mx-[-1px] w-3 h-3 border-2 border-lime-500 bg-lime-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ResumeContentDiv;
