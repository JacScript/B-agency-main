import React from 'react'
import MenuItem from './MenuItem';

const Menumarket = ({items}) => {
 
  return (
    <div className="w-4/5 mx-auto md:px-24 md:h-80 md:flex md:flex-row md:mt-0 mt-12 justify-between items-center flex flex-col">
      {
        <div className="grid grid-cols-3 md:flex w-full h-80 md:h-56 justify-between" >
          {items.map((item, id) => (
            <div className="w-full h-20 md:w-40 md:h-56">
              <a className="cursor-pointer flex flex-col items-center">
                <img
                  className="items-center w-20 h-20 md:w-40 rounded-full bg-cover md:h-40"
                  src={item.imgUrl}
                  alt=""
                />
                <p className="text-center mt-2 text-white font-bold uppercase text-xs md:text-lg">
                  {item.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Menumarket