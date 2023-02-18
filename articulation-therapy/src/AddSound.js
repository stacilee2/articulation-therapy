import React, { useState } from "react";

function AddSound() {

    const [newSound, setNewSound] = useState("");
    const [newWords, setNewWords] = useState("");
    const [newBook, setNewBook] = useState("");
    const [newURL, setNewURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e,"submitted")
        const soundData = {newSound, newWords, newBook, newURL}
        console.log(soundData)
    }
  
  return (
    <div className="container">
      <form className="add-sound" onSubmit={handleSubmit}>
        <h3>Add a Sound Here!</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => setNewSound(e.target.value)}
          value={newSound}
          placeholder="Enter a sound..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="name"
          onChange={(e) => setNewWords(e.target.value)}
          value={newWords}
          placeholder="Enter five target words"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
          placeholder="Enter a book"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e) => setNewURL(e.target.value)}
          value={newURL}
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