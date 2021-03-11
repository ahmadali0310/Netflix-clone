import React, { Component } from "react";
import axios from "../axios";
const baseUrl = "https://image.tmdb.org/t/p/original";

class Banner extends Component {
  state = {
    banner: [],
  };
  componentDidMount = () => {
    axios
      .get(this.props.fetchUrl)
      .then((res) => {
        this.setState({
          banner:
            res.data.results[
              Math.floor(Math.random() * res.data.results.length - 1)
            ],
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <header
        className="banner"
        style={{
          backgroundSize: "100% 100%",
          backgroundImage: `url(${baseUrl}${this.state.banner?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          <h1>
            {this.state.banner?.title ||
              this.state.banner?.name ||
              this.state.banner?.original_name}
          </h1>
          <div className="banner__btns">
            <button className="banner__btn">Play</button>
            <button className="banner__btn">My List</button>
          </div>
          <div className="banner__description">
            <p>{this.state.banner?.overview}</p>
          </div>
        </div>
        <div className="bottom__fade"></div>
      </header>
    );
  }
}

export default Banner;
