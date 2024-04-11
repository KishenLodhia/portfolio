interface MdBlobProps {
  width?: string;
  height?: string;
  color?: string;
}

const MdBlob: React.FC<MdBlobProps> = ({ width = "400px", height = "400px", color = "purple" }) => {
  const tops = ["10%", "20%", "30%", "40%", "50%"];
  const lefts = ["10%", "20%", "30%", "40%", "50%"];
  const delays = [2000, 3000, 4000];

  const top = tops[Math.floor(Math.random() * tops.length)]; // Select a random top from the array
  const left = lefts[Math.floor(Math.random() * lefts.length)]; // Select a random left from the array
  const delay = delays[Math.floor(Math.random() * delays.length)]; // Select a random delay from the array

  return (
    <div
      className={`absolute top-[${top}] left-[${left}] w-[${width}] h-[${height}] ${color} rounded-full opacity-10 filter blur-2xl -z-11 animate-blob mix-blend-normal animation-delay-${delay} hidden md:block pointer-events-none`}
    ></div>
  );
};

export default MdBlob;
