import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers/TodoReducer";

const store = createStore(counter);
const rootEl = document.getElementById("root");

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    return (
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    );
  }
}
