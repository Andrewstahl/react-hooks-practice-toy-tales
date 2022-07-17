import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onLike, onDelete }) {

  const toyElements = toyList.map(toy => 
    <ToyCard 
      key={toy.id} 
      toy={toy} 
      onLike={onLike} 
      onDelete={onDelete}
    />
  )

  return (
    <div id="toy-collection">{toyElements}</div>
  );
}

export default ToyContainer;
