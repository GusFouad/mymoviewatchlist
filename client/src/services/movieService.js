import axios from "axios";
export function getMovies() {
  return axios.get("http://localhost:5000/movies/mymovies");
}
export function deleteMovie(movieId) {}
