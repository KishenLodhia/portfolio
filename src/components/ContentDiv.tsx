// Rendering the application into the root element
import Heading from "./Heading";

// Defining the props for the ContentDiv component
interface ContentDivProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
}

// ContentDiv component
const ContentDiv = ({ children, heading, ...props }: ContentDivProps) => {
  return (
    <div {...props}>
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

export default ContentDiv;
