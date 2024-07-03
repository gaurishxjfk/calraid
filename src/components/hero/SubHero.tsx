import { Link } from "react-router-dom";
import { getPaths } from "../navbar/Navbar";

const menuArr = ["About Us", "Services", "Testimonials"];
const SubHero = () => {
  return (
    <div className="sm:mx-12 mt-10 encode-sans-semi-condensed-regular hiddegn md:block px-4">
      <div className="flex justify-between mb-2">
        {menuArr.map((i) => (
          <Link
            className="text-lg encode-sans-semi-condensed-medium"
            to={getPaths(i)}
            key={i}
          >
            {i}
          </Link>
        ))}
      </div>
      <p className="mb-2 line-clamp-3 md:line-clamp-none text-[#5C5C5C]">
        CalRaid Nutrition Clinic is the brainchild of Dietitian Luana
        Mascarenhas, a qualified dietitian who decided to take a step further to
        educate the community we live in on the importance of Nutrition & Health
        in today’s day and age. CalRaid comes from the concept of raiding
        calories within our pantry and kitchen which are empty and unnecessary
        for our body and end up causing more harm than good.
      </p>
      <Link to="/about-us" className="underline text-[#5C5C5C]">
        Read More...
      </Link>
    </div>
  );
};

export default SubHero;
