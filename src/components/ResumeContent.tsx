interface ResumeContentProps {
  content: string;
}

const ResumeContent = ({ content }: ResumeContentProps) => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default ResumeContent;
