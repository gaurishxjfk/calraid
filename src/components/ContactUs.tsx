import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

const ContactComponent: React.FC = () => {
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
                  +91 9765371831 / 9890374806
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="md:text-2xl font-semibold text-gray-700">
                Open Hours
              </h3>
              <p className="flex items-center mt-1 text-gray-600">
                Monday - Saturday, 09:00 AM to 6:00 PM. By appointment only
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl  p-8 mt-4">
          <form>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobile"
              >
                Mobile No.
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="mobile"
                type="text"
                placeholder="Your Mobile Number"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="service"
              >
                Service of interest
              </label>
              <select
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="service"
              >
                <option>Plan A</option>
                <option>Plan B</option>
                <option>Service X</option>
                <option>Service Y</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Write Your Message
              </label>
              <textarea
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="message"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="captcha"
              >
                CAPTCHA
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="captcha"
                type="text"
                placeholder="Enter CAPTCHA"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-r w-full from-[#669669] to-main  text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
