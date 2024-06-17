import { MailIcon, PhoneIcon } from "lucide-react";
// import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import PlansData from "../data/PlansData.json";
import FormfacadeEmbed from "@formfacade/embed-react";

// interface FormState {
//   name: string;
//   email: string;
//   mobile: string;
//   service: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   mobile?: string;
//   service?: string;
//   message?: string;
// }

// const initialFormState: FormState = {
//   name: "",
//   email: "",
//   mobile: "",
//   service: "",
//   message: "",
// };

// const services = PlansData.sections.map((i) => i.title);

const ContactComponent: React.FC = () => {
  // const [formState, setFormState] = useState<FormState>(initialFormState);
  // const [errors, setErrors] = useState<FormErrors>({});
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [isVisible]);

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  // ) => {
  //   const { id, value } = e.target;
  //   setFormState({
  //     ...formState,
  //     [id]: value,
  //   });
  //   validateForm();
  // };

  // const validateForm = (): FormErrors => {
  //   const newErrors: FormErrors = {};

  //   if (!formState.name) {
  //     newErrors.name = "Name is required";
  //   }
  //   if (!formState.email) {
  //     newErrors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
  //     newErrors.email = "Email address is invalid";
  //   }
  //   if (!formState.mobile) {
  //     newErrors.mobile = "Mobile number is required";
  //   } else if (!/^\d{10}$/.test(formState.mobile)) {
  //     newErrors.mobile = "Mobile number is invalid";
  //   }
  //   if (!formState.service) {
  //     newErrors.service = "Service selection is required";
  //   }
  //   if (!formState.message) {
  //     newErrors.message = "Message is required";
  //   }
  //   // if (!formState.captcha) {
  //   //   newErrors.captcha = "CAPTCHA is required";
  //   // }
  //   setErrors(newErrors);
  //   return newErrors;
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   const newErrors = validateForm();
  //   if (Object.keys(newErrors).length === 0) {
  //     // No errors, submit the form
  //     console.log("Form submitted", formState);
  //     setIsVisible(true);
  //   } else {
  //     // Set errors
  //     setErrors(newErrors);
  //   }
  // };
  return (
    <div className="p-8  bg-gradient-to-r from-slate-200  to-slate-200  min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white shadow-lg rounded-xl  p-8 pb-2 relative">
          <h2 className="text-3xl font-normal w-full mb-6 text-center text-white bg-gradient-to-r from-slate-200 via-[#75917B] via to-slate-200 left-0 py-2 absolute normal-case	 ">
            Get In Touch
          </h2>
          <h2 className="md:text-2xl font-semibold  mb-6 mt-20 text-center text-main normal-case	 ">
            THE CALRAID FAMILY IS CUSTOMER FOCUSED AND SERVICE DRIVEN. HELP US
            SERVE YOU!
          </h2>
          <div>
            <div className="mb-8">
              <h3 className="md:text-2xl font-semibold text-gray-700">
                Contact Information
              </h3>
              <div className="mt-1 space-y-2">
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

            <div className="mb-8 ">
              <h3 className="md:text-2xl font-semibold text-gray-700">
                Open Hours
              </h3>
              <p className="flex items-center mt-1 text-gray-600">
                Monday - Saturday, 09:00 AM to 6:00 PM. By appointment only
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-2 shadow-lg rounded-xl ">
          <FormfacadeEmbed
            formFacadeURL="https://formfacade.com/include/104934341625131484469/form/1FAIpQLScV1xg613IMpthKoHQViR-zCyy3q9YcvsOcmDD_W0iZGJV-6w/classic.js/?div=ff-compose"
            onSubmitForm={() => console.log("Form submitted")}
          />
        </div>
      </div>
    </div>
  );
};

//  <div className="bg-white shadow-lg rounded-xl p-8 mt-4">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
//                   errors.name ? "border-red-500" : ""
//                 }`}
//                 id="name"
//                 type="text"
//                 placeholder="Your Name"
//                 value={formState.name}
//                 onChange={handleChange}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs italic">{errors.name}</p>
//               )}
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email ID
//               </label>
//               <input
//                 className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
//                   errors.email ? "border-red-500" : ""
//                 }`}
//                 id="email"
//                 type="email"
//                 placeholder="Your Email"
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs italic">{errors.email}</p>
//               )}
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="mobile"
//               >
//                 Mobile No.
//               </label>
//               <input
//                 className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
//                   errors.mobile ? "border-red-500" : ""
//                 }`}
//                 id="mobile"
//                 type="text"
//                 placeholder="Your Mobile Number"
//                 value={formState.mobile}
//                 onChange={handleChange}
//               />
//               {errors.mobile && (
//                 <p className="text-red-500 text-xs italic">{errors.mobile}</p>
//               )}
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="service"
//               >
//                 Service of interest
//               </label>
//               <select
//                 className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
//                   errors.service ? "border-red-500" : ""
//                 }`}
//                 id="service"
//                 value={formState.service}
//                 onChange={handleChange}
//               >
//                 <option value="">Select a service</option>
//                 {services.map((i) => (
//                   <option value={i}>{i}</option>
//                 ))}
//               </select>
//               {errors.service && (
//                 <p className="text-red-500 text-xs italic">{errors.service}</p>
//               )}
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="message"
//               >
//                 Write Your Message
//               </label>
//               <textarea
//                 className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
//                   errors.message ? "border-red-500" : ""
//                 }`}
//                 id="message"
//                 placeholder="Your Message"
//                 rows={4}
//                 value={formState.message}
//                 onChange={handleChange}
//               ></textarea>
//               {errors.message && (
//                 <p className="text-red-500 text-xs italic">{errors.message}</p>
//               )}
//             </div>
//             {/* <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="captcha"
//               >
//                 CAPTCHA
//               </label>
//               <input
//                 className={`shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
//                   errors.captcha ? "border-red-500" : ""
//                 }`}
//                 id="captcha"
//                 type="text"
//                 placeholder="Enter CAPTCHA"
//                 value={formState.captcha}
//                 onChange={handleChange}
//               />
//               {errors.captcha && (
//                 <p className="text-red-500 text-xs italic">{errors.captcha}</p>
//               )}
//             </div> */}
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-gradient-to-r w-full from-[#669669] to-main text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//           {isVisible && (
//             <div className="text-main text-center font-bold">
//               Thank you for your submission!
//             </div>
//           )}
//         </div>

export default ContactComponent;
