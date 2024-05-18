import DietitionImg from "/dietition.png";
import SubHero from "./SubHero";

const Dietition = () => {
  return (
    <div className="relative w-[100%] sm:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-between">
      <img src={DietitionImg} alt="DietitionImg" className="mt-12 lg:-mt-12 w-[20rem] h-[24rem] mx-auto"/>
      <SubHero />
    </div>
  );
};

export default Dietition;
