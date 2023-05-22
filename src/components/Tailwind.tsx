type Props = {};

export default function Tailwind({}: Props) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-blue-500 w-[500px] h-[300px] rounded-[12px] flex-col flex justify-center items-center gap-2 p-3  shadow-lg shadow-cyan-500/50">
        <span className="text-white font-semibold text-4xl text-center leading-[2.9rem]">
          What doesn't kill you will make you stronger
        </span>
        <span className="text-white font-normal text-[1rem] italic text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          sagittis enim. Praesent tincidunt arcu non nisl sollicitudin, a
          pellentesque justo
        </span>
      </div>
    </div>
  );
}
