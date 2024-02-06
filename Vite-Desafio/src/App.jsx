import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailProduct from "./pages/DetailList";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </main>
  );
}

export default App;
