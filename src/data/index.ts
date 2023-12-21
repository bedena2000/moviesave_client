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
    console.log(result);
    return result.data.results;
  } catch (error) {
    console.log(error);
  }
};

const GetAnimationMovies = async () => {
  try {
    const result = await baseUrl.get(`discover/movie?with_genres=16`, options);
    console.log(result);
    return result.data.results;
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
};
