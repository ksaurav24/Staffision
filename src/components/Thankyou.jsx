import React from "react";

const Thankyou = () => {
  return (
    <div className="w-screen flex py-24 flex-col items-center">
      <h1 className="lg:text-5xl text-4xl mb-4 text-center poppins-regular">
        Thank you for contacting us
      </h1>
      <h2 className="text-xl text-center poppins-regular">
        We will contact you soon!
      </h2>
      <button className="my-16  hover:shadow-xl  hover:shadow-[#7676764e]  transition duration-300 ease-in-out">
        <a
          className="px-5  text-md py-2 border-[2px] text-zinc-950 bg-white capitalize poppins-regular rounded-3xl"
          href="/"
        >
          Go back to Homepage
        </a>
      </button>
    </div>
  );
};

export default Thankyou;
