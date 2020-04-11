import React, { Component } from "react";
class MovieList extends Component {
  state = {
    movies: {
      Title: "",
      Poster: "",
      Plot: "",
      Rating: 0,
      Year: 0
    }
  };
  handleDelete = movie => {
    console.log(movie);
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies on your watchlist </p>;
    return (
      <React.Fragment>
        <p>You have {count} movies on your watchlist</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Poster</th>
              <th>Plot</th>
              <th>Rating</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  onClick={() => this.handleDelete()}
                  className="btn btn-danger btn-m"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MovieList;
