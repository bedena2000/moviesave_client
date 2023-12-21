import { useQuery } from "react-query";
import moviedb from "../data/index";

export const useTopRatedMovies = () => {
  const {
    data: movieList,
    error,
    isLoading,
  } = useQuery("getTopRatedMovies", moviedb.GetTopRatedMovies);

  return {
    movieList,
    error,
    isLoading,
  };
};
