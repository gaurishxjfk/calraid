import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import TextSlider from "./TextSlider";
import sliderData from "../../data/SliderData.json";

export interface textContentProp {
  title: string;
  desc: string;
  id: number;
  link: string
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [currentText, setCurrentText] = useState<textContentProp>({
    title: "",
    desc: "",
    id: 0,
    link: "/"
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 9000); // Change slide every 3 seconds

    setCurrentImg(sliderData[currentSlide].id);
    setCurrentText(sliderData[currentSlide]);
    return () => clearTimeout(timer);
  }, [currentSlide, currentText]);
  return (
    <div className="relative mt-12">
      <ImageSlider currentImg={currentImg} />
      <TextSlider currentText={currentText} />
    </div>
  );
};

export default Hero;
