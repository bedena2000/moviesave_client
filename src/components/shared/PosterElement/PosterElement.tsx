import { FC, useState, useEffect } from "react";
// Types
import { PosterElementProps } from "./utils/types/PosterElementProps";

export const PosterElement: FC<PosterElementProps> = ({
  image,
  elementInfo,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="cursor-pointer relative transition ease-in duration-100"
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-black opacity-75 w-full h-full top-0 left-0 absolute z-10 transition ease-in duration-100 ${
          isHovered ? "" : "hidden"
        }`}
      ></div>
      <p
        className={`movie-rate rounded-md bg-slate-500 px-1 py-1 text-white absolute top-2 left-2 transition ease-in duration-100 z-20 ${
          isHovered ? "" : "hidden"
        }`}
      >
        {elementInfo.rate}
      </p>
      <div
        className={`transition ease-in duration-100 absolute bottom-2 flex text-white text-sm left-2 items-center gap-3 z-20 ${
          isHovered ? "" : "hidden"
        } `}
      >
        <p>{elementInfo.year}</p>
        <p>{elementInfo.title}</p>
      </div>
      <img src={image} alt="image" className="w-full object-cover" />
    </div>
  );
};
