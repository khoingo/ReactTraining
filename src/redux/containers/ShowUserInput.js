import { connect } from "react-redux";
import UserInput from '../components/UserInput';

const mapStateToProps = state => ({
  todo: state.todos.find(todo => todo.chosen)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput);