const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          chosen: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed, chosen: true } : {...todo, chosen: false }
      );
    default:
      return state;
  }
};

export default todos;
