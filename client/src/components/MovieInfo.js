import React from "react";
import axios from "axios";
const MovieInfo = ({ closeMovieInfo, currentMovie, onClickAdd }) => {
  onClickAdd = async () => {
    const movie = {
      title: currentMovie.title,
      plot: currentMovie.overview,

      image: currentMovie.poster_path,
      rating: currentMovie.vote_average,
      releaseDate: currentMovie.release_date,
      movieId: currentMovie.id,
    };
    await axios
      .post("http://localhost:5000/movies/add", movie)
      .then((r) =>
        console.log(r, "Successfully added to your watchlist", movie.image)
      );
  };

  return (
    <div className="container">
      <div
        className="row"
        onClick={closeMovieInfo}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <i className="fas fa-arrow-left"> Back</i>
        <span />
      </div>
      <div className="row">
        <div className="col s12 m4">
          {currentMovie.poster_path === null ? (
            <img
              src={
                "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image/jpg"
              }
              alt="card"
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`}
              alt="card"
            />
          )}
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <p>{currentMovie.title}</p>
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.overview}</p>
          </div>
          <button onClick={onClickAdd}>Add To Watch List</button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
