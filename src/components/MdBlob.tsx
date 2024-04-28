interface MdBlobProps {
  width?: string;
  height?: string;
  color?: string;
  isStatic?: boolean;
  top?: string;
  left?: string;
}

const MdBlob: React.FC<MdBlobProps> = ({
  width = "400px",
  height = "400px",
  color = "purple",
  isStatic = false,
  top,
  left,
}) => {
  // Arrays of possible top positions, left positions, and delays
  const tops = ["10%", "20%", "30%", "40%", "50%"];
  const lefts = ["10%", "20%", "30%", "40%", "50%"];
  const delays = [2000, 3000, 4000];

  // Randomly selecting a top position, left position, and delay
  const blobTop = top ?? tops[Math.floor(Math.random() * tops.length)];
  const blobLeft = left ?? lefts[Math.floor(Math.random() * lefts.length)];
  const delay = delays[Math.floor(Math.random() * delays.length)];

  const animationClass = isStatic ? "" : "animate-blob";

  return (
    <div
      className={`absolute top-[${blobTop}] left-[${blobLeft}] w-[${width}] h-[${height}] ${color} rounded-full opacity-10 filter blur-2xl -z-11 ${animationClass} mix-blend-normal animation-delay-${delay} hidden md:block pointer-events-none`}
    ></div>
  );
};

export default MdBlob;
