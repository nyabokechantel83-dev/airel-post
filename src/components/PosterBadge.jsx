function PosterBadge({
  title,
  text,
  className = "",
  titleClassName = "",
  textClassName = "",
  showLine = false,
}) {
  return (
    <div className={className}>
      {showLine ? (
        <>
          <h2
            className={`text-[16px] font-bold uppercase text-[#333333] ${titleClassName}`}
          >
            {title}
          </h2>

          <div className="mt-2 w-full h-[2px] rounded-[2px] bg-[#E88F40]"></div>
        </>
      ) : (
        <>
          <h2
            className={`text-[20px] font-semibold text-white ${titleClassName}`}
          >
            {title}
          </h2>

          <p
            className={`mt-5 text-[17px] font-light leading-[28px] text-white ${textClassName}`}
          >
            {text}
          </p>
        </>
      )}
    </div>
  );
}

export default PosterBadge;