import React from "react";
import { Link, withRouter } from "react-router-dom";

// const NewNavigation = withRouter(Navigation);

export default class LoadingPage extends React.Component {
  componentDidMount() {
    checkIfAdmin().then(result => {
      if (result) {
        this.props.history.push("/about");
      }
    });
  }

  render() {
    return (
      <div id="loading-page">
        <h1>loading ......</h1>
        {/* <NewNavigation /> */}
      </div>
    );
  }
}

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function checkIfAdmin() {
  await delay(3000);
  return true;
}
