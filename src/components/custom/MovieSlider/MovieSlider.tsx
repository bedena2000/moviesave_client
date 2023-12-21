import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/scrollbar";
import "./utils/styling/MovieSliderStyle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { LoadImage } from "../../../components";
import SliderBackgroundImage from "../../../assets/img/slider-background.jpg";
import SliderRow from "../../../assets/img/home.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { useMovieListHook } from "../../../hooks/useMoviesList";
import { Loading } from "../../shared/Loading";
import { Link } from "react-router-dom";

// Hooks

export const MovieSlider = () => {
  const { movieList, error, isLoading } = useMovieListHook();

  let updatedMovieList = [];
  if (movieList) {
    updatedMovieList = movieList.splice(0, 6);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <h2 className="text-white">
          Sorry something went wrong... try refresh the page
        </h2>
      </div>
    );
  }

  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        effect="cards3D"
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        keyboard={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        allowSlideNext={true}
        // loop={true}
        autoplay={{
          delay: 3000, // Delay between transitions (milliseconds)
          disableOnInteraction: false, // Stop autoplay on user interaction
        }}
        navigation={{
          nextEl: "#swiper-forward",
          prevEl: "#swiper-back",
        }}
      >
        {updatedMovieList.map((item) => {
          const MovieDate = item["release_date"].substring(0, 4);
          return (
            <SwiperSlide className="swiper-slider-card" key={item.id}>
              <Link to={`/movie/${item.id}`} className="w-ful h-full block">
                <LoadImage
                  path={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  altImage="backgroundSliderImage"
                  classNames="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-2xl bg-slate-600 inline-block p-2 rounded-lg  text-bold font-quicksand">
                    {MovieDate}
                  </p>
                  <p className="text-2xl text-white mt-2 bg-slate-700 p-2 rounded-lg drop-shadow-md">
                    {item.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}

        <div
          id="swiper-back"
          className="absolute top-1/2 left-12 p-2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-500    rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 hover:scale-100 scale-75 transition duration-100 ease-in"
        >
          <FaArrowLeft
            color="white"
            size={40}
            className="z-20 cursor-pointer swiper-button-prev"
          />
        </div>
        <div
          id="swiper-forward"
          className="absolute top-1/2 right-12 p-2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 hover:scale-100 scale-75 transition duration-150 ease-in "
        >
          <FaArrowRight
            color="white"
            size={40}
            className="z-20 cursor-pointer swiper-button-prev"
          />
        </div>
      </Swiper>
    </div>
  );
};
