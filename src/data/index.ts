import axios from "axios";

// Config
import { options } from "./configuration";

const baseUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const GetAllMovies = async () => {
  try {
    const result = await baseUrl.get(`discover/movie`, options);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const GetAllGenres = async () => {
  try {
    const result = await baseUrl.get(`genre/movie/list?language=en`, options);

    return result.data.genres;
  } catch (error) {
    console.log(error);
  }
};

const GetPopularMovies = async () => {
  try {
    const result = await baseUrl.get(
      `movie/popular?language=en-US&page=1`,
      options
    );
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const GetTopRatedMovies = async () => {
  try {
    const result = await baseUrl.get(`movie/top_rated`, options);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const GetUpcomingMovies = async () => {
  try {
    const result = await baseUrl.get(`movie/upcoming`, options);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const GetPopularTvSeries = async () => {
  try {
    const result = await baseUrl.get(`tv/popular`, options);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const GetAnimationMovies = async () => {
  try {
    const result = await baseUrl.get(`discover/movie?with_genres=16`, options);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

export interface MovieItemType {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const GetMovieList = async (keyword: string) => {
  try {
    let requestPath = "";
    if (keyword === "movies") {
      requestPath = `/discover/movie?page=20`;
    } else if (keyword === "tv series") {
      requestPath = `/discover/tv?page=20`;
    } else if (keyword === "animations") {
      requestPath = `/discover/movie?with_genres=16&page=20`;
    }
    const result = await baseUrl.get(requestPath, options);
    console.log(result);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const searchMovieByName = async (name: string) => {
  try {
    const result = await baseUrl.get(
      `search/movie?query=${name}&language=eng-US`,
      options
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const searchMovieById = async (movieId: number) => {
  try {
    const result = await baseUrl.get(
      `movie/${movieId}?append_to_response=videos,images,credits`,
      options
    );
    const movieObject = {
      poster_path: result.data.poster_path,
      backdrop_path: result.data.backdrop_path,
      genres: result.data.genres,
      id: result.data.id,
      imdb_db: result.data.imdb_db,
      original_title: result.data.original_title,
      original_language: result.data.original_language,
      release_date: result.data.release_date,
      status: result.data.status,
      video: result.data.video,
      vote_average: result.data.vote_average,
      overview: result.data.overview,
      runtime: result.data.runtime,
      videoPath: result.data.videos.results[0].id
        ? result.data.videos.results[0].key
        : null,
      images: result.data.images.backdrops,
      cast: result.data.credits.cast,
    };
    console.log(movieObject);
    return movieObject;
  } catch (error) {
    console.log(error);
  }
};

const getSimilarMovies = async (movieId: number) => {
  try {
    const result = await baseUrl.get(`movie/${movieId}/similar`, options);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getActorInfo = async (actorId: number) => {
  try {
    const result = await baseUrl.get(
      `person/${actorId}?language=en-US&append_to_response=movie_credits`,
      options
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default {
  GetAllMovies,
  GetPopularMovies,
  GetAllGenres,
  GetTopRatedMovies,
  GetUpcomingMovies,
  GetPopularTvSeries,
  GetAnimationMovies,
  GetMovieList,
  searchMovieByName,
  searchMovieById,
  getSimilarMovies,
  getActorInfo,
};
