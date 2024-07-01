import React from "react";
import homepage from "../assets/homepage.svg";
const Home = () => {
  return (
    <div className="container w-full h-full flex justify-center items-center">
      <div className="flex w-1/2 px-20 justify-center items-center">
        <h1 className="text-5xl roboto-bold text-zinc-950">
          Empowering Your Workforce for Success
        </h1>
      </div>
      <img className="w-96 mt-24 mx-auto my-auto" src={homepage} alt="" />
    </div>
  );
};

export default Home;
