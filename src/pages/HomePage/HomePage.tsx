// Components

import { useState } from "react";
import { Header } from "../../components";
import { MovieSlider } from "../../components";
import { GenresSlider } from "../../components";
import { MainSlider } from "../../components/custom/MainSlider";
import { Footer } from "../../components/shared/Footer";
import { SearchPage } from "../../components/custom/SearchPage";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { motion, AnimatePresence, useScroll } from "framer-motion";

// Hooks
import { useDataHook } from "./utils/hooks/useDataHook";

export const HomePage = () => {
  const data = useDataHook();
  const { state, dispatch } = useContext(AppContext);

  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="pt-3">
      <motion.div
        className="h-3 bg-slate-500 fixed top-0 left-0 origin-[0%] z-50"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      {state?.modal ? <SearchPage /> : null}
      <Header />
      <MovieSlider />
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
      {/* Search Modal */}  
    </motion.div>
  );
};

export default HomePage;
