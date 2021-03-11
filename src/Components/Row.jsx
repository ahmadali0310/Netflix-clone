import React, { Component } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

class Row extends Component {
  state = {
    movies: [],
    setMovies: [],
    trailerUrl: "",
  };
  componentDidMount = () => {
    axios
      .get(this.props.fetchURL)
      .then((res) => {
        this.setState({ movies: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleClick = (movie) => {
    if (this.state.trailerUrl) {
      this.setState({ trailerUrl: "" });
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          this.setState({ trailerUrl: urlParams.get("v") });
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="row">
        <h2>{this.props.title}</h2>
        <div className="row__posters">
          {this.state.movies.map((movie) => {
            return (
              <img
                onClick={() => this.handleClick(movie)}
                className={
                  this.props.isLarge ? "row__large__poster" : "row__poster"
                }
                src={`${baseUrl}${
                  this.props.isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                alt=""
                srcSet=""
              />
            );
          })}
        </div>
        {this.state.trailerUrl && (
          <YouTube videoId={this.state.trailerUrl} opts={opts} />
        )}
      </div>
    );
  }
}

export default Row;
