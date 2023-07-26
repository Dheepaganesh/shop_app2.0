import React from "react";
import Lifecycle from "./lifecycle";

class Mount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mount: true };
  }

  mountCounter = () => {
    this.setState({ mount: true });
  };

  unmountCounter = () => {
    this.setState({ mount: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          UnMount
        </button>
        {this.state.mount ? <Lifecycle /> : null}
      </div>
    );
  }
}

export default Mount;
