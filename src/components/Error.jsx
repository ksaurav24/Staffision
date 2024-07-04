import React from "react";

const Error = () => {
  return (
    <div className="w-screen flex py-24 flex-col items-center">
      <h1 className="text-9xl text-center poppins-regular">404</h1>
      <h2 className="text-3xl text-center poppins-regular">Page Not Found</h2>
      <button className="my-16  hover:shadow-xl  hover:shadow-[#ff80804e]  transition duration-300 ease-in-out">
        <a
          className="px-6  text-md py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] capitalize poppins-medium rounded-3xl"
          href="/"
        >
          Go To Homepage
        </a>
      </button>
    </div>
  );
};

export default Error;
