import React from "react";

import { HomeIcon } from "../vectors";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="text-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full h-24 flex items-center justify-between bg-slate-950 mt-60">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <HomeIcon />
          <p className="text-2xl hover:opacity-100 opacity-80">MovieSave</p>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div>
          <a href="https://github.com/bedena2000/moviesave_client">
            <FaGithub size={26} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nika-bedenashvili-4a187220b/">
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
    </div>
  );
}
