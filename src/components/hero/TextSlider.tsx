import { Link } from "react-router-dom";
import { textContentProp } from ".";

interface TextSliderProps {
  currentText: textContentProp;
}

function capitalizeFirstLetterOfEachWord(str: string) {
  return str.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
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
          <h1 className="text-[28px] lg:text-[32px] playwrite-us-trad-bold oleo-script-regular  text-main">
            {capitalizeFirstLetterOfEachWord(currentText.title)}
          </h1>
          <p className="w-[70%] line-clamp-2 playwrite-us-trad- italic">
            {currentText.desc}
          </p>
          <Link to="/plans" className="underline">
            Read More...
          </Link>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default TextSlider;
