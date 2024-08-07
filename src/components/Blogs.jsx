import React from "react";
import { blogs } from "../data";
import { motion } from "framer-motion";

import bubble from "../assets/bubble.webp";
const Blogs = () => {
  return (
    <div className="">
      <motion.img
        initial={{ x: 120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute -z-10 lg:w-[30vw] w-[70vw] top-[30px] lg:-right-[12vw] -right-[26vw]"
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
        className="absolute top-[300px] rotate-180 -z-10 lg:w-[20vw] w-[70vw] -left-36"
        src={bubble}
        alt="bubble"
      />
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: "easeInOut",
        }}
        className="text-5xl mt-6  text-center merriweather-bold"
      >
        Blogs
      </motion.h1>
      <div className="w-screen lg:px-36 px-6 py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {blogs.map((blog, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeInOut",
              }}
              class="p-2 border bg-gradient-to-br from-[#fa7a92] to-[#FDBE5B] rounded-3xl"
            >
              <div class="p-10 bg-white border shadow-lg rounded-2xl">
                <div>
                  <h3 class=" text-lg font-medium leading-6 text-black">
                    {blog.title}
                  </h3>
                </div>
                <p class="mt-4 mb-2 text-base font-medium text-gray-500 text-balance line-clamp-3">
                  {blog.main.header}
                </p>
                <a
                  className="text-blue-500 poppins-regular hover:underline"
                  href={`/blogs/${blog.slug}`}
                >
                  Read more...
                </a>
                <div class="inline-flex items-center justify-between w-full mt-4">
                  <div>
                    <p class="text-sm text-black group-hover:text-blue-500">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
