import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    return <Spinner message='Please accept location request' />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
