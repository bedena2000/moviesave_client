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

export const MainSlider: FC<MainSliderProps> = ({ title = "" }) => {
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
          onReachEnd={() => {
            setScrollEnd(true);
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
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>
          <SwiperSlide className="slider-poster-element">
            <PosterElement image={MyImage} />
          </SwiperSlide>

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
