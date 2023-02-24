import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Add from "./components/Add";
import TodoState from "./context/TodoState";
function App() {
  return (
    <TodoState>
      <Header />
      <Content />
      <Add />
    </TodoState>
  );
}

export default App;
