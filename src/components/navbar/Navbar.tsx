import { useEffect, useState } from "react";
import CalraidLogo from "/logo.png";

import HambergerMenu from "./HambergerMenu";
import { Link, useLocation } from "react-router-dom";

const menusItems = [
  "Home",
  "About Us",
  "Services",
  "Plans",
  "Testimonials",
  "Blogs",
  "Contact Us",
];

// eslint-disable-next-line react-refresh/only-export-components
export function getPaths(path: string) {
  return path === "Home" ? "/" : "/" + path.replace(" ", "-").toLowerCase();
}


  export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky py-3  text-center top-0 z-50 w-full ${
        isScrolled ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="absolute  px-[1em] md:px-[4em] lg:px-[8em] py-[24px]">
        <div className="">
          <HambergerMenu open={open} setOpen={setOpen} />
        </div>
        <div
          className={`bg-[#75917B] flex flex-col rounded-lg transition-all 
                        justify-between gap-4 duration-700 py-4 mt-8 px-20 -ml-2
                        bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-930d text-white text-xl ${
                          open ? "flex top-12  z-50 " : "hidden "
                        }`}
        >
          <div className="w-4 h-4 bg-[#75917B] absolute -top-2 left-4 rotate-45"></div>
          {menusItems.map((i) => (
            <Link onClick={scrollToTop} className={`text-md`} to={getPaths(i)} key={i}>
              {i}
            </Link>
          ))}
        </div>
        <div
          className={`justify-between gap-4 hidden
                  text-black  sm:text-xl flex-colbg-primary 
                    absdolute right-0  transition-all duration-700
                    bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 
                    rounded-lg ml-[2rem]${
                      open ? "flex top-8 min-w-[20em] z-50 " : "hidden "
                    }
                  `}
        >
          {menusItems.map((i) => (
            <a className={`text-md`} href={"/"} key={i}>
              {i}
            </a>
          ))}
        </div>
      </div>
      <img src={CalraidLogo} alt="logo" className="w-24 mx-auto " />
    </nav>
  );
};

export default Navbar;
