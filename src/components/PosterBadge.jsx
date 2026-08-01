function PosterBadge({ title, children }) {
  return (
    <div className="absolute top-[730px] left-[46px] w-[387px] h-[210px] flex flex-col gap-5">
      <h2 className="w-[347px] h-[22px] text-[20px] font-semibold leading-[112%] text-white">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default PosterBadge;