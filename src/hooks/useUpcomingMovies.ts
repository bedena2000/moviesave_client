import { useQuery } from "react-query";
import moviedb from "../data/index";

export const useUpcomingMovies = () => {
  const {
    data: movieList,
    error,
    isLoading,
  } = useQuery("getUpcomingMovies", moviedb.GetUpcomingMovies);

  return {
    movieList,
    error,
    isLoading,
  };
};
