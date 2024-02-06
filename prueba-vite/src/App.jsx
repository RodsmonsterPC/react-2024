import "./App.css";

import ListProducts from "./products/listProducts";

import CounterApp from "./Estados/counter";
import Conditional from "./Estados/Conditional";
import ProductList from "./Estados/ProductList";
import ToDoList from "./Estados/ToDoList";
import MakeToDoList from "./Estados2/MakeToDoList";
import Ejercicio1 from "./Effects/Ejercicio1";
import RickAndMorty from "./RickAndMorty/RickAndMorty";

function App() {
  //   const product = [
  //     {
  //       id: 0,
  //       name: "Jabón",
  //       precio: "32",
  //       cantidad: 3,
  //     },
  //     {
  //       id: 1,
  //       name: "Escoba",
  //       precio: "45",
  //       cantidad: 10,
  //     },
  //     {
  //       id: 2,
  //       name: "Cereal",
  //       precio: "50",
  //       cantidad: 40,
  //     },
  //     {
  //       id: 3,
  //       name: "Lavadora",
  //       precio: "1300",
  //       cantidad: 6,
  //     },
  //     {
  //       id: 4,
  //       name: "Computadora",
  //       precio: "7000",
  //       cantidad: 10,
  //     },
  //     {
  //       id: 5,
  //       name: "Cuaderno",
  //       precio: "39",
  //       cantidad: 50,
  //     },
  //     {
  //       id: 6,
  //       name: "Lapiz",
  //       precio: "12",
  //       cantidad: 70,
  //     },
  //     {
  //       id: 7,
  //       name: "Pelota",
  //       precio: "24",
  //       cantidad: 40,
  //     },
  //     {
  //       id: 8,
  //       name: "Estereo",
  //       precio: "500",
  //       cantidad: 9,
  //     },
  //     {
  //       id: 9,
  //       name: "Galletas",
  //       precio: "34",
  //       cantidad: 76,
  //     },
  //   ];

  return (
    <>
      {/* <ListProducts products={product} /> */}
      {/* <CounterApp />
      <Conditional /> */}
      {/* <ProductList /> */}
      {/* <ToDoList /> */}
      {/* <MakeToDoList /> */}
      {/* <Ejercicio1 /> */}
      <RickAndMorty />
    </>
  );
}

export default App;
