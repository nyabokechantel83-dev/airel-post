function PosterLayout({ children }) {
  return (
    <div className="relative w-[792px] h-[1117px]">
      <div className="absolute inset-0 bg-black"></div>

      <div className="absolute top-0 left-[451px] w-[341px] h-[1117px] bg-white"></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default PosterLayout;