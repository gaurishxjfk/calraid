import { useEffect, useRef, useState } from "react";
import PlansData from "../../data/PlansData.json";
import PlanModal from "./PlanModal";

const Plans = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const myElementRef = useRef<HTMLDivElement>(null);

  const [activePlanId, setActivePlanId] = useState<null | string>(null);
  const [modalData, setModalData] = useState<null | number>(null);

  const handleClick = (id: string) => {
    setActivePlanId(id);
  };

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setModalData(rect.top);
    }
    if (activePlanId === null) {
      setModalData(null);
    }
  }, [activePlanId]);

  useEffect(() => {
    if (activePlanId && activePlanId?.length > 0 && myElementRef.current) {
      myElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activePlanId]);

  return (
    <section className="">
      {activePlanId && (
        <PlanModal
          id={activePlanId}
          setActivePlanId={setActivePlanId}
          modalData={modalData}
        />
      )}
      <div
        ref={myElementRef}
        className="h-[40vh] bg-cover bg-center bg-backfeoung-image text-center relative"
      >
        <div className="h-[40vh] flex flex-col pt-16 bg-gradient-to-b from-[#75917bd3] to-[#75917b48]">
          <h3 className="text-[24px] md:text-[36px] font-bold text-white ">
            Our Expertise
          </h3>
          <h3 className="text-[20px] text-white ">
            We expertise in the following Customised Nutrition Planning for
            various health categories
          </h3>
        </div>
      </div>
      <div className="w-full md:w-[80%] mx-auto flex flex-wrap gap-6 justify-center -mt-24">
        {PlansData.sections.map((i) => (
          <div
            ref={divRef}
            key={i.id}
            className={`p-2 bg-white w-[17rem] mx-auto drop-shadow-xl mb-20 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] shadow-[#75917b7c]"
          }`}
          >
            <div className="relative text-center flex justify-center">
              <img src={`/${i.id}.jpg`} alt="plan 4" className={``} />
            </div>
            <div className="text-center mt-8">
              <h5
                className={`encode-sans-semi-condensed-bold text-[#75917B] text-[24px] my-1`}
              >
                {i.title}
              </h5>
              <p
                className={`encode-sans-semi-condensed-regulari my-1 line-clamp-4 text-[18px] "
              }`}
              >
                {i.description}
              </p>
              <button
                className="my-1 bg-[#75917B] px-3 py-1 text-white"
                onClick={() => handleClick(i.id)}
              >
                Read More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
