import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainContent from "./MainContent";
import { ThemeContext, UserContext, themes } from "./context/theme-context";
import DoNotModifyDirectly from "./DoNotModifyDirectly";
import CustomTextInput from "./refs/CustomTextInput";
import AutoFocusTextInput from "./refs/AutoFocusTextInput";
import FunctionComponent from "./refs/FunctionComponent";
import Key from "./key/Key";
import Profile from "./Profile";
import Counter from "./redux/CounterApp";
import TodoApp from "./redux/TodoApp";
import RedditApp from "./redux/RedditApp";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme
    };
    this.ref = React.createRef();
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value="abc">
          <React.StrictMode>
            <MainContent ref={this.ref} toggleTheme={this.toggleTheme}/>
            <DoNotModifyDirectly />
            <CustomTextInput />
            <AutoFocusTextInput />
            <AutoFocusTextInput />
            <FunctionComponent />
            <Key />
            {/* <Counter />
            <TodoApp />
            <RedditApp /> */}
          </React.StrictMode>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
