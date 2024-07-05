import { motion } from "framer-motion";
import React from "react";

const Thankyou = () => {
  return (
    <div data-scroll className="w-screen flex py-24 flex-col items-center">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="lg:text-5xl text-4xl mb-4 text-center poppins-regular"
      >
        Thank you for reaching out to us
      </motion.h1>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05, ease: "easeInOut" }}
        className="text-xl text-center poppins-regular"
      >
        We will contact you soon!
      </motion.h2>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        className="my-16  hover:shadow-xl  hover:shadow-[#7676764e]  transition duration-300 ease-in-out"
      >
        <a
          className="px-5  text-md py-2 border-[2px] text-zinc-950 bg-white capitalize poppins-regular rounded-3xl"
          href="/"
        >
          Go back to Homepage
        </a>
      </motion.button>
    </div>
  );
};

export default Thankyou;
