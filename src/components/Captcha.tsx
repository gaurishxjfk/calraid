import React, { useState, useEffect } from "react";

const getRandomRotation = () => {
  return Math.floor(Math.random() * 91) - 45;
};

const Captcha = ({
  setIsVerified,
  setCaptchaError,
  isVerified,
  captcha,
  setChangeCaptcha,
}: {
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
  isVerified: boolean;
  setCaptchaError: React.Dispatch<React.SetStateAction<string>>;
  captcha: string[];
  setChangeCaptcha: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue == captcha.join("")) {
      console.log("::::::");
      setIsVerified(true);
      setCaptchaError("");
      setInputValue("");
    } else {
      setCaptchaError("Captcha does not match. Please try again.");
      setIsVerified(false);
      setInputValue("");
      setChangeCaptcha(true);
    }
  };
  console.log(isVerified, "jjj", inputValue, captcha.join(""));
  useEffect(() => {
    if (isVerified) {
      setCaptchaError("");
      setInputValue("");
    }
  }, [isVerified, setCaptchaError]);
  return (
    <div className="">
      <div className="text-2xl font-bold text-center bg-gray-200 p-4 rounded mb-4">
        {captcha.map((i) => (
          <span
            style={{
              userSelect: "none",
              display: "inline-block",
              transform: `rotate(${getRandomRotation()}deg)`,
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            {i}
          </span>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter the captcha"
          className="p-2 border border-gray-300 rounded mb-4"
        />
        {/* <button
          onClick={handleSubmit}
          className="px-4 py-2 ml-4 bg-main text-white rounded hover:bg-green-600"
        >
          Verify
        </button> */}
        <a
          className="px-4 py-2 ml-4 bg-main text-white rounded"
          onClick={handleSubmit}
        >
          check
        </a>
      </div>
    </div>
  );
};

export default Captcha;
