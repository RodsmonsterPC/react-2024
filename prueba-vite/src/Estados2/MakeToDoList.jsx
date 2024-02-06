import React, { useState } from "react";
import style from "./styles/Todo.module.scss";
import TodoCard from "./TodoCard";
const MakeToDoList = () => {
  const [value, setValue] = useState("");
  const [TODO, setTODO] = useState([]);

  return (
    <div className={style.container}>
      <input
        className="border-2 border-black/40"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
      <button
        className="border-2 border-black/40"
        onClick={() => {
          value !== ""
            ? setTODO([...TODO, value])
            : alert("Llenar el campo correspondiente");

          setValue("");
          //deberia de tomar el valor del input y guardarlo
        }}
      >
        Agregar tarea
      </button>
      {TODO.map((cv) => {
        return (
          <>
            <TodoCard key={id} data={cv} />
          </>
        );
      })}
    </div>
  );
};

export default MakeToDoList;
