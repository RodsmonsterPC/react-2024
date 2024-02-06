import React, { useEffect, useState } from "react";

// codigo de la clase: https://stackblitz.com/edit/react-we4hmj?file=public%2Findex.html,src%2FApp.js

//clima puede ser soleado, congelado, normal

//Api rick and morty: https://rickandmortyapi.com/api/character/?name=rick

function Ejercicio1() {
  //   const [weather, setWeather] = useState("soleado");
  //   const [water, setWater] = useState("liquido");
  const [pokemon, setPokemon] = useState("pikachu");
  const BaseURL = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState({});

  //DIDMount
  useEffect(() => {
    //aqui hago la petición
    if (pokemon.trim() === "") return;
    setIsLoading(true);
    fetch(BaseURL)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          name: data.name,
          img: data.sprites.front_default,
        });
        setIsLoading(false);
      });
  }, [pokemon]);

  //DIDMount

  //   useEffect(() => {
  //     //aqui hago un timer o addlistener
  //     return () => {
  //       //Aqui ejecuto la logica de cuando muere
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (weather === "soleado") {
  //       setWater("gaseoso");
  //     }
  //   }, [weather]);

  return (
    <div>
      <input
        value={pokemon}
        type="text"
        onChange={({ target }) => {
          setPokemon(target.value);
        }}
      />
      <button
        onClick={() => {
          pokemon !== ""
            ? setPokemon(pokemon)
            : alert("Llenar el campo a buscar");
        }}
      >
        Buscar pokemon
      </button>
      {isLoading && <p>loading...</p>}
      {!isLoading && (
        <>
          <p>{character.name}</p>
          <img src={character.img} />
        </>
      )}
    </div>
  );
}

export default Ejercicio1;
