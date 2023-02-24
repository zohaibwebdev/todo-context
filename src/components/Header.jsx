import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Header = () => {
  const a = useContext(TodoContext);
  return (
    <div>
      <h1>Header</h1>
      <h1>Hi !!!{a.name}</h1>
    </div>
  );
};

export default Header;
