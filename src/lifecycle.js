import React from "react";
import Mount from "./mount";

class Lifecycle extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { counter: 0, mount: true };
  }

  componentDidMount() {
    console.log("Component Did Mount - Working");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <div>{this.state.counter}</div>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("Component Did Update - Working");
  }

  componentWillUnmount() {
    console.log("Component Did Unmounted - Working");
  }
}

export default Lifecycle;
