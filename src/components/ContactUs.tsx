import { MailIcon, PhoneIcon } from "lucide-react";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import PlansData from "../data/PlansData.json";
import emailjs from "@emailjs/browser";
import Captcha from "./Captcha";

const generateCaptcha = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

interface FormState {
  name: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  service?: string;
  message?: string;
  captcha?: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  mobile: "",
  service: "",
  message: "",
};

const services = PlansData.sections.map((i) => i.title);

const ContactComponent: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [changeCaptcha, setChangeCaptcha] = useState<boolean>(false);
  const [captchaError, setCaptchaError] = useState<string>("");
  const [captcha, setCaptcha] = useState<string[]>(generateCaptcha().split(""));

  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    changeCaptcha && setCaptcha(generateCaptcha().split(""));
    setChangeCaptcha(false)
  }, [changeCaptcha]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value,
    });
    validateForm();
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formState.name) {
      newErrors.name = "Name is required";
    }
    if (!formState.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formState.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formState.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }
    if (!formState.service) {
      newErrors.service = "Service selection is required";
    }
    if (!formState.message) {
      newErrors.message = "Message is required";
    }
    if (!isVerified) {
      newErrors.captcha = "CAPTCHA is required";
      setCaptchaError("CAPTCHA is required");
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    console.log("yess");
    e.preventDefault();
    setLoading(true);
    const newErrors = validateForm();
    console.log("yess2");
    if (Object.keys(newErrors).length === 0 && form.current) {
      emailjs
        .sendForm("service_j4zr49p", "template_1qoolna", form.current, {
          publicKey: "PDKe_zmi9K_K7gix5",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setIsVisible(true);
            setFormState(initialFormState);
            setLoading(false);
          },
          (error) => {
            console.log("FAILED...", error);
            setLoading(false);
          }
        );
    } else {
      console.log("yess222", newErrors);
      setErrors(newErrors);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-8 bg-gradient-to-r from-slate-200  to-slate-200  ">
        <div className="bg-white w-full pb-4 rounded-2xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="md:text-2xl md:w-[75%] mx-auto font-semibold  mt-6 md:mt-14 text-center text-main normal-case	 ">
              THE CALRAID FAMILY IS CUSTOMER FOCUSED AND SERVICE DRIVEN.
              <br />
              HELP US SERVE YOU!
            </h2>
            <img
              src="./contactus.png"
              alt="serviceImg"
              className="h-[25%] mx-auto"
            />

            <div>
              <div className="mb-8 text-center">
                <h3 className="md:text-2xl font-semibold text-gray-700">
                  Contact Information
                </h3>
                <div className="mt-1 space-y-2 flex flex-col justify-center items-center">
                  <p className="flex items-center text-gray-600">
                    <span className="material-icons text-main mr-2">
                      <MailIcon fill="#75917B" stroke="#ffffff" />
                    </span>
                    <a
                      href="mailto:info@calraidnutrition.com"
                      className=" hover:underline"
                    >
                      info@calraidnutrition.com
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="material-icons text-blue-500 mr-2">
                      <PhoneIcon fill="#75917B" stroke="#ffffff" />
                    </span>
                    9765371831 / 9890374806
                  </p>
                </div>
              </div>

              <div className="mb-8 text-center">
                <h3 className="md:text-2xl font-semibold text-gray-700">
                  Open Hours
                </h3>
                <p className="text-center mt-1 text-gray-600">
                  Monday - Saturday, 09:00 AM to 6:00 PM. By appointment only
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl  mt-4 w-full md:w-1/2 px-4">
            <h2 className="text-3xl oleo-script-regular md:text-left text-center mb-2 text text-main  ">
              Get In Touch
            </h2>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email ID
                </label>
                <input
                  className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="mobile"
                >
                  Mobile No.
                </label>
                <input
                  className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.mobile ? "border-red-500" : ""
                  }`}
                  id="mobile"
                  name="mobile"
                  type="text"
                  placeholder="Your Mobile Number"
                  value={formState.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs italic">{errors.mobile}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="service"
                >
                  Service of interest
                </label>
                <select
                  className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.service ? "border-red-500" : ""
                  }`}
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((i: string) => (
                    <option value={i}>{i}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs italic">
                    {errors.service}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Write Your Message
                </label>
                <textarea
                  className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                {/* <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="captcha"
              >
                CAPTCHA
              </label> */}
                {!isVerified && (
                  <Captcha
                    captcha={captcha}
                    setIsVerified={setIsVerified}
                    setCaptchaError={setCaptchaError}
                    setChangeCaptcha={setChangeCaptcha}
                    isVerified={isVerified}
                  />
                )}
                {captchaError && (
                  <p className="text-red-500 text-xs italic">{captchaError}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  disabled={loading}
                  className="bg-gradient-to-r w-full from-[#669669] to-main text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            {isVisible && (
              <div className="text-main text-center font-bold">
                Thank you for your submission!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
