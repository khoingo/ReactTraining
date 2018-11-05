import React, { Component } from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

export default class TodoApp extends Component {
  render() {
    return (
      <>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </>
    );
  }
}
