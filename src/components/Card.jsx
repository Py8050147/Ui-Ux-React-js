import React from "react";
import { cardItems } from "../utils";

function Card() {
  return (
    <div className="container ring-1 ring-gray-800 max-w-4xl md:max-w-full px-20 ">
      <div className="ring-1 ring-gray-800 py-16">
        <div className="text-center">
          <h1 className="font-extrabold font-sans text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-slate-500 to-black">
            Card
          </h1>
          <p className="font-inter text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-slate-500 to-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            non.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 relative">
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="absolute rotate-90 blur-3xl opacity-70 top-0 right-10">
              <path
                fill="#7f60f9"
                d="M27.4,-32.2C36.3,-18.6,44.8,-9.3,47.6,2.8C50.4,14.9,47.5,29.8,38.7,45.5C29.8,61.2,14.9,77.7,1.8,75.9C-11.2,74,-22.4,53.8,-32.3,38.1C-42.3,22.4,-50.9,11.2,-54.4,-3.5C-57.9,-18.2,-56.2,-36.3,-46.3,-50C-36.3,-63.6,-18.2,-72.7,-4.4,-68.3C9.3,-63.8,18.6,-45.8,27.4,-32.2Z"
                  transform="translate(100 100)"
                  
                 
                /> 
                 <path
                  // fill="#CE5AED"
                  fill="#17bdca"
                  d="M27.4,-32.2C36.3,-18.6,44.8,-9.3,47.6,2.8C50.4,14.9,47.5,29.8,38.7,45.5C29.8,61.2,14.9,77.7,1.8,75.9C-11.2,74,-22.4,53.8,-32.3,38.1C-42.3,22.4,-50.9,11.2,-54.4,-3.5C-57.9,-18.2,-56.2,-36.3,-46.3,-50C-36.3,-63.6,-18.2,-72.7,-4.4,-68.3C9.3,-63.8,18.6,-45.8,27.4,-32.2Z"
                  transform="translate(50 30)"
                />
                
                </svg>
          {cardItems.map((card, id) => (
            <div
              key={id}
              className="ring-1 ring-offset-slate-50 ring-gray-800 shadow-md shadow-slate-800 max-w-xl h-[280px] p-10 space-y-6 bg-slate-700/30 backdrop-blur-3xl rounded cursor-pointer text-white"
            >
              {/* <div className=' absolute max-w-xl h-[250px] p-10 bg-red-600 transition-all duration-200 rounded -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 -z-50'></div> */}

              <h1 className=" font-bold text-xl text-inherit ">{card.title}</h1>
              <p>{card.paragraph}</p>

              <div>
                <div className=" relative inline-flex items-center justify-center mt-8 sm:mt-5 group">
                  <div className=" absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    {" "}
                    Learn more{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
