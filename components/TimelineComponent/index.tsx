import type { FC } from "react";
import { useRef } from "react";

const TimelineComponent = () => {
  return (
    <>
      <div className="lg:mx-24 lg:mt-16 lg:mb-40 mx-4 mt-16 mb-40">
        <div className="border-t-4 lg:mx-10  border-buttonBG relative">
          <div className="absolute lg:-top-7 lg:-left-2 -top-7 -left-1">
            <div className="lg:w-16 lg:h-16 h-12 w-12 rounded-full  bg-buttonBG text-[#fff] text-center flex items-center justify-center">
              2018
            </div>
            <div className="lg:w-40 w-24 text-start my-2 font-semibold font-Inter leading-5 lg:text-md text-xs">
              Launched the first product
            </div>
          </div>
          <div className="absolute lg:-top-7 lg:left-80 -top-7 left-24">
            <div className="lg:w-16 lg:h-16 h-12 w-12 rounded-full  bg-buttonBG text-[#fff] text-center flex items-center justify-center">
              2019
            </div>
            <div className="lg:w-40 w-32 text-start my-2 font-semibold font-Inter leading-5 lg:text-md text-xs">
              Increased our footprint beyond Delhi-NCR
            </div>
          </div>
          <div className="absolute  lg:-top-7 lg:right-64 -top-7 right-9">
            <div className="lg:w-16 lg:h-16 h-12 w-12 rounded-full  bg-buttonBG text-[#fff] text-center flex items-center justify-center">
              2021
            </div>
            <div className="lg:w-40 w-28 text-start my-2 font-semibold font-Inter leading-5 lg:text-md text-xs">
              Served Delhi Govt. by installing USB in bus depots
            </div>
          </div>
          <div className="absolute  lg:-top-7 lg:-right-28 -top-7 -right-20">
            <div className="lg:w-16 lg:h-16 w-12 h-12 rounded-full  bg-buttonBG text-[#fff] text-center flex items-center justify-center">
              2021
            </div>
            <div className="lg:w-40 w-24 text-start my-2 font-semibold font-Inter leading-5 lg:text-md text-xs">
              Current scale
            </div>
            <div className="font-normal font-Inter leading-5 lg:text-sm text-xs">
              10k+ units/month
            </div>
            <div className="font-normal font-Inter leading-5 lg:text-sm text-xs">
              MRR - 8 lakhs
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineComponent;
