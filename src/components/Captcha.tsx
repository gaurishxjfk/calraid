import React, { useState, useEffect } from 'react';

const generateCaptcha = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Captcha: React.FC = () => {
  const [captcha, setCaptcha] = useState<string>(generateCaptcha());
  const [inputValue, setInputValue] = useState<string>('');
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === captcha) {
      setIsVerified(true);
      setError('');
    } else {
      setError('Captcha does not match. Please try again.');
      setIsVerified(false);
      setCaptcha(generateCaptcha());
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-2xl font-bold bg-gray-200 p-4 rounded mb-4">
        <span>{captcha}</span>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter the captcha"
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Verify
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {isVerified && <div className="text-green-500 mt-4">Captcha Verified!</div>}
    </div>
  );
};

export default Captcha;
