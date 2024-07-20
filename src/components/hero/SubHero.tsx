import { Link } from "react-router-dom";
import { getPaths, scrollToTop } from "../navbar/Navbar";
import { useState } from "react";

const menuArr = ["About Us", "Services", "Testimonials"];

const SubHero = () => {
  const [toggleMore, setToggleMore] = useState(false);
  return (
    <div className="sm:mx-12 mt-10 encode-sans-semi-condensed-regular hiddegn md:block px-4">
      <div className="flex justify-between mb-2">
        {menuArr.map((i) => (
          <Link
            className="text-lg encode-sans-semi-condensed-medium hover:underline"
            to={getPaths(i)}
            key={i}
            onClick={scrollToTop}
          >
            {i}
          </Link>
        ))}
      </div>
      <p className="mb-2 lince-clamp-3 md:line-clamp-none text-[#5C5C5C]">
        CalRaid Nutrition Clinic is the brainchild of Dietitian Luana
        Mascarenhas, a qualified dietitian who decided to take a step further to
        educate the community we live in on the importance of Nutrition & Health
        in today’s day and age. CalRaid comes from the concept of raiding
        calories within our pantry and kitchen which are empty and unnecessary
        for our body and end up causing more harm than good.
      </p>
      {toggleMore && (
        <p className="mb-2 lince-clamp-3 md:line-clamp-none text-[#5C5C5C]">
          CalRaid is more of a movement towards a healthier, fitter and content
          disease-free lifestyle by not just advising good eating habits but
          also educating each one on the roles and functions that foods play in
          our bodies. CalRaid aims to empower individuals by making them
          well-informed consumers with sound knowledge and understanding of
          their bodies and thus sustaining a healthier nation.
        </p>
      )}
      <a
        onClick={() => setToggleMore(!toggleMore)}
        className="underline text-[#5C5C5C] cursor-pointer"
      >
        Read {toggleMore ? "Less" : "More"}...
      </a>
    </div>
  );
};

export default SubHero;
