import React from "react";
import bubble from "../assets/bubble.png";
import { motion } from "framer-motion";
import contact from "../assets/contact.svg";
const Contact = () => {
  return (
    <div>
      <motion.img
        initial={{ x: 120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute -z-10 lg:w-[30vw] w-[70vw] top-[280px] lg:-right-[12vw] -right-[26vw]"
        src={bubble}
        alt="bubble"
      />
      <motion.img
        initial={{ x: -120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: -20, rotate: 180, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute top-[80px]  -z-10 lg:w-[20vw] w-[70vw] -left-36"
        src={bubble}
        alt="bubble"
      />
      <div className="w-screen relative flex flex-col">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
            staggerChildren: 0.2,
          }}
          className="flex flex-col justify-center items-center my-12"
        >
          <h1 className="text-5xl my-2 text-center merriweather-bold">
            Contact Us
          </h1>
          <p className="text-md my-4 text-zinc-700 poppins-regular text-center lg:px-0 px-14 lg:w-[50%] mt-4">
            Join us and let our team of experts help you grow your business with
            the help of our services and HR solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="w-screen  h-fit relative flex flex-col lg:flex-row"
        >
          <div className="lg:w-2/3 w-full  py-12 ">
            <form className="contactForm  px-16 py-12 lg:w-[66%] mx-auto">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                placeholder="Your Email Address"
                type="email"
                name="email"
                id="email"
              />
              <label htmlFor="company">Organisation Name</label>
              <input
                placeholder="Your Organisation Name"
                type="text"
                name="company"
                id="company"
              />
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Your Messege"
                name="message"
                id="message"
              ></textarea>
              <button
                className="px-6  lg:ml-auto hover:shadow-xl w-full hover:shadow-[#ff80804e]  transition duration-300 ease-in-out text-lg py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] capitalize poppins-medium rounded-3xl"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <img
              src={contact}
              alt="Contact_illustration"
              className="lg:block mt-12 mx-auto hidden"
              srcset=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
