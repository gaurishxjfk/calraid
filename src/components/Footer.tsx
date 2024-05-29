import {
  Facebook,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-[20rem] bg-[#ececec] rounded-t-3xl -mt-5 pt-12 text-center flex relative justify-stretch flex-col sm:flex-row">
      <div className="flex flex-col gap-2 items-center  mx-auto text-[#272727]">
        <p className="text-xl font-bold">CONTACT US</p>
        <div className="flex flex-col gap-2 ">
          <p className="flex gap-2">
            <span>
              <PhoneIcon fill="#f7941d" stroke="#ececec" />
            </span>{" "}
            +91 9765 371 831
          </p>
          <p className="flex gap-2">
            <span>
              <MailIcon fill="#f7941d" stroke="#ececec" />
            </span>
            calraidnutritionclinic@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center  mx-auto text-[#272727] mt-4 sm:mt-0">
        <p className="text-xl font-bold">Socials</p>
        <div className="flex gap-4 items-center">
          <p className="flex gap-2 p-1 border border-[#a7a7a7] rounded-lg hover:bg-[#dddddd] cursor-pointer">
            <Facebook stroke="#a7a7a7" />
          </p>
          <p className="flex gap-2 p-1 border border-[#a7a7a7] rounded-lg hover:bg-[#dddddd] cursor-pointer">
            <InstagramIcon stroke="#a7a7a7" />{" "}
          </p>
          <p className="flex gap-2 p-1 border border-[#a7a7a7] rounded-lg hover:bg-[#dddddd] cursor-pointer">
            <LinkedinIcon stroke="#a7a7a7" />{" "}
          </p>
        </div>
      </div>

      <p className="absolute inset-x-0 bottom-4">
        © Copyright 2024{" "}
        <span className="text-[#f7941d]">Calraid Nutrition</span> | Developed by
        <span className="text-[#f7941d]">
          <a href="https://gaurish.vercel.app/"> Gaurish</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
