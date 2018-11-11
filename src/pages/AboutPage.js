import React from "react";
import { Link } from "react-router-dom";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div id="about-page">
        <h1>About</h1>
        <Link to="/">home</Link>
      </div>
    );
  }
}
