import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/TodoReducer";
import TodoMain from './components/TodoMain';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(rootReducer);

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/:filter?" component={TodoMain} />
        </Router>
      </Provider>
    );
  }
}
