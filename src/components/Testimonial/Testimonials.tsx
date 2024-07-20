import Slider, { CustomArrowProps } from "react-slick";
import testmonialsData from "../../data/hallOfFameData.json";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full pt-3 bg-[#75917B] pb-4">
      <div className="text-center px-4 ">
        <h3 className="text-[46px] md:text-[66px] playball-regular flex justify-center gap-2 items-center text-white tracking-wide">
          CalRaid's Hall Of Fame
          <img src="/sparkles.svg" alt="" className="h-0 md:h-12" />
        </h3>
        <section className="slider-container h-[60vh] overflow-x-hidden mt-4">
          <Slider {...settings}>
            {testmonialsData.clients.map((i) => (
              <div key={i.id} className="px-0 md:px-4">
                <TestimonialsCard
                  feedback={i.feedback}
                  name={i.name}
                  profession={i.profession}
                  location={i.location}
                  id={i.id}
                  fullPara={false}
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </section>
  );
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const TestimonialsCard = ({
  feedback,
  name,
  profession,
  location,
  id,
  fullPara,
}: {
  feedback: string;
  name: string;
  profession: string | undefined;
  location: string;
  id: number;
  fullPara: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      onClick={() => {
        !fullPara && scrollToTop();
        !fullPara && navigate("/testimonials");
      }}
      className={`bg-white shadow-md  p-8 cursor-pointer text-[#75917B] rounded-[100px] rounded-tr-none rounded-bl-none
        ${fullPara && "sm:max-w-[22rem] mx-2"}`}
    >
      <div
        className={`text-[14px] sm:text-[16px] ${!fullPara && "line-clamp-4"}`}
      >
        {feedback}
      </div>
      <div className="mt-4 mb-2 flex justify-center gap-2">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <img src="/star.svg" alt="" className="h-6" key={i} />
        ))}
      </div>
      <div className="w-full">
        <h1 className="text-[16px] sm:text-[20px] font-bold">{name}</h1>
        <h3 className="text-[14px] sm:text-[18px] ">
          {profession && profession?.length > 0 ? profession + "," : ""}{" "}
          {location}
        </h3>
      </div>
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
  className="absolute z-40 -bottom-16  left-[4rem] md:left-[17rem] lg:left-[26rem] shadow-md h-12 w-12 flex justify-center items-center my-auto pb-1 bg-white text-main font-extrabold text-[29px] pr-1 rounded-full"
  onClick={onClick}
  >
    {"<"}
  </button>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="absolute -bottom-16 right-[4rem] md:right-[17rem] lg:right-[26rem] shadow-md h-12 w-12 flex justify-center items-center my-auto bg-white text-main font-extrabold text-[29px] pb-1 pl-1 rounded-full"
    onClick={onClick}
  >
    <p className="">{">"}</p>
  </button>
);

export default Testimonials;
