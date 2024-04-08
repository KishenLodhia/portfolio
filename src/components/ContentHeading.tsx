interface HeadingInterface extends React.HTMLAttributes<HTMLHeadElement> {
  text: string;
}

const ContentHeading = ({ text, ...props }: HeadingInterface) => {
  return (
    <h2 className="text-lg text-slate-500" {...props}>
      {text.toUpperCase()}
    </h2>
  );
};

export default ContentHeading;
