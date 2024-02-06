//rfca
//rfce
//https://github.com/dered-dev/react-gen24

// hook useState()
// use -> hook
import React, { useState } from "react";

const CounterApp = () => {
  // [variable, setVariable]
  // let variable = 'dato'
  let [counter, setCounter] = useState(0);
  console.log(counter);

  const handleIncrementar = () => {
    //operaciones
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
  };
  return (
    <>
      <button onClick={handleIncrementar}>Incrementar</button>
      <h1>Clicks: {counter} </h1>
    </>
  );
};

export default CounterApp;
