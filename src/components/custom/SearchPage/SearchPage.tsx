import React from "react";
import { IoClose } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";

// Context
import { AppContext } from "../../../context/Context";
import { useContext } from "react";

// Types
import { SearchPageProps } from "./utils/types/SearchPageProps";
type Inputs = {
  searchQuery: string;
};

export function SearchPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("hello");

  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-95 z-50 p-6">
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
      </div>
    </div>
  );
}
