import React, { useContext, useState, useEffect, SetStateAction } from "react";
import { useQuery } from "react-query";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Component
import { Header } from "@/components";
import { Loading } from "@/components/shared/Loading";
import { PosterElement } from "@/components/shared/PosterElement/PosterElement";

import { Navigation } from "swiper/modules";
// Context
import { AppContext } from "@/context/Context";
import { SearchPage } from "@/components/custom/SearchPage";
import { useParams } from "react-router-dom";

// Styling
import "./utils/styling/style.css";

// Functions
import api from "../../data/index";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ImageInterface {
  aspect_ratio: number;
  file_path: string;
  height: number;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface CastInterface {
  adult: number;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface MovieDataInterface {
  poster_path: string;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: number;
  imdb_db: string;
  original_title: string;
  original_language: string;
  release_date: string;
  status: string;
  video: boolean;
  vote_average: string;
  overview: string;
  runtime: string;
  images: ImageInterface[];
  cast: CastInterface[];
  videoPath: string;
}

interface SimilarMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SimilarMovieInterface {
  page: string;
  results: SimilarMovieItem[];
}

export const DetailedMoviePage = () => {
  const result = useContext(AppContext);
  const params = useParams();
  const movieId = Number(params.movieId);

  const [movieData, setMovieData] =
    useState<SetStateAction<MovieDataInterface | null>>(null);
  const [similarMovieData, setSimilarMovieData] =
    useState<SetStateAction<SimilarMovieInterface | null>>(null);

  const [isTrailer, setIsTrailer] = useState(false);

  const [scrollEnd, setScrollEnd] = useState(false);
  const [scrollBeggining, setScrollBeggining] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(movieId);
        if (!movieId) {
          navigate("/errorPage");
          return;
        }
        const data = await api.searchMovieById(movieId);
        if (data) {
          console.log(data);
          setMovieData(data);
        } else {
          navigate("/errorPage");
          return;
        }
        console.log(data);
      } catch (error) {
        console.log("hello");
        navigate("/errorPage");
        return;
        console.log(error);
      }
    };

    const fetchSimilarMovie = async () => {
      try {
        const data = await api.getSimilarMovies(movieId);
        if (data) {
          setSimilarMovieData(data.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchSimilarMovie();
  }, [movieId]);

  if (!movieData) {
    return <Loading />;
  }

  return (
    <div>
      {isTrailer ? (
        <div className="w-full h-full bg-zinc-900/90 z-50 p-4 fixed overflow-hidden">
          <div className="flex justify-end ">
            <IoIosCloseCircleOutline
              className="text-white hover:scale-110 transition-all cursor-pointer"
              size={40}
              onClick={() => setIsTrailer(false)}
            />
          </div>
          <div className="flex items-center justify-center mt-7 border ">
            <iframe
              src={`https://www.youtube.com/embed/${movieData?.videoPath}`}
              style={{
                height: "600px",
              }}
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      ) : null}
      <Header />
      {result?.state?.modal ? <SearchPage /> : null}

      <div
        className="py-32 detailedBackground min-h-[calc(screen-72px)]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData?.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ml-4 relative z-10 detailedInfo">
          <h2
            className={`text-white font-font-bunge text-5xl drop-shadow-md w-[600px]  `}
          >
            {movieData?.original_title}
          </h2>
          <div className="flex items-center gap-6 text-white font-font-poppins mt-4">
            <p className="bg-slate-700 p-2 rounded-full text-sm">
              {(movieData?.vote_average).toFixed(2)}
            </p>
            <p className="text-gray p-2">
              {movieData?.release_date.split("-")[0]}
            </p>
            {/* <div className="text-gray flex items-center gap-2 ">
            {movieData?.genres.map((item) => {
              return <p>{item.name}</p>;
            })}
          </div> */}
            <p className="bg-purple-950 text-white text-sm rounded-full p-2">
              {movieData?.status}
            </p>
            <p>{movieData?.original_language}</p>
          </div>
          <div className="w-96 mt-4">
            <p className="text-white opacity-80">{movieData?.overview}</p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button
              className="bg-white p-2 rounded hover:opacity-100 opacity-80 flex items-center gap-2 font-font-bebas text-md outline-none"
              onClick={() => {
                console.log("clicked");
                setIsTrailer(true);
              }}
            >
              <p>Watch Trailer</p>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 movieDetailsWrapper">
        <h2 className="text-white text-5xl font-font-roboto">Cast</h2>
        <div className="mt-9">
          <Swiper spaceBetween={30} slidesPerView={6} slidesPerGroup={6}>
            {movieData?.cast.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Link
                    key={item.id}
                    to={`/actor/${item.id}`}
                    className="h-[170px]"
                  >
                    <div className="h-full">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                        alt="actor image"
                        className="rounded-full"
                      />

                      <p className="text-white font-font-bunge text-center mt-6 text-base ">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="mt-14">
          <h2 className="text-white text-5xl font-font-roboto mb-8">
            Similar Movies
          </h2>
          <div>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              modules={[Navigation]}
              centeredSlides={false}
              navigation={{
                nextEl: "#swiper-forward-icon",
                prevEl: "#swiper-back-icon",
              }}
              onReachEnd={(swiper) => {
                if (swiper.isBeginning) {
                  setScrollEnd(false);
                  setScrollBeggining(true);
                } else {
                  setScrollEnd(true);
                }
              }}
              onReachBeginning={() => {
                setScrollBeggining(true);
              }}
              onRealIndexChange={(swiper) => {
                setScrollEnd(false);
                if (swiper.activeIndex !== 0) {
                  setScrollBeggining(false);
                }
              }}
            >
              {similarMovieData
                ? similarMovieData.map((item) => {
                    return (
                      <SwiperSlide>
                        <Link
                          to={`/movies/${item.id}`}
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          <PosterElement
                            elementInfo={{
                              id: item.id,
                              rate: item.vote_average.toFixed(2),
                              title: item.original_title,
                              year: item.release_date.split("-")[0],
                            }}
                            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            key={item.id}
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })
                : null}
              <div
                id="swiper-back-icon"
                className="absolute top-1/2 left-12 p-2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-500    rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 hover:scale-100 scale-75 transition duration-100 ease-in"
                style={{
                  display: scrollBeggining ? "none" : "",
                }}
              >
                <FaArrowLeft
                  color="white"
                  size={40}
                  className="z-20 cursor-pointer swiper-button-prev"
                />
              </div>
              <div
                id="swiper-forward-icon"
                className="absolute top-1/2 right-12 p-2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 hover:scale-100 scale-75 transition duration-150 ease-in "
                style={{
                  display: scrollEnd ? "none" : "",
                }}
              >
                <FaArrowRight
                  color="white"
                  size={40}
                  className="z-20 cursor-pointer swiper-button-prev"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
