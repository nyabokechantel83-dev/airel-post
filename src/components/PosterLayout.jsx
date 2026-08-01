function PosterLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] p-8">
      <div className="relative w-[792px] h-[1117px] bg-black overflow-hidden">
        <div className="absolute top-0 left-[451px] w-[341px] h-[1117px] bg-white"></div>

        {children}
      </div>
    </div>
  );
}

export default PosterLayout;
