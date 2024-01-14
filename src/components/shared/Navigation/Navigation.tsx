// Types
import { NavigationProps } from "./utils/types/NavigationProps";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navigation: FC<NavigationProps> = ({
  distance = "6",
  list,
  isLink = false,
  color = "white",
}) => {
  const { pathname } = useLocation();

  if (isLink) {
    return (
      <nav style={{ gap: distance + "px" }} className={`flex items-center`}>
        {list.map((item) => (
          <Link
            className={`hover:opacity-100 opacity-80 font-medium `}
            key={item.title}
            to={item.path}
            style={{
              color: item.path === pathname ? "red" : color,
            }}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
  }
  return (
    <nav style={{ gap: distance + "px" }} className={`flex items-center `}>
      {list.map((item) => (
        <p
          className={`hover:opacity-80 font-medium cursor-pointer`}
          key={item.title}
          style={{
            color: color,
          }}
        >
          {item.title}
        </p>
      ))}
    </nav>
  );
};
