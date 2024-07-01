import {
  Facebook,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getPaths } from "./navbar/Navbar";

const menusItems = [
  "Home",
  "About Us",
  "Services",
  "Plans",
  "Blogs",
  "Contact Us",
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full pb-4 md:pb-16 bg-gradient-to-b from-[#e7d0c0] via-[#ebd1c1d3] to-[#f1dbccd3] relative rounded-t-3xl  pt-12 text-left flex justify-stretch flex-wrap lg:flex-nowrap gap-4">
      <div className="lg:w-1/4 px-6">
        <h1 className="text-xl font-bold">About Us</h1>
        <p>
          CalRaid is a global healthcare clinic serving in the interest of
          nutrition and health management. It is not a diagnostic centre or a
          brand promoter outlet.
          <br />
          <span>
          <Link
              className={`text-md underline hover:text-[#75917B]`}
              to={'/about-us'}
              onClick={() => scrollToTop()}
            >
              Read More..
            </Link>
          </span>
        </p>
      </div>
      <div className="lg:w-1/4 px-6">
        <h1 className="text-xl font-bold">Quick Links</h1>
        <ul className="flex flex-wrap gap-2 lg:flex-col">
          {menusItems.map((i) => (
            <Link
              className={`text-md underline hover:text-[#75917B]`}
              to={getPaths(i)}
              onClick={() => scrollToTop()}
              key={i}
            >
              {i}
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/4 flex flex-col gap-2 px-6  text-[#272727] overflow-hidden">
        <p className="text-xl font-bold">Contact Us</p>
        <div className="flex flex-col gap-2 ">
          <p className="flex gap-2">
            <span>
              <PhoneIcon fill="#f7941d" stroke="#e7d0c0" />
            </span>
            +91 9765 371 831
          </p>
          <p className="flex gap-2">
            <span>
              <MailIcon fill="#f7941d" stroke="#e7d0c0" />
            </span>
            calraidnutritionclinic@gmail.com
          </p>
        </div>
      </div>

      <div className="lg:w-1/4 flex flex-col gap-2 text-[#272727] mt-4 sm:mt-0 px-6">
        <p className="text-xl font-bold">Socials</p>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61559935402224"
            target="_blank"
            className="flex gap-2 p-1 border border-[#a7a7a7] rounded-lg hover:bg-[#ffffff] cursor-pointer"
          >
            <Facebook stroke="#a7a7a7" />
          </a>
          <a
            href="https://www.instagram.com/calraidnutritionclinic/"
            target="_blank"
            className="flex gap-2 p-1 border border-[#a7a7a7] rounded-lg hover:bg-[#ffffff] cursor-pointer"
          >
            <InstagramIcon stroke="#a7a7a7" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/luana-mascarenhas-3043819b/"
            target="_blank"
            className="flex gap-2 p-1 border border-[#a7a7a7] rounded-lg hover:bg-[#ffffff] cursor-pointer"
          >
            <LinkedinIcon stroke="#a7a7a7" />{" "}
          </a>
        </div>
      </div>

      <p className="md:absolute inset-x-0 bottom-4 text-center w-full mt-12">
        © 2019–2024 <span className="text-[#da8a2a]">CalRaid Nutrition</span>{" "}
        All Rights Reserved. Developed by
        <span className="text-[#da8a2a]">{" "} 
          <a href="https://gaurish.vercel.app/" target="_blank" className="drop-shadow underline">
           Gaurish
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
