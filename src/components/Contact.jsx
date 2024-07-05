import React from "react";
import bubble from "../assets/bubble.webp";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import contact from "../assets/contact.svg";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CircularProgress } from "@mui/material";
const Contact = () => {
  const { register, reset, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const Navigate = useNavigate();
  const accessKey = "65e64565-ead4-4b12-bf2c-5e688117949b";
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Contact Form",
      subject: "Contact Message from Website",
    },
    onSuccess: (msg, data) => {
      setIsLoading(false);
      reset();
      setResult(msg);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        window.location.href = "/thankyou";
        console.log("Redirecting to Thankyou Page");
      }, 1000);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  return (
    <div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full flex justify-center items-center absolute z-50 h-full bg-zinc-400 bg-opacity-70 "
          >
            <CircularProgress />
          </motion.div>
        )}
        {isSuccess && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
            className="w-full flex justify-center items-center absolute z-50 h-full bg-zinc-700 bg-opacity-70 "
          >
            <h1 className="text-2xl flex justify-center items-center poppins-regular text-white">
              {result}
              <svg
                className="w-6 h-6 "
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1"
                  x1="9.858"
                  x2="38.142"
                  y1="9.858"
                  y2="38.142"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#9dffce"></stop>
                  <stop offset="1" stopColor="#50d18d"></stop>
                </linearGradient>
                <path
                  fill="url(#IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1)"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                ></path>
                <linearGradient
                  id="IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2"
                  x1="13"
                  x2="36"
                  y1="24.793"
                  y2="24.793"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".824" stopColor="#135d36"></stop>
                  <stop offset=".931" stopColor="#125933"></stop>
                  <stop offset="1" stopColor="#11522f"></stop>
                </linearGradient>
                <path
                  fill="url(#IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2)"
                  d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"
                ></path>
              </svg>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contactForm  px-16 py-12 lg:w-[66%] mx-auto"
            >
              <label htmlFor="name">Name</label>
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                placeholder="Your Email Address"
                type="email"
                name="email"
                id="email"
              />
              <label htmlFor="company">Organisation Name</label>
              <input
                {...register("company", { required: true })}
                placeholder="Your Organisation Name"
                type="text"
                name="company"
                id="company"
              />
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Messege"
                name="message"
                id="message"
              ></textarea>
              <button
                className="px-6  lg:ml-auto hover:shadow-xl w-full hover:shadow-[#ff80804e]  transition duration-300 ease-in-out text-lg py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] capitalize poppins-medium rounded-3xl"
                type="submit"
                onClick={() => setIsLoading(true)}
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
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
