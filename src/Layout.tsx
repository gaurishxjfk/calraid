import { ArrowBigUp } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 720) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {isScrolled && (
        <div
          className="text-3xl font-black text-center bg-main p-2 fixed abs right-0 top-3/4 cursor-pointer"
          onClick={scrollToTop}
        >
          <span>
            <ArrowBigUp fill="#ffffff" stroke="#ffffff" />
          </span>
        </div>
      )}
    </>
  );
};

export default Layout;
