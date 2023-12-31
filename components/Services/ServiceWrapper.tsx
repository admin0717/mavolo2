import Image from "next/image";
import type { FC } from "react";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

export interface PropTypes {
  img: StaticImageData;
  title: string;
  fullForm: string;
  description: string;
}

const ServiceWrapper: FC<PropTypes> = ({
  img,
  title,
  fullForm,
  description,
}: PropTypes) => {
  return (
    <>
      <div className="flex lg:flex-col justify-center space-y-2 text-start hover:backdrop-blur-lg flex-row space-x-4">
        <Image
          src={img}
          alt={title}
          width={300}
          height={250}
          className="bg-buttonBG bg-opacity-50 rounded-xl hover:bg-buttonText hover:backdrop-blur-lg w-1/2 lg:w-1/2"
        />
        <div className="w-1/2 lg:w-full">
          <div className="font-Inter lg:text-2xl text-xl font-semibold">
            {title}
          </div>
          <div className="font-Inter lg:text-sm text-lg capitalize font-semibold">
            {fullForm}
          </div>
          <div className="font-Inter lg:text-md text-md  font-normal w-[150px] lg:w-[300px]">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWrapper;
