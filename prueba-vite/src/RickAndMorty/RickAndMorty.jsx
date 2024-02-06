import React, { useEffect, useState } from "react";
import CardRick from "./CardRick";
const baseURL = "https://rickandmortyapi.com/api/character/";

function RickAndMorty() {
  const [data, setData] = useState([]);
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const handleInfo = (event) => {
    setCharacter(event.target.value);
  };
  const searchCharacter = async (name) => {
    try {
      const response = await fetch(`${baseURL}?name=${name}`);
      const dataCharacter = await response.json();
      console.log(dataCharacter);
      setData(dataCharacter.results);
      console.log(data);
    } catch (error) {
      MessageError("Hay error al obtener la información");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInfo} />
      <button
        type="button"
        onClick={() => {
          searchCharacter(character);
        }}
      >
        Buscar
      </button>

      <CardRick character={data} />
    </div>
  );
}

export default RickAndMorty;
