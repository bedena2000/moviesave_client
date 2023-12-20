import { useQuery } from "react-query";

// Fetch
import api from "../data/index";

export const useMoviesGenreList = () => {
  const { data, error, isLoading } = useQuery(
    "getGenresList",
    api.GetAllGenres
  );

  return {
    genres: data,
    error,
    isLoading,
  };
};
