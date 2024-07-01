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
  if (currentText && currentText.title.length > 0) {
    return (
      <div
        className="md:shadow-md w-[100%] sm:w-[75%] md:w-[65%] sm:mx-auto -mt-8 md:mt-0 !md:mr-aut6o md:absolute left-0 
                bg-[#ffffff] bg-gradient-to-r from-[#ffecde]  to-[#ffffff00] backdrop-blur-md backdrop-brightness-200	 top-[27%] my-auto bg-opacity-20 md:bg-opacity-30 py-2
                "
      >
        <div className=" text-[#1f1f1f] w-[100%] sm:w-[75%] md:w-[65%] md:ml-[14%] p-2 flex flex-col gap-1">
          <h1 className="text-[22px] tracking-wide md:text-[32px] playwrite-us-trad-bold drop-shadow-md text-main">
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
