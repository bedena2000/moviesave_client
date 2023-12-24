import { FC } from "react";

// Context
import { AppContext } from "../../../context/Context";
import { useContext } from "react";

// Components
import { HomeIcon } from "../vectors";
import { Navigation } from "../Navigation";
import { Search } from "../Search";
import { Profile } from "../Profile";

// Types
import { HeaderProps } from "./utils/types/HeaderProps";
import { log } from "console";

export const Header = () => {
  const list = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Movies",
      path: "/movies",
    },
    {
      title: "TV SHOWS",
      path: "/tvseries",
    },
    {
      title: "browse",
      path: "/browse",
    },
  ];

  const {state, dispatch} = useContext(AppContext);

  return (
    <header className="flex items-center justify-between bg-black p-4">
      <div className="flex items-center gap-4">
        <div>
          <HomeIcon />
        </div>

        <div>
          <Navigation list={list} isLink={true} distance="18" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <Search />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </header>
  );
};
