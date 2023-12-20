import { FC } from "react";
import { GenreElementProps } from "./utils/types/GenreElementProps";

export const GenreElement: FC<GenreElementProps> = ({
  title = "",
  GenreIcon,
  classes,
}) => {
  return (
    <div
      className={`flex items-center rounded-lg bg-slate-800 gap-2 text-white opacity-70 hover:opacity-100 transition duratio-50 ease-in cursor-pointer ${classes}`}
    >
      <div>{GenreIcon()}</div>
      <div>
        <p className="font-bold text-1xl">{title}</p>
      </div>
    </div>
  );
};
