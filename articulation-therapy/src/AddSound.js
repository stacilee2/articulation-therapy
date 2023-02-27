import React, { useState } from "react";

function AddSound( {onAddSound} ) {

    const [name, setName] = useState("");
    const [words, setWords] = useState("");
    const [book, setBook] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( words.includes(',') ) {
          setWords(words)
          handlePost()

        } else {
          setErrors(["PLEASE INCLUDE COMMAS BETWEEN EACH TARGET WORD!"],
          setTimeout(() => {
            setErrors("")
          }, 5000));
          setWords("")
        }
        
        function handlePost() {
          fetch("http://localhost:3000/sounds", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, words, book, url}),
            
          })
          .then ((r) => r.json())
          .then ((data) => onAddSound(data));
        
          setName("")
          setWords("")
          setBook("")
          setUrl("")
        }
    }
        
  
  return (
    <div className="container">
      { errors.length > 0 ? errors.map((error)=> (
        <p key={error} className="error" style={{ color: "red" }}> {error}</p>
      )) : null }
      <form className="form" onSubmit={handleSubmit}>
        <h3>Want to individualize your session? Create your own sound card here!</h3>
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
        <br/><br></br>
        <h4>After you submit, find your sound card on the Sounds page! Enjoy!</h4>
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
