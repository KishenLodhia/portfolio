interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
}

const Heading = ({ heading, ...props }: HeadingProps) => {
  return (
    <div className="w-full">
      <div className="text-3xl text-lime-500" {...props}>
        {heading}
      </div>
      {/* <hr className="h-1 w-full" /> */}
    </div>
  );
};

export default Heading;
