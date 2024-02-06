import React from "react";

import styles from "./styles/Todo.module.scss";
function TodoCard(props) {
  return (
    <div className={styles.card}>
      <h1>{props.data}</h1>
      <button>Done</button>
    </div>
  );
}

export default TodoCard;
