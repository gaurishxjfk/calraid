import { useEffect, useRef, useState } from "react";
import PlansData from "../../data/PlansData.json";
import PlanModal from "./PlanModal";
import { useNavigate, useParams } from "react-router-dom";

const Plans = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);
  const myElementRef = useRef<HTMLDivElement>(null);

  const [activePlanId, setActivePlanId] = useState<null | string>(null);

  const handleClick = (id: string) => {
    navigate(`/plans/${id}`);
  };

  useEffect(() => {
    if (activePlanId && activePlanId?.length > 0 && myElementRef.current) {
      myElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activePlanId]);

  useEffect(() => {
    if (id) {
      setActivePlanId(id);
    }
  }, [id]);

  return (
    <section className="">
      {activePlanId && (
        <PlanModal id={activePlanId} setActivePlanId={setActivePlanId} />
      )}
      <div
        ref={myElementRef}
        className="h-[40vh] bg-cover bg-center bg-backfeoung-image text-center relative"
      >
        <div className="h-[40vh] flex flex-col pt-16 bg-gradient-to-b from-sec to-sec">
          <h3 className="text-[24px] md:text-[36px] font-bold text-white playwrite-us-trad-bold">
            Our Expertise
          </h3>
          <h3 className="text-[20px] text-white ">
            We expertise in the following Customised Nutrition Planning for
            various health categories
          </h3>
        </div>
      </div>
      <div className="w-full md:w-[80%] mx-auto flex flex-wrap gap-2 justify-center -mt-24">
        {PlansData.sections.map((i) => (
          <div
            ref={divRef}
            key={i.id}
            className={`p-2 bg-white w-[17rem] mx-auto drop-shadow-xl rounded-md mb-12 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] shadow-[#75917b7c]"
          }`}
          >
            <div className="relative text-center flex justify-center">
              <img src={`/${i.id}.jpg`} alt="plan 4" className={`rounded-md`} />
            </div>
            <div className="text-center mt-8">
              <h5
                className={`oleo-script-regular text-sec text-[24px] md:text-[28px]`}
              >
                {i.title}
              </h5>
              <p
                className={`italic my-1 line-clamp-4 text-[18px] text-gray-700
              `}
              >
                {i.description}
              </p>
              <button
                className="my-1 bg-sec px-3 py-1 text-white rounded-md"
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
