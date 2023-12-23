import React from "react";
import { IoClose } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";

// Types
type Inputs = {
  searchQuery: string;
};

export default function Search() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-95">
      <div>
        <IoClose className="text-white" />
      </div>

      <div>
        <h2 className="text-white text-4xl">Search</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Movies, Tv Series, Animations"
              type="text"
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
