import CardEl from "/cardEl.svg";
import serviceData from "../../data/servicesData.json";
import ServiceModal from "./ServiceModal";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface cardDtlsProp {
  title: string;
  desc: string;
  descItems: string[];
  id: number;
  list: string[];
}

const Services = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeCardId, setActiveCardId] = useState<null | number>(null);
  const [activeCardDtls, setActiveCardDtls] = useState<null | cardDtlsProp>(
    null
  );
  const myElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCardDtls = serviceData.find((i) => i.id === activeCardId);
    if (currentCardDtls !== undefined) setActiveCardDtls(currentCardDtls);
  }, [activeCardId]);

  useEffect(() => {
    if (id) {
      setActiveCardId(Number(id));
    }
  }, [id]);

  const handleClick = (id: number) => {
    navigate(`/services/${id}`);
  };

  useEffect(() => {
    if (activeCardId && activeCardId !== null && myElementRef.current) {
      myElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCardId]);

  return (
    <section className="bg-[#ffe6d586] pb-12 pt-1 mt-4 shadow-md">
      <div className="flex  flex-col-reverse md:flex-row md:mx-8 lg:w-[65%] lg:mx-auto justify-around items-center mt-12">
        <div className="w-[90%] md:w-[45%] overflow-hidden text-center md:text-left">
          <h1 className="text-[46px] md:text-[66px] playball-regular tracking-wide text-[#75917B] ">
            Services
          </h1>
          <p className="text-[#5C5C5C] tracking-wider encode-sans-semi-condensed-regular">
            CalRaid hosts several services related to health and nutrition.
            Associations aren’t limited to individuals but available to groups
            as well for a wider outreach and awareness regarding health &
            nutrition
          </p>
        </div>
        <img
          src="./serviceHeroImg.jpg"
          alt="serviceImg"
          className=" rounded-md object-cover h-[50vh] w-[50vh] object-left"
        />
      </div>

      <div ref={myElementRef} className="flex relative flex-wrap w-[90%] lg:w-[75%] mx-auto justify-between">
        {activeCardId !== null && (
          <ServiceModal
            title={activeCardDtls?.title}
            desc={activeCardDtls?.desc}
            descItems={activeCardDtls?.descItems}
            id={activeCardDtls?.id}
            setActiveCard={setActiveCardId}
          />
        )}
        {serviceData.map((serviceItem) => (
          <ServicesCard
            key={serviceItem.id}
            title={serviceItem.title}
            list={serviceItem.list}
            id={serviceItem.id}
            setActiveCard={setActiveCardId}
            handleClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
};

const ServicesCard = ({
  title,
  list,
  id,
  setActiveCard,
  handleClick,
}: {
  title: string;
  list: string[];
  id: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
  handleClick: (id: number) => void;
}) => {
  return (
    <>
      <div
        className="mt-12 px-2 border-2 mx-auto rounded-[10px] servicecard relative hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:shadow-[#75917b4f]  bg-white  w-[18rem] shadowInner pb-8 hover:scale-110  transition-all ease-in-out duration-500 cursor-pointer"
        onClick={() => {
          setActiveCard(id);
          handleClick(id);
        }}
      >
        <div className="absolute -top-7 inset-x-0 mx-auto !z-40 bg-[#ffe6d586] w-16 h-16 rounded-full ">
          <img
            src={`/offer_${id}.png`}
            alt="CardEl"
            className="absolute top-2 inset-x-0 mx-auto !z-50 rotate360 transition-all ease-in-out duration-500"
          />
        </div>
        <img
          src={CardEl}
          alt="CardEl"
          className="absolute top-0 inset-x-0 mx-auto !z-30"
        />

        <div className="amaranth-regular text-[#75917B] mt-14 text-center text-2xl tracking-wide">
          {title}
        </div>
        <ul className="text-[16px] mt-4 px-2 md:px-4 flex flex-col gap-2 text-[#6D6D6D] encode-sans-semi-condensed-regular ">
          {list.map((item, j) => (
            <li className=" text-left" key={j}>
              •{"  "}{item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
