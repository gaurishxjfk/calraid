const ServiceModal = ({
  title,
  desc,
  descItems,
  id,
  setActiveCard,
}: {
  title: undefined | string;
  desc: undefined | string;
  id: undefined | number;
  descItems: undefined | string[];
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div
      className="absolute rounded-md bottom-40 inset-x-0 w-[90%] md:w-[90%] lg:w-[60%] mx-auto
                 border-2 border-slate-300 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4 bg-[#e2e2e2] z-50 bg-opacity-50 backdrop-blur-md bg-clip-padding backdrop-filter"
    >
      <button
        className={`absolute right-5 top-5 font-semibold text-xl text-[#75917B]`}
        onClick={() => setActiveCard(null)}
      >
        X
      </button>
      <div className="mt-6">
        <div className="mx-auto flex items-center justify-center bg-white w-14 h-14 rounded-full ">
          <img src={`/offer_${id}.png`} alt="CardEl" className="   mx-auto " />
        </div>
        <div className="encode-sans-semi-condensed-bold text-[#75917B] text-center text-2xl encode-sans-semi-condensed-medium tracking-wide">
          {title}
        </div>
        <div className="text-[18px] text-[#5C5C5C] text-center my-2">
          {desc}
        </div>

        <ul className="text-[16px] mt-4 w-[90%] flex flex-col gap-2 text-[#6D6D6D] mx-auto ">
          {descItems !== undefined &&
            descItems.map((item, j) => (
              <li key={j} className=" text-left">
                👉 {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceModal;
