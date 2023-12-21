// Components

import { Header } from "../../components";
import { MovieSlider } from "../../components";
import { GenresSlider } from "../../components";
import { MainSlider } from "../../components/custom/MainSlider";

// Hooks
import { useTopRatedMovies } from "../../hooks/useTopRatedMovies";
import { usePopularMovie } from "../../hooks/usePopularMovies";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import { usePopularTvSeries } from "../../hooks/usePopularTvSeries";
import { useAnimationMovies } from "../../hooks/useAnimationMovies";

export const HomePage = () => {
  const popularMovies = usePopularMovie();
  const topRatedMovies = useTopRatedMovies();
  const upcomingMovies = useUpcomingMovies();
  const popularTvSeries = usePopularTvSeries();
  const animationMovies = useAnimationMovies();
  console.log(animationMovies);
  return (
    <div>
      <Header />
      <MovieSlider />
      <GenresSlider />
      <MainSlider
        title="New Movies"
        list={popularMovies.movieList ? popularMovies.movieList : []}
      />
      <MainSlider
        title="Top Rated"
        list={topRatedMovies.movieList ? topRatedMovies.movieList : []}
      />
      <MainSlider
        title="Upcoming"
        list={upcomingMovies.movieList ? upcomingMovies.movieList : []}
      />
      <MainSlider
        title="Popular Series"
        list={popularTvSeries.movieList ? popularTvSeries.movieList : []}
      />
      <MainSlider
        title="Animation"
        list={animationMovies.genres ? animationMovies.genres : []}
      />
    </div>
  );
};

export default HomePage;
