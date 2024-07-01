import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [navigationOpen, setnavigationOpen] = useState(false);
  const closeNavbar = () => {
    setnavigationOpen(false);
  };
  const location = window.location.href.split("/")[3] || "home";
  console.log(location);
  return (
    <header className="header px-[14vw] z-0 flex w-screen h-[12vh] ">
      <div className="container mx-auto flex items-center justify-between h-full">
        <h1 className="text-zinc-950 roboto-bold text-lg">Logo</h1>
        <div className="lg:hidden">
          <Hamburger
            toggled={navigationOpen}
            toggle={setnavigationOpen}
            className="z-50"
          />
        </div>
        <nav className="lg:block hidden">
          <ul className="flex space-x-12">
            {["Home", "About", "services", "Contact"].map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className={`capitalize roboto-regular py-2 px-2 transition-colors ease-out duration-200 hover:text-[#f4877b] text-zinc-700 ${
                      location === item.toLowerCase()
                        ? "text-zinc-900 border-b-2 rounded-b-md  border-[#ffae75] "
                        : ""
                    } `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          href="#"
          className="roboto-regular hidden lg:block px-8 py-2 shadowBtn hover:shadow-none transition-shadow duration-300 bg-white ease-in-out rounded-3xl"
        >
          Sign Up Now
        </button>
      </div>
      <AnimatePresence>
        {navigationOpen && (
          <motion.div
            initial={{ x: -1200 }}
            animate={{ x: 0 }}
            exit={{ x: -1200 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden w-screen h-[88vh] top-[12vh]  bg-opacity-90 fixed  left-0 z-[100] flex flex-col items-center justify-center gap-24"
            onClick={closeNavbar}
          >
            <nav>
              <ul className="flex flex-col gap-12">
                {["Home", "About", "services", "Contact"].map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                        className={`capitalize text-xl roboto-regular py-2 px-2 transition-colors ease-out duration-200 hover:text-[#f4877b] text-zinc-950 ${
                          location === item.toLowerCase()
                            ? " border-b-2 rounded-b-md  border-[#ffae75] "
                            : ""
                        } `}
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button
              href="#"
              className="roboto-regular px-8 py-2 z-0 shadowBtn hover:shadow-none transition-shadow duration-300 bg-white text-zinc-950 ease-in-out rounded-3xl"
            >
              Sign Up Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
