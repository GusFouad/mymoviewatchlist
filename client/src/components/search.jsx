import React, { Component } from "react";
import axios from "axios";
import config from "../config.json";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";
import Pagination from "./Pagination";

class Search extends Component {
  state = {
    movies: [],
    search: "",
    totalResults: 0,
    currentPage: 1,
    currentMovie: null,
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await axios(config.movieApi + this.state.search).then(({ data }) => {
      let movies = data.results;
      this.setState({
        movies: [...movies],
        totalResults: data.total_results,
      });
      console.log(data.results, data.results[0].poster_path);
    });
  };
  handlePageChange = (page) => {
    console.log(page);
  };
  nextPage = (pageNumber) => {
    axios(`${config.movieApi}${this.state.search}&page=${pageNumber}`).then(
      ({ data }) => {
        console.log(data.results, pageNumber, "comeback and fix this");
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      }
    );
  };
  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({ currentMovie: newCurrentMovie });
  };
  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };
  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        {this.state.currentMovie === null ? (
          <div>
            <div className="container">
              <div>
                <div className="row">
                  <section>
                    <form onSubmit={this.handleSubmit}>
                      <div>
                        <input
                          type="text"
                          placeholder="Search movies"
                          onChange={this.handleChange}
                        />
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />
          </div>
        ) : (
          <div>
            <MovieInfo
              currentMovie={this.state.currentMovie}
              closeMovieInfo={this.closeMovieInfo}
            />
          </div>
        )}
        {this.state.totalResults > 20 && this.state.currentMovie === null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Search;
