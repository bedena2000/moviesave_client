import { useQuery } from "react-query";
import moviedb from "../data/index";

export const usePopularMovie = () => {
  const {
    data: movieList,
    error,
    isLoading,
  } = useQuery("getPopularMovie", moviedb.GetPopularMovies);

  return {
    movieList,
    error,
    isLoading,
  };
};
