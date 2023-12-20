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

const GetPopularMovies = async () => {
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
    console.log(result);
    return result.data.genres;
  } catch (error) {
    console.log(error);
  }
};

export default { GetAllMovies, GetPopularMovies, GetAllGenres };
