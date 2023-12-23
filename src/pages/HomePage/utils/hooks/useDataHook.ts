import { useTopRatedMovies } from "../../../../hooks/useTopRatedMovies";
import { usePopularMovie } from "../../../../hooks/usePopularMovies";
import { useUpcomingMovies } from "../../../../hooks/useUpcomingMovies";
import { usePopularTvSeries } from "../../../../hooks/usePopularTvSeries";
import { useAnimationMovies } from "../../../../hooks/useAnimationMovies";

export const useDataHook = () => {
  const popularMovies = usePopularMovie();
  const topRatedMovies = useTopRatedMovies();
  const upcomingMovies = useUpcomingMovies();
  const popularTvSeries = usePopularTvSeries();
  const animationMovies = useAnimationMovies();

  return {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvSeries,
    animationMovies,
  };
};
