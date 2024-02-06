import React from "react";
import Card from "./CardRender";

function CardRick({ character }) {
  console.log(character);
  return (
    <div>
      {character && (
        <>
          {character?.map((info) => (
            <Card
              key={info.id}
              name={info.name}
              status={info.status}
              species={info.species}
              location={info.location}
              origin={info.origin}
              image={info.image}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CardRick;
