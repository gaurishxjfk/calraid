
const ImageSlider = ({currentImg}: {currentImg : number}) => {
  return (
    <div className="w-[100%] sm:w-[80%] md:w-[62%] ml-auto lg:mr-[15%]">
      <img src={`/banner_${currentImg}.jpg`} alt="sdf" />
    </div>
  );
};

export default ImageSlider;
