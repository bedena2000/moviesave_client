import { useQuery } from "react-query";

// Fetch
import api from "../data/index";

export const useMovieList = (keyword: string) => {
  const { data, error, isLoading } = useQuery(
    "getAnimationMovies",
    () => api.GetMovieList(keyword)
  );



  return {
    list: data,
    error,
    isLoading,
  };
};
