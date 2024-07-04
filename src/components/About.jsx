import React from "react";
import bubble from "../assets/bubble.webp";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import professional from "../assets/professional.svg";
import rocket from "../assets/rocket.svg";
import handshake from "../assets/handshake.svg";
import shield from "../assets/shield.svg";
import trophy from "../assets/trophy.svg";
import chart from "../assets/chart.svg";
import ManshiTiwari from "../assets/leaders/ManshiTiwari.webp";
import RajanSingh from "../assets/leaders/RajanSingh.webp";
import ManishKumarSingh from "../assets/leaders/ManishKumarSingh.webp";
function About() {
  const about = [
    {
      title: "Empowerment Through Expertise",
      icon: professional,
      description:
        "Our team of HR veterans provides strategic guidance and best-in-class solutions to optimize your talent management. We leverage our deep industry knowledge and proven track record to help you build a high-performing workforce.",
    },
    {
      title: "Innovation at Work",
      icon: rocket,
      description:
        "We leverage technology to streamline processes, automate tasks, and deliver data-driven insights for informed decision-making. Our innovative solutions help you stay ahead of the curve and adapt to the ever-changing HR landscape.",
    },
    {
      title: "Collaboration is Key",
      icon: handshake,
      description:
        "We partner closely with you to understand your unique needs and develop customized HR strategies tailored to your goals. We believe in building strong relationships with our clients to ensure their success.",
    },
    {
      title: "Peace of Mind, Guaranteed",
      icon: shield,
      description:
        "Stay compliant with ever-changing regulations and mitigate risks with our proactive approach to HR management. We keep you informed and protected so you can focus on running your business.",
    },
    {
      title: "Your Success is Our Priority",
      icon: trophy,
      description:
        "From recruitment to retention, we offer exceptional service and ongoing support to ensure your workforce thrives. We are dedicated to your success and take pride in being a trusted partner on your HR journey.",
    },
    {
      title: "Scalability for Growth",
      icon: chart,
      description:
        "We help you build a scalable HR infrastructure that can adapt to your company's evolving needs. Our solutions are designed to grow with you, ensuring you have the support you need to achieve long-term success.",
    },
  ];
  const leadership = [
    {
      name: "Rajan Singh",
      position: "Founder and CEO",
      image: RajanSingh,
      link: "https://www.linkedin.com/in/iamrajansingh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    {
      name: "Manshi Tiwari",
      position: "Co-Founder",
      image: ManshiTiwari,
      link: "https://www.linkedin.com/in/iammanshitiwari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    {
      name: "Manish Kumar Singh",
      position: "Co-Founder",
      image: ManishKumarSingh,
      link: "https://www.linkedin.com/in/manish-singh-475b35310/",
    },
  ];
  return (
    <div data-scroll>
      <motion.img
        initial={{ x: 120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute -z-10 lg:w-[30vw] w-[70vw] top-[80px] lg:-right-[12vw] -right-[26vw]"
        src={bubble}
        alt="bubble"
      />
      <motion.img
        initial={{ x: -120, scale: 0.2, opacity: 0.5 }}
        animate={{ x: -20, rotate: 90, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute top-[500px] rotate-180 -z-10 lg:w-[20vw] w-[70vw] -left-36"
        src={bubble}
        alt="bubble"
      />
      <div className="w-screen relative">
        <div className="flex flex-col justify-center items-center my-20">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: "easeInOut",
            }}
            className="text-5xl my-2 text-center merriweather-bold"
          >
            About Staffision
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-md my-4 text-zinc-700 poppins-regular text-center lg:px-0 px-14 lg:w-[50%] mt-4"
          >
            Staffision is a platform that connects businesses with the right
            talent and helps job seekers find the perfect job. We provide a wide
            range of services and HR solutions to help businesses grow and
            succeed.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="my-8 hover:shadow-xl hover:shadow-[#ff80804e]  transition duration-300 ease-in-out"
          >
            <a
              className="px-6  text-md py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] capitalize poppins-medium rounded-3xl"
              href="/contact"
            >
              Get in touch
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="w-[80vw] mb-8 relative mx-auto h-fit px-12 py-10 lg:gap-0 gap-8 flex flex-col lg:flex-row shadow-2xl rounded-xl  bg-white "
        >
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto   lg:border-r-[2px] mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={10} delay={0.8} suffix="K+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Clients
            </p>
          </div>
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto  lg:border-r-[2px] mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={500} delay={0.8} suffix="K+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Manpower Deployed
            </p>
          </div>
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto  lg:border-r-[2px] mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={5} delay={0.8} suffix="K+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Training Programs Conducted
            </p>
          </div>
          <div className="lg:w-1/4 w-full h-[80%] flex flex-col justify-center items-center my-auto   mx-0">
            <h2 className="text-4xl mb-4 merriweather-bold text-center">
              <CountUp end={10} delay={0.8} suffix="M+" duration={2} />
            </h2>
            <p className="text-sm text-zinc-700 poppins-regular text-center">
              Transactions Processed
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-screen mb-16 relative flex flex-col">
        <div className="w-[76%] mt-16 p-4 flex lg:flex-row flex-col  mx-auto">
          <h2 className="lg:w-1/2 lg:text-start text-center  merriweather-bold text-3xl">
            We Build Your Competitive Advantage: HR Solutions & Services
          </h2>
          <button className="my-8 lg:ml-auto hover:shadow-xl  hover:shadow-[#ff80804e]  transition duration-300 ease-in-out">
            <a
              className="px-6  text-md py-3 text-white  bg-gradient-to-b from-[#FA7993] to-[#FDBA5F] capitalize poppins-medium rounded-3xl"
              href="/services"
            >
              View Services
            </a>
          </button>
        </div>
        <div className="w-[72%] mt-8 relative mx-auto gap-x-14 gap-y-10 lg:grid flex flex-col lg:grid-cols-3">
          {about.map((quality, index) => {
            return (
              <div
                key={index}
                className="min-h-[280px] rounded-lg shadow-xl w-full text-center bg-white h-fit p-4 flex flex-col items-center"
              >
                <img
                  src={quality.icon}
                  alt={quality.title}
                  className="w-20 h-20"
                />
                <h3 className="text-xl h-[80px] px-8 mt-4  poppins-medium ">
                  {quality.title}
                </h3>
                <p className="text-sm min-h-[180px] px-1  poppins-regular text-gray-600 text-center">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[72vw] mx-auto ">
        <h3 className="text-4xl my-6 text-center merriweather-bold">
          Leadership
        </h3>
        <div className="flex w-full flex-col lg:flex-row mb-16 shadow-xl rounded-xl bg-white relative">
          {leadership.map((leader, index) => {
            return (
              <div
                className={`lg:w-1/3 lg:my-6 py-12 lg:py-4 text-center ${
                  index != 2 && "lg:border-r-2 lg:border-b-0 border-b-2"
                }`}
                key={index}
              >
                <div className=" p-1 bg-gradient-to-b from-[#236881] to-[#5fcaf0] mb-6 rounded-full overflow-hidden w-fit mx-auto ">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-28 rounded-full  mx-auto"
                  />
                </div>
                <h4 className="text-xl poppins-medium">{leader.name}</h4>
                <h6 className="text-sm poppins-regular">{leader.position}</h6>
                {leader.link && (
                  <a href={leader.link} className="w-fit mt-2 mx-auto flex">
                    <p className="text-xs poppins-regular">LinkedIn</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="w-4 h-4 ml-2 fill-current text-[#0077b5]"
                    >
                      <path d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z"></path>
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
