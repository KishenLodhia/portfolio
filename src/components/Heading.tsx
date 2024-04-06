interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="w-full">
      <div className="text-3xl">{heading}</div>
      <hr className="h-1 w-full" />
    </div>
  );
};

export default Heading;
