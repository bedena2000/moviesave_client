import { useQuery } from "react-query";
import moviedb from "../data/index";
import React from "react";

export const useMovieListHook = () => {
  const {
    data: movieList,
    error,
    isLoading,
  } = useQuery("getMovieList", moviedb.GetAllMovies);

  return {
    movieList,
    error,
    isLoading,
  };
};
