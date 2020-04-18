import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import MoviesTable from "./MoviesTable";
import axios from "axios";
class MovieList extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const { data: movies } = await getMovies();
    console.log("THESE ARE THE MOVIES", movies);
    this.setState({ movies });
  }
  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    await axios.delete("http://localhost:5000/movies/delete/" + movie._id);
  };
  render() {
    const { length: count } = this.state.movies;
    const { movies } = this.state;
    if (count === 0) return <p>There are no movies on your watchlist </p>;
    return (
      <React.Fragment>
        <p>You have {count} movies on your watchlist</p>

        <MoviesTable
          movies={movies}
          onDelete={this.handleDelete}
          poster={movies.poster}
        />
      </React.Fragment>
    );
  }
}

export default MovieList;
