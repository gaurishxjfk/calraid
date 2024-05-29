import React, { useState, useEffect } from "react";
import PlansData from '../data/PlansData.json'

interface SliderProps {}

const PlansSlider: React.FC<SliderProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [transition, setTransition] = useState("transform 0.5s ease");

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 990) {
      setSlidesToShow(3);
    } else if (width >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    const interval = setInterval(() => nextSlide(), 3000);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    setTransition("transform 0.5s ease");
    setCurrentIndex((prevIndex) =>
      prevIndex === PlansData.sections.length ? 1 : prevIndex + 1
    );
  };

  const handleTransitionEnd = () => {
    if (currentIndex === PlansData.sections.length) {
      setTransition("none");
      setCurrentIndex(0);
    }
  };



  return (
    <section className="w-full md:w-[95%] lg:w-[80%] mx-auto -mt-24 overflow-x-hidden pt-8">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          transition: transition,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {PlansData.sections.map((i, index) => (
          <div
            key={i.id}
            className={`slide`}
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <PlanCard
              centerID={
                slidesToShow === 2
                  ? 1
                  : slidesToShow === 1
                  ? index === currentIndex
                    ? 10
                    : 1
                  : index === currentIndex + 1
                  ? 10
                  : 1
              }
              name={i.title}
              id={i.id}
              desc={i.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const PlanCard = ({ centerID, name, desc, id }: { centerID: number, name: string, desc: string, id: string }) => {
  console.log(`/${id}_icon.png`)
  return (
    <div
      className={`p-2  bg-white w-[17rem] mx-auto  drop-shadow-xl mb-20 ${
        centerID === 10 && "w-[19rem] shadow-2xl drop-shadow-4xl shadow-slate-400"
      }`}
    >
      <div className="relative text-center flex justify-center">
        <img src={`/${id}.jpg`} alt="plan 4" className={`px-2 scale-90 ${centerID === 10 && 'scale-100 mt-4' }`} />
      <div className={`absolute rounded-full bg-white p-1 -bottom-[15%] scale-90 drop-shadow-md ${centerID === 10 && 'scale-100' }`}>
          <img src={`/${id}_icon.png`} alt="" className="h-16" />
        </div>
      </div>
      <div className="text-center mt-12">
        <h5 className={`encode-sans-semi-condensed-bold text-[#75917B] text-[24px] my-1 ${centerID === 10 && 'text-[28px]' }`}>
          {name}
        </h5>
        <p className={`encode-sans-semi-condensed-regular text-[16px] my-1 line-clamp-4 ${centerID === 10 && 'text-[20px]' }`}>
          {desc}
        </p>
        <button className="my-1 bg-[#75917B] px-3 py-1 text-white">
          Read More...
        </button>
      </div>
    </div>
  );
};

export default PlansSlider;
