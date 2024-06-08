import React from "react";
import { Styles } from "../utils/Style";
import ContactUs from "../assets/contactus.png";
function Contact() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Contact"
      >
        <span className={Styles.sectionHeadText}>Contact Us</span>
        <hr className="w-[35%]"></hr>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap flex-row justify-around">
          <div className="lg:w-[40%]">
            <form className="m-8 flex flex-col gap-3">
              <label className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your name:
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                ></input>
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Email:
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                ></input>
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  type={5}
                  name="text"
                  placeholder="Write your message here "
                  className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-md shadow-primary"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:w-[40%] ">
            <img src={ContactUs} alt="contact us image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
