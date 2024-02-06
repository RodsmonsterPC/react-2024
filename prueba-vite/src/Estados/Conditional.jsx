import React, { useState } from "react";

function Conditional() {
  const [condition, setCondition] = useState(true);

  const toggleCondition = () => {
    setCondition(!condition);
  };

  return (
    <div>
      <button onClick={toggleCondition}> Toggle </button>
      {/* 
      {condition === true ? <h1>Show message</h1> : <h1>Message fake</h1> } */}

      {condition && <h1>show message</h1>}

      {/* <p>Estado actual: {condition.toString()} </p> */}
      <p>Estado actual: {condition === true ? "visible" : "oculto"} </p>
    </div>
  );
}

export default Conditional;
