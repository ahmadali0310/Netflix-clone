import React, { Component } from "react";
import logo from "../icons/netflix.png";
class NavBar extends Component {
  state = {};
  componentDidMount() {
    const section = document.querySelector(".banner");
    const nav = document.querySelector(".navbar");
    const options = {
      rootMargin: "-200px",
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.style.backgroundColor = "#111";
        } else {
          nav.style.backgroundColor = "";
        }
      });
    }, options);

    observer.observe(section);
  }
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" srcSet={logo} />
        </div>
      </div>
    );
  }
}

export default NavBar;
