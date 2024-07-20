import { useEffect, useRef, useState } from "react";

const achievementsArr = [
  { id: 1, title: "Healthier Lives", value: 1512 },
  { id: 2, title: "Assisted Sports Medals", value: 553 },
  { id: 3, title: "Media and Nutrition Events", value: 480 },
  { id: 4, title: "Empty calories raided", value: 103086 },
];

const OurAchivements = () => {
  const achivementRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentDiv = achivementRef.current;
    if (currentDiv) {
      observer.observe(currentDiv);
    }

    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  }, []);

  return (
    <section className="bg-cover bg-center bg-backfeoung-image  w-full  p-4 py-8 md:py-12">
      <div className="text-center md:px-24 lg:px-40 md:mb-4 ">
        <h3 className="text-[46px] md:text-[66px] playball-regular tracking-wide text-[#ffffff]">
          Our <span>Achievements</span>
        </h3>
        <p className=" mt-2 text-white text-[16px] encode-sans-semi-condensed-regular md:w-[70%] lg:w-[50%] mx-auto">
          Celebrate CalRaid{"'"}S success milestones
        </p>
      </div>
      <div
        ref={achivementRef}
        className="flex gap-8 md:gap-16 justify-center flex-wrap px-4 py-4"
      >
        {achievementsArr.map((i) => (
          <div key={i.id} className="text-center text-white py-0">
            <h1 className="text-2xl md:text-4xl font-bold my-0 playwrite-us-trad-bold">
              <IncrementalAnimation value={i.value} isInView={isInView} />+
            </h1>
            <div className="border border-b-2 border-[#75917B] my-2 w-12 mx-auto"></div>
            <p className="my-2 text-md">{i.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAchivements;

function formatNumber(num: number) {
  if (num < 99999) return num;
  const str = num.toString();
  let lastThree = str.slice(-3);
  let otherDigits = str.slice(0, -3);
  if (otherDigits !== "") {
    lastThree = "," + lastThree;
    otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }
  return otherDigits + lastThree;
}

const IncrementalAnimation = ({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) => {
  const [incValue, setIncValue] = useState<number>(value);
  useEffect(() => {
    if (incValue && isInView) {
      setTimeout(() => {
        if (value + 33 === incValue) {
          setIncValue(value + 33);
        } else {
          if (incValue < value + 33) {
            setIncValue((precC) => precC + 1);
          }
        }
      }, 20);
    } else {
      setIncValue(value);
    }
  }, [incValue, value, isInView]);

  return <>{formatNumber(incValue)}</>;
};
