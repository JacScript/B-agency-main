import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-scroll";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setfirst] = useState(false);

 
  const dropdownitems = [
    { link: "Our Solution", path: "solution" },
    { link: "How It Works", path: "works" },
    { link: "Get started", path: "start" },
    { link: "Services", path: "services" },
    { link: "Features", path: "features" },
  ];

  return (
    <div className="relative md:flex flex-col items-center justify-center w-[200px] h-[24px] py-2 rounded-lg">
      <button
        className="p-2  w-full  flex items-center justify-between text-base rounded-lg tracking-wider border-4 border-transparent active:border-t-brandPrimary duration-300 active:text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-brandPrimary absolute top-14 flex flex-col items-start rounded-lg p-2 w-full">
          {dropdownitems.map((item, path) => (
            <ul className="italic p-2 ">
              <Link to={item.path} spy={true} smooth={true} offset={-100} className=" hover:text-white text-bold cursor-pointer">{item.link}</Link>
             </ul>

          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
