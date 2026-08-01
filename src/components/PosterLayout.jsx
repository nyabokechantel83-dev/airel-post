function PosterLayout({ children }) {
  return (
    <div className="relative w-[792px] h-[1117px] bg-[#000000] overflow-hidden">
      <div className="absolute top-0 left-[451px] w-[341px] h-[1117px] bg-[#FFFFFF]" />

      {children}
    </div>
  );
}

export default PosterLayout;