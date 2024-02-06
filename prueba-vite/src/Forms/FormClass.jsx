import React from "react";

// clase: https://stackblitz.com/edit/react-bimqn2?file=src%2FApp.js

function FormClass() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //   const saveEmail = (e) => {
  //     setUser((prev) => ({
  //       ...prev,
  //       email: e.target.value,
  //     }));
  //   };

  //   const savePassword = (e) => {
  //     setUser((prev) => ({
  //       ...user,
  //       password: e.target.value,
  //     }));
  //   };

  //el conjunto de las 2 de arriba, para no depender de varias funciones
  const handleUserInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };
  return (
    <form>
      <h1>Registro</h1>
      <input value={user.email} name="email" type="email" />
      <input value={user.password} name="password" type="password" />
      <button>Guardar</button>
    </form>
  );
}

export default FormClass;
