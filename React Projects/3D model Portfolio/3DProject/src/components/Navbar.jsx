import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5
    fixes top-0 z-20 `}
    >
      <div
        className="w-full flex justify-between
      items-center max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white flex text-[18px] font-bold cursor-pointer">
            Abhishek &nbsp; <span className="">| Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex felx-1 justify-end item-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]`}
          >
            <ul className="list-none justify-end items-start flex-col gap-4 felx">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-slate-500"
                  } hover:text-white text-[18px] cursor-pointer font-medium`}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SectionWrapper(Navbar, " ")
