import { FC, useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

// Components
import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";
import { PosterElement } from "@/components/shared/PosterElement/PosterElement";
import { ErrorPage } from "..";

// Types
import { MoviePageProps } from "./utils/types/MoviePageProps";

// Hooks
import { useMoviePage } from "./utils/hooks/useMoviePage";
import { AppContext } from "@/context/Context";
import { SearchPage } from "@/components/custom/SearchPage";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import api from "../../data/index";
import data from "../../data/index";
import { Loading } from "@/components/shared/Loading";

export const MoviePage: FC<MoviePageProps> = ({ title = "" }) => {
  const [movieList, setMovieList] = useState(null);
  console.log("hello");
  useEffect(() => {
    api
      .GetMovieList(title)
      .then((data) => {
        setMovieList(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  const { state, dispatch } = useContext(AppContext);

  if (!movieList) {
    return <Loading />;
  }

  return (
    <div>
      {state?.modal ? <SearchPage /> : null}
      <Header />
      <div className="text-white p-4 mt-4">
        <h2 className="text-4xl mb-3 font-mono font-bold">{title}</h2>
        <div className="grid grid-rows-4 grid-cols-6 gap-6">
          {movieList?.map((item) => {
            const elementInfo = {
              title: item.title,
              year: item.release_date
                ? item.release_date.split("-")[0]
                : "no date",
              rate: `${item["vote_average"]}`,
              id: item.id,
            };
            return (
              <Link key={item.id} to={`/movies/${item.id}`}>
                <div
                  key={`moviePageElement-${item.id}`}
                  className="text-color cursor-pointer"
                >
                  <PosterElement
                    elementInfo={elementInfo}
                    image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
