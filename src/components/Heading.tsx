// Importing necessary types from React
import React from "react";

// Defining the props for the Heading component
interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
}

// Heading component
const Heading = ({ heading, ...props }: HeadingProps) => {
  return (
    <div className="w-full">
      <div className="text-3xl text-lime-500" {...props}>
        {heading}
      </div>
    </div>
  );
};

// Exporting the Heading component
export default Heading;
