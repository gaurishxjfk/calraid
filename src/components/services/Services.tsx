import CardEl from "/cardEl.svg";
import serviceData from "../../data/servicesData.json";

const Services = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:mx-8 lg:w-[65%] lg:mx-auto justify-between items-center mt-24">
        <div className="w-[90%] lg:w-[45%] text-center md:text-left">
          <h1 className="text-[42px] encode-sans-semi-condensed-medium text-[#75917B] tracking-wide">
            Services
          </h1>
          <p className="text-[20px] text-[#5C5C5C] tracking-wider">
            Calraid hosts several services related to health and nutrition.
            Associations aren’t limited to individuals but available to groups
            as well for a wider outreach and awareness regarding health &
            nutrition
          </p>
        </div>
        <img src="./serviceImg.png" alt="serviceImg" className="lg:w-[30%]" />
      </div>
      <div className="flex flex-wrap w-[90%] lg:w-[75%] mx-auto justify-between  mb-24">
        {serviceData.map((serviceItem) => (
          <ServicesCard
            key={serviceItem.id}
            title={serviceItem.title}
            list={serviceItem.list}
            id={serviceItem.id}
          />
        ))}
      </div>
    </>
  );
};

const ServicesCard = ({
  title,
  list,
  id,
}: {
  title: string;
  list: string[];
  id: number;
}) => {
  return (
    <>
      <div className="mt-12 px-2 mx-auto rounded-[10px] relative bg-gradient-to-b from-[#ebebeb] to-[#f8f8f8]  w-[18rem] shadowInner pb-8 hover:scale-110  transition-all ease-in-out duration-500">
        <div className="absolute -top-7 inset-x-0 mx-auto !z-40 bg-white w-16 h-16 rounded-full ">
          <img
            src={`/offer_${id}.png`}
            alt="CardEl"
            className="absolute top-2 inset-x-0 mx-auto !z-50"
          />
        </div>
        <img
          src={CardEl}
          alt="CardEl"
          className="absolute top-0 inset-x-0 mx-auto !z-30"
        />

        <div className="encode-sans-semi-condensed-bold text-[#75917B] mt-14 text-center text-2xl tracking-wide">
          {title}
        </div>
        <ul className="text-[18px] mt-4 flex flex-col gap-2 text-[#6D6D6D] encode-sans-semi-condensed-medium ">
          {list.map((item) => (
            <li className=" text-center" key={item.length}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
