import React from "react";

function ToDoCard(props) {
  const { title, done } = props.data;

  return (
    <div>
      <h1 style={{ color: done ? "green" : "red" }}>{title}</h1>
    </div>
  );
}

export default ToDoCard;
