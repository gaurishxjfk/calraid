import { textContentProp } from ".";

interface TextSliderProps {
  currentText: textContentProp;
}

const TextSlider: React.FC<TextSliderProps> = ({ currentText }) => {
  //C7C9BC 
  if (currentText && currentText.title.length > 0) {
    return (
      <div
        className=" w-[100%] sm:w-[75%] md:w-[65%] sm:mx-auto -mt-8 md:mt-0 !md:mr-aut6o md:absolute left-0 
                bg-[#C7C9BC] backdrop-blur-sm top-[25%] my-auto bg-opacity-20 md:bg-opacity-50 py-2
                "
      >
        <div className=" text-[#1f1f1f] w-[100%] sm:w-[75%] md:w-[65%] md:ml-[14%] p-2 flex flex-col gap-1">
          <h1 className="text-[28px] lg:text-[32px] leading-tight font-medium">
            {currentText.title}
          </h1>
          <p className="w-[70%] line-clamp-2">{currentText.desc}</p>
          <a href="/" className="underline">
            Read More...
          </a>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default TextSlider;
