import axios from "axios";
export function getMovies() {
  return axios.get("http://localhost:5000/movies/list");
}
export function deleteMovie(movieId) {}
