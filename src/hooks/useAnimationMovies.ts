import { useQuery } from "react-query";

// Fetch
import api from "../data/index";

export const useAnimationMovies = () => {
  const { data, error, isLoading } = useQuery(
    "getAnimationMovies",
    api.GetAnimationMovies
  );

  return {
    genres: data,
    error,
    isLoading,
  };
};
