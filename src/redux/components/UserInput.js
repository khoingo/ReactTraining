import React from 'react';

const UserInput = ({ todo }) => {
  return <div>{todo && todo.text}</div>
}

export default UserInput;