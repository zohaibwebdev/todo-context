import { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
  const todo = {
    name: "awais",
  };
  return (
    <TodoContext.Provider value={todo}>{props.children}</TodoContext.Provider>
  );
};

export default TodoState;
