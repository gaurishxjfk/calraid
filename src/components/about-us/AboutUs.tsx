import { useRef } from "react";
import OurTeam from "./OurTeam";

const buttonsArr = ["Our Story", "Meet the Dietitian", "Our Philosophy"];

const AboutUs = () => {
  const storySecRef = useRef<HTMLDivElement>(null);
  const dietitionSecRef = useRef<HTMLDivElement>(null);
  const philosophySecRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, padding: number = 100) => {
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - padding;
  
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    "our story": storySecRef,
    "meet the dietitian": dietitionSecRef,
    "our philosophy": philosophySecRef,
  };

  return (
    <section className="w-full  text-center">
      <div className="bg-gradient-to-b from-[#ceae99ab] via-[#ebd1c1d3] to-[#ceae99ab] py-[3rem]">
        <h3 className="text-[24px]  encode-sans-semi-condensed-extrabold  text-main ">
          About Us
        </h3>
        <h3 className="text-[24px] sm:text-[28px]  encode-sans-semi-condensed-semibold text-main ">
          Hello! We Are CalRaid Nutrition Clinic
        </h3>
        <div className="flex w-[80%] justify-around flex-wrap md:flex-nowrap mx-auto mt-8">
          {buttonsArr.map((i, j) => (
            <div
              className="shadow-[-3px_3px_rgba(117,_145,_123,_0.4),-6px_6px_rgba(117,_145,_123,_0.3)]
                           px-6 py-3 border bg-white border-gray-100 border-b-0 border-l-0 text-main text-[18px] encode-sans-semi-condensed-semibold
                          hover:bg-main hover:text-white cursor-pointer transition-all ease-in-out duration-300 w-[80%] md:w-auto my-2 rounded-md"
              key={j}
              onClick={() => scrollToSection(sectionRefs[i.toLowerCase()])}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-main py-3" ref={storySecRef}>
          <h1 className="text-[32px] md:text-[48px] playball-regular  tracking-wider  text-white">
            Our Story
          </h1>
        </div>
        <div className=" w-[90%] md:w-[80%] lg:w-[70%] mx-auto my-8 text-slate-600 encode-sans-semi-condensed-regular tracking-wide">
          <p>
            CalRaid Nutrition Clinic is the brain child of dietitian Luana
            Mascarenhas, a qualified dietitian who decided to take a step
            further to educate the community we live in on the importance of
            Nutrition & Health in today's day and age. CalRaid comes from the
            concept of raiding calories within our pantry and kitchen which are
            empty and unnecessary for our body and end up causing more harm than
            good.
          </p>
          <br></br>
          <p>
            CalRaid is more of a movement towards a healthier, fitter and
            content disease-free lifestyle by not just advising good eating
            habits but also educating each one on the roles and functions that
            foods play in our bodies. CalRaid aims to empower individuals by
            making them well-informed consumers with sound knowledge and
            understanding of their bodies and thus sustaining a healthier
            nation.
          </p>
        </div>
      </div>
      <div ref={dietitionSecRef}>
        <OurTeam />
      </div>

      <div
        ref={philosophySecRef}
        className="relative bg-white py-[5rem] h-[60vh]  mb-2"
      >
        <div className="w-full bg-main h-2 absolute -top-1 z-30"></div>
        <div className="w-full bg-[#e7d0c0] h-4 absolute -bottom-2 z-30"></div>
        <div className="w-full bg-main h-[10rem] absolute inset-0 my-auto z-10"></div>
        <div className="w-[90%] sm:w-[80%] md:w-[65%] px-2 md:px-12  bg-[#e7d0c0] py-8 z-20 absolute inset-0 mx-auto shadow-[3px_0px_5px_rgba(0,0,0,0.38),-3px_0px_5px_rgba(0,0,0,0.38)] flex flex-col justify-center">
          <h1 className="text-[46px] md:text-[48px] playball-regular  tracking-wider  text-main py-2 ">
            Our <span className="">Philosophy</span>
          </h1>

          <p className="text-slate-600">
            Working with CalRaid is a commitment you make to yourself to better
            your health and food based knowledge. Our food coaching experts will
            not only guide you with the right nutrition practice but monitor and
            drive compliance each step of the way until they believe you have
            understood the science behind eating healthy.
            <br />
            <br /> CalRaid has a fresh approach towards Nutrition Intervention
            and the process will leave you feeling positive, gleaming and of
            course lighter and fitter. CalRaid experts devote time and are
            available to their clients at every step of their journey towards
            better health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
