import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

/**
 * App Hierarchy
 * 
 * App
 * ├─── Header
 * ├─── Toy Form
 * └─── Toy Container
 *      ├─── Toy
 *      ├─── Toy
 *      └─── Toy
 */

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toyData => setToyList(toyData))
  }, [])

  function handleLike(updatedToy) {
    const updatedList = toyList.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
      // return toy.id === updatedToy.id ? updatedToy : toy
    });

    setToyList(updatedList)
  }

  function handleDelete(deletedToy) {
    const updatedList = toyList.filter (toy => toy.id !== deletedToy.id);

    setToyList(updatedList);
  }

  function handleSubmit(newToy) {
    const updatedList = [...toyList, newToy];

    setToyList(updatedList);

  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={handleSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onLike={handleLike} onDelete={handleDelete}/>
    </>
  );
}

export default App;
