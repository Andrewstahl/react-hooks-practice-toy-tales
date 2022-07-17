import React, { useState } from "react";

function ToyForm({ onSubmit }) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "", 
    likes: 0
  })

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setNewToy({
      ...newToy,
      [name]: value
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(r => r.json())
      .then(newToyData => {
        setNewToy({
          name: "",
          image: "", 
          likes: 0
        })
        onSubmit(newToyData)
      })

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={newToy.name}
          onChange={(e) => handleChange(e)}
          placeholder="Enter a toy's name..."
          className="input-text"
          />
        <br />
        <input
          type="text"
          name="image"
          value={newToy.image}
          onChange={(e) => handleChange(e)}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
