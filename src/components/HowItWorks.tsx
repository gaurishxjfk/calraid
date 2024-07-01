import { useState } from "react";

const setpsArr = [
  {
    id: 1,
    title: "Dial us up",
    icon: "get_in_touch",
    desc: "Get in touch with us regarding queries, pitches, interests, questions, via SMS/ Call/ Email and we will get back to you promptly within 24 hrs",
  },
  {
    id: 2,
    title: "Let's Discuss",
    icon: "lets_discuss",
    desc: "We interact and discuss together all the possible options for getting on board the health-wagon at CalRaid",
  },
  {
    id: 3,
    title: "Pick A Plan",
    icon: "pick_a_plan",
    desc: "You pick a plan 🡪 Begin processing the payment for the same 🡪 Lock down an appointment slot 🡪 Transaction Confirmation",
  },
  {
    id: 4,
    title: "Time For Action",
    icon: "time_for_action",
    desc: "We set sail and do not look back!!",
  },
  {
    id: 5,
    title: "Voice your Story",
    icon: "voice_your_story",
    desc: "Every experience enjoyed is worth sharing. Tell us how CalRaid helped you achieve your Goals and appear in CalRaid's Hall of Fame!",
  },
];

interface Step {
  title: string;
  icon: string;
  id: number;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <section className="bg-cover bg-center bg-backfeoung-image  w-full  p-4 py-8 md:py-12">
      <div className="text-center md:px-24 lg:px-40  ">
        <h3 className="text-[28px] md:text-[42px] playwrite-us-trad-regular text-[#ffffff] tracking-wide">
          How It Works
        </h3>
        <p className=" mt-2 text-white encode-sans-semi-condensed-regular md:w-[70%]  text-[16px] mx-auto ">
          <span className="encode-sans-semi-condensed-semibold text-[20px] md:text-[24px]">
            Freedom, Flexibility and Choice
          </span>
          <br />
          CalRaid has a customer–first approach and hassle free sign-up process
          where we value your needs and provide the best service in an efficient
          manner.
        </p>
      </div>
      <div className="flex gap-16 flex-wrap items-center justify-center mt-8 ml-8">
        {setpsArr.map((i) => (
          <StepComponentCol
            key={i.id}
            title={i.title}
            icon={i.icon}
            id={i.id}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ))}
      </div>
      <div className="w-[80%] border-0 border-b-[1px] border-b-white mx-auto my-4 md:my-8"></div>
      <div className="text-center md:px-24 lg:px-40  ">
        <h3 className="text-[28px] md:text-[32px] encode-sans-semi-condensed-bold text-[#75917B] tracking-wide">
          {setpsArr[activeStep - 1].title}
        </h3>
        <p className=" mt-2 text-white  md:w-[70%]  text-[16px] mx-auto encode-sans-semi-condensed-light">
          {setpsArr[activeStep - 1].desc}
        </p>
      </div>
    </section>
  );
};

const StepComponentCol: React.FC<Step> = ({
  title,
  icon,
  id,
  activeStep,
  setActiveStep,
}) => {
  return (
    <div
      className={`text-center relative hover:cursor-pointer ${
        activeStep === id
          ? "text-[#75917B] scale-110 font-semibold"
          : "text-white"
      } transition-all ease-in-out duration-500`}
      onMouseEnter={() => setActiveStep(id)}
      // onMouseLeave={() => setActiveStep(0)}
    >
      <img
        src={`/${icon}_icon.png`}
        alt={title}
        className="max-w-[80%] mx-auto"
      />
      <p className=" mt-1">Step {id}</p>
    </div>
  );
};

export default HowItWorks;
