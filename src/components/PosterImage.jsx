import airel from "../assets/airel.png";

function PosterImage() {
  return (
    <div className="relative w-[451px] h-[623px]">
      <img
        src={airel}
        alt="Airel"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
    </div>
  );
}

export default PosterImage;