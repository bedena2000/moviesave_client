import { FC, useState } from "react";
import { PosterElement } from "../../../components/shared/PosterElement/PosterElement";

// Styling
import "./utils/styling/MainSlider.css";

// Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import MyImage from "../../../assets/img/poste.webp";

// Types
import { MainSliderProps } from "./utils/types/MainSlider";
import { Navigation } from "swiper/modules";

// Hooks

export const MainSlider: FC<MainSliderProps> = ({ title = "", list = [] }) => {
  const [scrollEnd, setScrollEnd] = useState(false);
  const [scrollBeggining, setScrollBeggining] = useState(false);

  return (
    <div className="p-4 mt-4">
      <div
        className={` transition ease-in duration-100  cursor-pointer flex items-center gap-2 hover:gap-3`}
      >
        <h2 className="text-white text-3xl font-quicksand font-bold">
          {title}
        </h2>
        <FaArrowRight className="text-white" />
      </div>
      <div className="mt-3">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={false}
          // onSlideChange={() => {
          //   setScrollEnd(false);
          //   setScrollBeggining(false);
          // }}
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
          navigation={{
            nextEl: "#swiper-forward",
            prevEl: "#swiper-back",
          }}
        >
          {list.length === 0 ? (
            <p>Loading...</p>
          ) : (
            list.map((item) => {
              const movieYear = item["release_date"]
                ? item["release_date"].split("-")[0]
                : item["first_air_date"]
                ? item["first_air_date"].split("-")[0]
                : "";
              const movieName = item["title"]
                ? item["title"]
                : item["name"]
                ? item["name"]
                : "";
              const movieRate = item["vote_average"].toString().slice(0, 3);
              const imgPath = `https://image.tmdb.org/t/p/w500/${item["poster_path"]}`;
              return (
                <SwiperSlide
                  key={item.id}
                  className="slider-poster-element cursor-pointer hover:z-20 transition ease-in duration-200 rounded-lg overflow-hidden hover:border-slate-400 hover:border-2"
                >
                  <PosterElement
                    elementInfo={{
                      id: item.id,
                      rate: movieRate,
                      title: movieName,
                      year: movieYear,
                    }}
                    image={imgPath}
                  />
                </SwiperSlide>
              );
            })
          )}

          <div
            id="swiper-back"
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
            id="swiper-forward"
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
  );
};
