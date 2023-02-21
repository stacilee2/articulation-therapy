import React, { useState } from "react";

function AddSound( {onAddSound} ) {

    const [name, setName] = useState([]);
    const [words, setWords] = useState([]);
    const [book, setBook] = useState([]);
    const [url, setUrl] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
  
        fetch("http://localhost:3000/sounds", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, words, book, url}),
        })
        .then ((r) => r.json())
        .then ((data) => onAddSound(data));
    }
  
  return (
    <div className="container">
      <form className="add-sound" onSubmit={handleSubmit}>
        <h3>Add a Sound Card Here!</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter a sound..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="name"
          onChange={(e) => setWords(e.target.value)}
          value={words}
          placeholder="Enter target target words"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e) => setBook(e.target.value)}
          value={book}
          placeholder="Enter a book"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Enter a book video URL"
          className="input-text"
        />
        <br />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create Sound Card"
          className="submit"
        />
      </form>
    </div>
  );
}

export default AddSound;