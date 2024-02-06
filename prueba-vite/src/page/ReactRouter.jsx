import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function ReactRouter() {
  const Home = () => <h1>Home</h1>;
  const About = () => <h1>About</h1>;
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default ReactRouter;
