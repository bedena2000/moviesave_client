// Components

import { Header } from "../../components";
import { MovieSlider } from "../../components";
import { GenresSlider } from "../../components";
import { MainSlider } from "../../components/custom/MainSlider";
import { Footer } from "../../components/shared/Footer";

// Hooks
import { useDataHook } from "./utils/hooks/useDataHook";

export const HomePage = () => {
  const data = useDataHook();

  return (
    <div>
      <Header />
      <MovieSlider />
      <GenresSlider />
      <MainSlider
        title="New Movies"
        list={data.popularMovies.movieList ? data.popularMovies.movieList : []}
      />
      <MainSlider
        title="Top Rated"
        list={
          data.topRatedMovies.movieList ? data.topRatedMovies.movieList : []
        }
      />
      <MainSlider
        title="Upcoming"
        list={
          data.upcomingMovies.movieList ? data.upcomingMovies.movieList : []
        }
      />
      <MainSlider
        title="Popular Series"
        list={
          data.popularTvSeries.movieList ? data.popularTvSeries.movieList : []
        }
      />
      <MainSlider
        title="Animation"
        list={data.animationMovies.genres ? data.animationMovies.genres : []}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
