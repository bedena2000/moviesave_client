import React from "react";

// Components
import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";
import { SearchPage } from "@/components/custom/SearchPage";
import { useContext } from "react";
import { AppContext } from "@/context/Context";

import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

export function ErrorPage() {
  const { state, dispatch } = useContext(AppContext);
  
  return (
    <div className="min-h-screen">
      {state?.modal ? <SearchPage /> : null}
      <Header />
      <div
        className="w-full bg-black flex items-center justify-center"
        style={{
          height: "calc(100vh - 72px)",
        }}
      >
        <div>
          <p className="text-white text-3xl mb-8">404 Page Not Found</p>
          <Link to="/">
            <div className="flex items-center justify-center gap-3 hover:transition text-white ease-in duration-300 hover:bg-slate-500 hover:rounded-lg hover:border-2 p-3">
              <IoHomeOutline size={16} />
              <p>Home Page</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
