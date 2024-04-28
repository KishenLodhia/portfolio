// Importing necessary types from React
import React from "react";

// Defining the props for the ContentHeading component
interface HeadingInterface extends React.HTMLAttributes<HTMLHeadElement> {
  text: string;
}

// ContentHeading component
const ContentHeading = ({ text, ...props }: HeadingInterface) => {
  return (
    <h2 className="text-lg text-slate-500" {...props}>
      {text.toUpperCase()}
    </h2>
  );
};

// Exporting the ContentHeading component
export default ContentHeading;
