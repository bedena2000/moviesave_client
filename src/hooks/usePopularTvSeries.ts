import { useQuery } from "react-query";
import moviedb from "../data/index";

export const usePopularTvSeries = () => {
  const {
    data: movieList,
    error,
    isLoading,
  } = useQuery("getPopularTvSeries", moviedb.GetPopularTvSeries);

  return {
    movieList,
    error,
    isLoading,
  };
};
