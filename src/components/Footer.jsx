import React from "react";
import Logo from "../assets/Logo.webp";
const Footer = () => {
  return (
    <div
      data-scroll
      className="w-screen data-scroll-section relative h-fit py-4 bg-zinc-200 flex flex-col"
    >
      <div className="w-[86%] mx-auto h-[80%] py-8 my-auto px-10 flex lg:flex-row flex-col justify-center items-center ">
        <div className="flex flex-col py-4 h-full w-full lg:w-1/4">
          <h2 className="text-3xl poppins-bold mb-4">
            <img className="w-36" src={Logo} alt="Logo" />
          </h2>
          <p className="text-sm mr-2 poppins-regular">
            Grow your business with the help of our services and HR solutions.
          </p>
        </div>
        <div className="flex flex-col py-4 h-full w-full lg:w-1/4">
          <h3 className="text-xl mb-2 poppins-medium">Socials</h3>
          <p className="text-sm poppins-regular text-gray-600">
            info@staffision.com
          </p>
          <div>
            <ul className="socialIcons flex gap-4 mt-4 lg:mt-6">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61559436797469&mibextid=JRoKGi">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.1056 10.4495C19.1056 5.09642 15 0.759277 9.9327 0.759277C4.86539 0.759277 0.759766 5.09642 0.759766 10.4495C0.759766 15.2946 4.08865 19.3191 8.49018 20.0224V13.2627H6.15996V10.4495H8.49018V8.33951C8.49018 5.91696 9.85872 4.54939 11.93 4.54939C12.9657 4.54939 14.0013 4.74476 14.0013 4.74476V7.12823H12.8547C11.7081 7.12823 11.3382 7.87063 11.3382 8.65209V10.4495H13.8904L13.4835 13.2627H11.3382V20.0224C15.7398 19.3191 19.1056 15.2946 19.1056 10.4495Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/staffision?igsh=MWNmM3M1ZjdjcnpoZw==">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/staffision.com/">
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.56609 15.2704V5.45315H0.948103V15.2704H4.56609ZM2.73764 4.1398C3.90474 4.1398 4.83841 3.31895 4.83841 2.33394C4.83841 1.38176 3.90474 0.59375 2.73764 0.59375C1.60945 0.59375 0.675781 1.38176 0.675781 2.33394C0.675781 3.31895 1.60945 4.1398 2.73764 4.1398ZM18.0654 15.2704H18.1044V9.8857C18.1044 7.259 17.4041 5.22331 13.7472 5.22331C11.9966 5.22331 10.8295 6.04415 10.3237 6.79933H10.2848V5.45315H6.82246V15.2704H10.4404V10.411C10.4404 9.13053 10.7128 7.91568 12.5801 7.91568C14.4475 7.91568 14.4864 9.36036 14.4864 10.5095V15.2704H18.0654Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col py-4 h-full w-full lg:w-1/5">
          <h2 className="lg:text-md text-lg poppins-medium mb-2">
            Quick Links
          </h2>
          <ul className=" w-full">
            {["Home", "About", "Services", "Contact"].map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={`/${link}`}
                    className="lg:text-xs text-md  poppins-regular text-gray-600"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col py-4 h-full w-full lg:w-1/4">
          <h2 className="text-lg poppins-medium mb-4">Location and Contact</h2>
          <p className="text-sm poppins-regular">
            C - 124, SECTOR - 2, Noida, Gautam Buddha Nagar
            201301, Uttar Pradesh <br />
            +91 8287370567
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm mb-4 poppins-regular text-center text-gray-600 ">
          Staffision © Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
