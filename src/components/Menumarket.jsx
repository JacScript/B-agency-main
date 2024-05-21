import React from 'react'
import MenuItem from './MenuItem';
import { data } from '../constants/index';
import COLLECTIONS from '../data'

const Menumarket = (items) => {
 
  // console.log("Jackson");
  return (
    <div className="w-4/5 mx-auto px-24 md:h-96 md:flex md:flex-row md:mt-0 mt-12 justify-between items-center flex flex-col">
      {/* <div className="w-40 h-56 ">
        <a className="cursor-pointer">
          <img
            className="w-40 rounded-full bg-cover h-40"
            src="/src/assets/corn.jpg"
            alt=""
          />
          <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">
            Maize
          </p>
        </a>
      </div>

      <div className="w-40 h-56">
        <a className="cursor-pointer">
          <img
            className="w-40 rounded-full bg-cover h-40"
            src="/src/assets/corn.jpg"
            alt=""
          />
          <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">
            Maize
          </p>
        </a>
      </div>

      <div className="w-40 h-56">
        <a className="cursor-pointer">
          <img
            className="w-40 rounded-full bg-cover h-40"
            src="/src/assets/corn.jpg"
            alt=""
          />
          <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">
            Maize
          </p>
        </a>
      </div>

      <div className="w-40 h-56">
        <a className="cursor-pointer">
          <img
            className="w-40 rounded-full bg-cover h-40"
            src="/src/assets/corn.jpg"
            alt=""
          />
          <p className="text-center mt-2 md:text-white font-bold uppercase text-lg">
            Maize
          </p>
        </a>
      </div> */}
        {

         
        
        console.log(items.title)
        
        // collections.items.map((item, id) => (
        //           <MenuItem
        //             key={item.id}
        //             title={item.title}
        //             imageUrl={item.imageUrl}
        //           />
        //         ))
               }

    </div>
  );
}

export default Menumarket