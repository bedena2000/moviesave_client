import { LoadImageProps } from "./utils/types/LoadImageProps";
import { FC } from "react";

export const LoadImage: FC<LoadImageProps> = ({
  path = "",
  altImage = "",
  classNames = "",
  onClick = () => console.log("image is clicked"),
}) => {
  return (
    <img src={path} alt={altImage} onClick={onClick} className={classNames} />
  );
};
