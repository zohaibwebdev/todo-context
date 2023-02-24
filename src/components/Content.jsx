import React from "react";

const Content = () => {
  return (
    <>
      <h1>List of Tasks</h1>
      <div className="item">
        <p>task #1</p>
        <button className="btn">delete</button>
      </div>
      <div className="item">
        <p>task #2</p>
        <button className="btn">delete</button>
      </div>
      <div className="item">
        <p>task #3</p>
        <button className="btn">delete</button>
      </div>
    </>
  );
};

export default Content;
