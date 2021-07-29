import React from "react";
import "../components CSS/Title.css";
function Title({ title }) {
  return (
    <header className="container">
      <div className="center-div">
        <h1>{title}</h1>
        <button className="btn btn-success">add</button>
      </div>
    </header>
  );
}

export default Title;
