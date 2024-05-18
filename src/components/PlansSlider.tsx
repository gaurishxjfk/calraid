// import Slider from "react-slick";

const PlansSlider = () => {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "180px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 500,
//   };
  return (
    <section className="w-full overflow-hidden">
      <div className="slider-container mt-24">
        {/* <Slider {...settings}>
          <PlanCard id={1}/>
          <PlanCard id={1}/>
          <PlanCard id={1}/>
          <PlanCard id={10}/>

          <PlanCard id={1}/>
          <PlanCard id={1}/>
          <PlanCard id={1}/>
        </Slider> */}
      </div>
    </section>
  );
};

// const PlanCard = ({id}) => {
//   return (
//     <div className={`p-2 bg-white w-[17rem] mx-auto -mt-24 drop-shadow-xl mb-20 ${id === 10 && 'scale-125'}`}>
//       <div className="relative text-center flex justify-center">
//         <img src="/plan_4.jpg" alt="plan 4" />
//         <div className="absolute rounded-full bg-white p-1 -bottom-[15%] scale-90 drop-shadow-md">
//           <img src="/holistic_nutrition_icon.png" alt="" className="" />
//         </div>
//       </div>
//       <div className="text-center mt-12">
//         <h5 className="encode-sans-semi-condensed-bold text-[#75917B] text-[24px] my-1">
//           Holistic Nutrition
//         </h5>
//         <p className="encode-sans-semi-condensed-regular text-[16px] my-1">
//           Athletes have increased energy requirements due to their level of
//           activity through.
//         </p>
//         <button className="my-1 bg-[#75917B] px-3 py-1 text-white">
//           Read More...
//         </button>
//       </div>
//     </div>
//   );
// };

export default PlansSlider;
