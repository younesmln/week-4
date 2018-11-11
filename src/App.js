import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    const { name } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <input
            placeholder="type your name"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Route path="/" exact component={HomePage} />
          <Route path="/loading" exact component={LoadingPage} />
          <Route path="/about/" component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
