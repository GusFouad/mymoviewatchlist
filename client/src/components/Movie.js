import React from "react";

const Movie = (props) => {
  return (
    <div className="p4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {props.image == null ? (
            <img
              src={
                "https://s3-ap-southest-1.amazonaws.com/upcode/static/default-image.jpg"
              }
              alt="card"
              style={{ width: "100%", height: 360 }}
              onClick={() => props.viewMovieInfo(props.movieId)}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="card "
              style={{ width: "100%", height: 360 }}
              onClick={() => props.viewMovieInfo(props.movieId)}
            />
          )}
        </div>
        <div className="card-content">
          <p>
            <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
              View Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
