import React, { useState } from "react";
import Menumarket from "./Menumarket";

const ContainerMarket = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-screen-2xl md:h-screen bg-banner-pattern bg-cover">
      <div className=" md:relative px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-full bg-gradient-to-br from-green-950 to-tranparent">
        <div className="mt-20 text-center">
          <h1 className="text-white text-4xl uppercase font-semibold pt-12">
            Select a product to Buy/Sell
          </h1>
        </div>

        <div className="md:w-4/5 w-full md:mx-auto lg:flex  grid grid-cols-2 gap-4 md:px-24 lg:px-0 lg:justify-around items-center h-48 pt-4 border-b-2 border-brandPrimary">
          <div className="ml-6">
            <button
              className="btn-primary flex items-center px-12"
              onClick={handleClick}
            >
              <img
                className="mr-2 h-6 w-6 rounded-full"
                src="/src/assets/corn.jpg"
                alt="fail"
              />{" "}
              Grains
            </button>
          </div>
          <div>
            <button
              className="btn-primary flex items-center px-12"
              onClick={handleClick}
            >
              <img
                className="mr-4 h-6 w-6 rounded-full"
                src="/src/assets/corn.jpg"
                alt="fail"
              />{" "}
              Grains
            </button>
          </div>
          <div className="ml-6">
            <button
              className="btn-primary flex items-center px-12"
              onClick={handleClick}
            >
              <img
                className="mr-4 h-6 w-6 rounded-full"
                src="/src/assets/corn.jpg"
                alt="fail"
              />{" "}
              Grains
            </button>
          </div>
          <div>
            <button
              className="btn-primary flex items-center px-12"
              onClick={handleClick}
            >
              <img
                className="mr-4 h-6 w-6 rounded-full"
                src="/src/assets/corn.jpg"
                alt="fail"
              />{" "}
              Grains
            </button>
          </div>
        </div>

        {isOpen ? <Menumarket /> : null}
      </div>
    </div>
  );
};

export default ContainerMarket;
