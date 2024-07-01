import { useEffect, useState } from "react";
import PlansData from "../../data/PlansData.json";
import { Cross } from "../services/ServiceModal";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface planDtlsProp {
  title: string;
  description: string;
  benefits: string[];
  id: string;
  expectations: string[];
}

const PlanModal = ({
  id,
  setActivePlanId,
}: {
  id: string | null;
  setActivePlanId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {

  const navigate = useNavigate();
  const [planDtls, setPlanDtls] = useState<null | planDtlsProp>(null);
  useEffect(() => {
    const plan = PlansData.sections.find((i) => i.id === id);
    if (plan) setPlanDtls(plan);
  }, [id]);

 

  if (id !== null)
    return (
      <div
        className={`absolute rounded-md top-[20vh] inset-x-0 w-[98%] md:w-[90%] !lg:w-[80%] mx-auto pb-8
                 border-2 border-slate-300 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4 bg-[#fff4ed]
                 z-50 bg-opacity-70 backdrop-blur-lg bg-clip-padding backdrop-filter  `}
      >
        <button
          className={`absolute right-5 top-3 cursor-pointer `}
          onClick={() => {
            setActivePlanId(null)
            navigate("/plans")
          }}
        >
          <Cross />
        </button>
        <div className="mt-6">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="md:w-2/3">
              <div className="encode-sans-semi-condensed-bold text-[#75917B] text-center md:text-left text-2xl encode-sans-semi-condensed-medium tracking-wide">
                {planDtls?.title}
              </div>
              <div className="text-[18px] text-[#5C5C5C] text-center md:text-left my-2 ">
                {planDtls?.description}
              </div>
            </div>

            <div className="w-full md:w-1/2 mx-auto">
              <img
                src={`/${planDtls?.id}.jpg`}
                alt="plan image"
                className={`rounded-lg h-[12rem] min-w-[12rem] mx-auto`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2   mt-4">
          <div>
            <div className="text-[16px] encode-sans-semi-condensed-bold sm:text-left pl-4 text-[#75917B]  text-xl  tracking-wide">
              Benefits
            </div>
            <ul className="text-[16px] mt-4 w-[90%] flex flex-col gap-2 text-[#6D6D6D] mx-auto ">
              {planDtls?.benefits !== undefined &&
                planDtls.benefits.map((item, j) => (
                  <li key={j} className="gap-2 text-left flex">
                    <span><Check stroke="#75917B"/></span> {item}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <div className=" text-[15px] encode-sans-semi-condensed-bold sm:text-left pl-4 text-[#75917B]  text-xl  tracking-wide">
              Expectations
            </div>
            <ul className="text-[16px] mt-4 w-[90%] flex flex-col gap-2 text-[#6D6D6D] mx-auto ">
              {planDtls?.expectations !== undefined &&
                planDtls.expectations.map((item, j) => (
                  <li key={j} className="flex gap-2 text-left">
                    <span><Check stroke="#75917B"/></span> {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default PlanModal;
