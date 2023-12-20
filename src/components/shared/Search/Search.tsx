import { FC } from "react";
// Types
import { SearchProps } from "./utils/types/SearchProps";

export const Search: FC<SearchProps> = ({
  color = "white",
  onClick = () => console.log('search clicked'),
  size = "30",
  classNames,
}) => {
  return (
    <svg
      onClick={onClick}
      width={size + "px"}
      height={size + "px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${classNames} cursor-pointer hover:opacity-100 opacity-60`}
    >
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
