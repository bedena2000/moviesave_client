import { FC } from "react";
// Types
import { PosterElementProps } from "./utils/types/PosterElementProps";

export const PosterElement: FC<PosterElementProps> = ({
  image
}) => {
  return <div className="cursor-pointer">
    <img src={image} alt="image" />
  </div>;
};
