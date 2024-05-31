

// import Banner_3 from "../../../public/banner_3.jpg";
// import Banner_4 from "../../../public/banner_4.jpg";

// const imgArr = [Banner_1, Banner_2, Banner_3, Banner_4];

const ImageSlider = ({currentImg}: {currentImg : number}) => {
  return (
    <div className="w-[100%] sm:w-[80%] md:w-[62%] ml-auto lg:mr-[15%]">
      <img src={`/banner_${currentImg}.jpg`} alt="sdf" />
    </div>
  );
};

export default ImageSlider;
