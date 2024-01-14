import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query";
import api from "../../../data/index";
import { MovieItemType } from "../../../data/index";
import { MovieItemInterface } from "@/utils/helpers";

// Context
import { AppContext } from "../../../context/Context";
import { useContext } from "react";

// Types
import { SearchPageProps } from "./utils/types/SearchPageProps";
import { log } from "console";
import { Link } from "react-router-dom";
type Inputs = {
  searchQuery: string;
};

export function SearchPage() {
  const [searchedList, setSearchList] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(searchedList);
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const searchQuery = formData.searchQuery;
    api
      .searchMovieByName(searchQuery)
      .then((result) => {
        setSearchList(result?.data.results);
      })
      .catch((error) => console.log(error));
  };

  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black overflow-x-hidden  bg-opacity-95 z-50 p-6">
      <div>
        <IoClose
          className="text-white cursor-pointer opacity-80 hover:opacity-100"
          size={30}
          onClick={() =>
            dispatch({
              type: "changeModal",
            })
          }
        />
      </div>

      <div>
        <h2 className="text-white text-5xl mt-5 mb-5 ">Search</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Movies, Tv Series, Animations"
              type="text"
              className="w-full p-2 rounded outline-none"
              {...register("searchQuery", {
                required: true,
                maxLength: 40,
                minLength: 3,
              })}
            />
            {errors.searchQuery && <span>This field is required</span>}
            <input type="submit" />
          </form>
        </div>
        <div className="grid grid-cols-2 gap-9 overflow-auto">
          {searchedList
            ? searchedList.map((item) => {
                return (
                  <Link
                    to={`/movies/${item.id}`}
                    onClick={() =>
                      dispatch({
                        type: "changeModal",
                      })
                    }
                  >
                    <div className="flex gap-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                          alt="searchedItem"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex items-stretch flex-col justify-center">
                        <p className="text-white font-font-poppins">
                          {item.original_title}
                        </p>
                        <p className="text-white">
                          {item.release_date.split("-")[0]}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
