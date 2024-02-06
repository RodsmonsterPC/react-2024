import React, { useState } from "react";
import ToDoCard from "./ToDoCard";
import styles from "./toDoList.module.scss";
const toDoList = [
  {
    id: 1,
    title: "Hacer ejercicio",
    done: false,
  },
  { id: 2, title: "Hacer trabajo", done: false },
  {
    id: 3,
    title: "Hacer limpieza",
    done: false,
  },
  { id: 4, title: "Hacer comida", done: false },
  { id: 5, title: "Hacer ensayo", done: false },
];

function ToDoList() {
  const [task, setTask] = useState(toDoList);

  const taskDone = (id) => {
    let taksSearch = task.find((tasks) => id === tasks.id);

    taksSearch.done = true;

    setTask([...task]);
  };

  const taskPending = (id) => {
    let taksSearch = task.find((tasks) => id === tasks.id);

    taksSearch.done = false;

    setTask([...task]);
  };
  return (
    <div>
      {task.map((cv) => {
        return (
          <>
            <div className={styles.container}>
              <ToDoCard data={cv} />
              <button
                onClick={() => {
                  taskDone(cv.id);
                }}
              >
                Task done
              </button>
              <button
                onClick={() => {
                  taskPending(cv.id);
                }}
              >
                Task pending
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ToDoList;
