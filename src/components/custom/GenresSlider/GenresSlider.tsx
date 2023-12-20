import { FC, ReactNode } from "react";
import { AiFillCamera } from "react-icons/ai";

// Hooks
import { useMoviesGenreList } from "../../../hooks/useMoviesGenreList";

// Styling
import "./utils/styling/GenreSlider.css";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";

// Components
import { GenreElement } from "../../../components";

// Data
import api from "../../../data/index";
import { genresOriginalList } from "../../../data/genres";
import { Link } from "react-router-dom";

export const GenresSlider = () => {
  let genresList: {
    id: number;
    name: string;
    icon: ReactNode;
  }[];
  if (genresOriginalList) {
    genresList = genresOriginalList.slice(0, 10);
  }
  return (
    <div className="mt-6 p-4">
      <Swiper spaceBetween={40} slidesPerView="7" centeredSlides={false}>
        {genresList.map((item) => (
          <SwiperSlide key={item.id} className=" items-center">
            <Link to={`/genre/${item.id}`} className="">
              <GenreElement
                title={item.name}
                GenreIcon={item.icon}
                classes="w-[164px] justify-center inline-block px-4 py-4"
              />
            </Link>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide>
        <SwiperSlide className="swiper-genre-element">
          <GenreElement title="drama" GenreIcon={<AiFillCamera />} />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
