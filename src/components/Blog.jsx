import React from "react";
import { blogs } from "../data";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { motion } from "framer-motion";
const Blog = () => {
  const params = useParams();
  const blog = blogs.find((blog) => blog.slug === params.blog);
  if (!blog) {
    return <Error />;
  }

  return (
    <div className="data-scroll">
      <div className="w-[78vw] mx-auto my-20">
        <div className="w-fit mx-auto rounded-3xl -mt-8 mb-8 px-3 py-1 bg-opacity-50 bg-zinc-300">
          <p className="capitalize poppins-medium text-sm text-zinc-700">
            <a href="/blogs" className="hover:underline">
              Blogs
            </a>
            /{blog.title}
          </p>
        </div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}
          className="lg:text-5xl text-3xl text-start lg:px-24 poppins-medium text-zinc-900"
        >
          {blog.title}
        </motion.h1>
        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-sm text-start lg:px-24 mt-4 poppins-regular text-zinc-800"
        >
          Date: {blog.date}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeInOut",
          }}
          className="text-lg poppins-regular text-justify text-zinc-600 my-8 lg:px-24"
        >
          {blog.main.header}
          <ul className=" my-4">
            {blog.main.points.map((point, index) => {
              return (
                <li key={index} className="mb-6">
                  <div className="mb-3">
                    <h5 className="poppins-bold mb-[2px] text-zinc-700 ">{`${
                      index + 1
                    })  ${point.subtitle}:`}</h5>

                    <p className="tab pl-6">{`${point.content}`}</p>
                  </div>
                  <div>
                    <h6 className="pl-2 poppins-semibold text-zinc-600 mb-[2px]">{`${point.subPoint}:`}</h6>
                    <p className="pl-6">{point.subContent}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          {blog.main.conclusion}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
