import React from "react";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="home-page">
        <h1>Home</h1>
        <Link to="/loading">
          <button id="button">hello</button>
        </Link>
      </div>
    );
  }
}
