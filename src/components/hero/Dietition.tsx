import DietitionImg from "/dietition.jpg";
import SubHero from "./SubHero";

const Dietition = () => {
  return (
    <div className="relative w-[100%] sm:w-[80%] mx-auto flex flex-col md:flex-row justify-between">
      <img src={DietitionImg} alt="DietitionImg" className="mt-12 lg:-mt-12 h-[24rem] mx-auto object-cover object-bottom"/>
      <SubHero />
    </div>
  );
};

export default Dietition;
