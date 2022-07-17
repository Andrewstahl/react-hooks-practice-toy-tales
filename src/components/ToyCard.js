import React from "react";

function ToyCard({ toy, onLike, onDelete }) {
  
  function handleLike() {
    // console.log("I've been liked")
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...toy,
        likes: toy.likes + 1
      })
    })
      .then(r => r.json())
      .then(updatedItem => onLike(updatedItem))
    
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    onDelete(toy)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button 
        onClick={handleLike} 
        className="like-btn"
      >
        Like {"<3"}
      </button>
      <button 
        onClick={handleDelete}
        className="del-btn"
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
