import { OBMImage, ODMImage, OEMImage } from "@images";
import type { FC } from "react";
import ServiceWrapper from "./ServiceWrapper";

const Services: FC = () => {
  return (
    <>
      <div className="mx-24">
        <h1
          className=" mt-8 font-Inter font-bold text-5xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-buttonBG"
          data-aos="fade-up">
          Our Services
        </h1>
        <h3
          className=" mb-8 font-Inter font-large text-xl md:text-2xl lg:text-lg md:mb-8   tracking-wide  text-start pt-2"
          data-aos="fade-up">
          Collaboration is the key for a growing business and we offer different
          services like OBM, ODM and OEM to our clients.
        </h3>
        <div className="flex flex-col justify-center lg:items-start items-center lg:flex-row bg-[#FFFFFF]  lg:space-x-6 space-y-8 lg:space-y-0 ">
          <ServiceWrapper
            img={OBMImage}
            title="OBM"
            fullForm="Own brand manufacturer"
            description="Become our exclusive dealers/distributors."
          />
          <ServiceWrapper
            img={ODMImage}
            title="ODM"
            fullForm="Original Design Manufacturer"
            description="Get your custom design production ready."
          />
          <ServiceWrapper
            img={OEMImage}
            title="OEM"
            fullForm="Original Equipment Manufacturer"
            description="Get our products under your brand name (White labelling)."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
