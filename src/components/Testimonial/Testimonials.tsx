import Slider from "react-slick";
import testmonialsData from "../../data/hallOfFameData.json";

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
    <section className="w-full py-[3rem] pb-[8rem] bg-[#75917B]">
      <div className="text-center px-4 ">
        <h3 className="text-[28px] md:text-[42px] encode-sans-semi-condensed-semibold flex justify-center gap-2 items-center text-white tracking-wide">
          Calraid's Hall Of Fame{" "}
          <span>
            <img src="/sparkles.svg" alt="" className="h-12" />
          </span>
        </h3>
        <section className="slider-container overflow-hidden mt-12">
          <Slider {...settings}>
            {testmonialsData.clients.map((i) => (
              <div key={i.id} className="px-4">
                <TestimonialsCard
                  feedback={i.feedback}
                  name={i.name}
                  profession={i.profession}
                  location={i.location}
                  id={i.id}
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </section>
  );
};

const TestimonialsCard = ({
  feedback,
  name,
  profession,
  location,
  id,
}: {
  feedback: string;
  name: string;
  profession: string | undefined;
  location: string;
  id: number;
}) => {
  return (
    <div
      key={id}
      className="bg-white shadow-md  p-8  text-[#75917B] rounded-[100px] rounded-tr-none rounded-bl-none"
    >
      <div className="text-[16px] line-clamp-4">{feedback}</div>
      <div className="mt-4 mb-2 flex justify-center gap-2">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <img src="/star.svg" alt="" className="h-6" key={i} />
        ))}
      </div>
      <div>
        <h1 className="text-[20px] font-bold">{name}</h1>
        <h3 className="text-[18px] ">
          {profession}, {location}
        </h3>
      </div>
    </div>
  );
};

export default Testimonials;
