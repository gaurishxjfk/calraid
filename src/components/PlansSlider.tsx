import React, { useState, useEffect } from "react";
import PlansData from "../data/PlansData.json";

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

    const interval = setInterval(() => nextSlide(), 9000);
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

const PlanCard = ({
  centerID,
  name,
  desc,
  id,
}: {
  centerID: number;
  name: string;
  desc: string;
  id: string;
}) => {
  return (
    <div
      className={`p-2  bg-white w-[17rem] mx-auto  drop-shadow-xl mb-20 ${
        centerID === 10 &&
        "scale-110 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] shadow-[#75917b7c]"
      }`}
    >
      <div className="relative text-center flex justify-center">
        <img src={`/${id}.jpg`} alt="plan 4" className={``} />
        <div
          className={`absolute rounded-full bg-white p-1 -bottom-[15%] scale-90 drop-shadow-md`}
        >
          <img src={`/${id}_icon.png`} alt="" className="h-16" />
        </div>
      </div>
      <div className="text-center mt-8">
        <h5
          className={`encode-sans-semi-condensed-bold text-[#75917B] text-[24px] my-1`}
        >
          {name}
        </h5>
        <p
          className={`encode-sans-semi-condensed-regulari text-[16px] my-1 line-clamp-4 ${
            centerID === 10 &&
            "text-[18px] encode-sans-semi-condensed-mediumi scale-95"
          }`}
        >
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
