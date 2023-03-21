import React, { useState } from "react";

function AddSound( {onAddSound} ) {

    const [name, setName] = useState("");
    const [words, setWords] = useState("");
    const [book, setBook] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( words.includes(',') ) {
          setWords(words)
          handlePost()

        } else {
          setErrors(["PLEASE INCLUDE 5 OR MORE WORDS AND COMMAS BETWEEN EACH TARGET WORD!"],
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
            body: JSON.stringify({ name, words, book, url }), 
            
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
    <div>
      { errors.length > 0 ? errors.map((errorMessage)=> (
        <p key={errorMessage} className="error" style={{ color: "red" }}> {errorMessage}</p>
      )) : null }
      <form className="form" onSubmit={handleSubmit}>
        <h3>Want to individualize your session?</h3>
        <h4>Create your own sound card here!</h4>
        <label className="label"> Sound Target (ex: p or k)</label><br></br>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder=""
        />
        <br />
        <label className="label"> Five or More Target Words (include commas please)</label><br></br>
        <input
          type="text"
          name="name"
          onChange={(e) => setWords(e.target.value)}
          value={words}
          placeholder=""
        />
        <br />
        <label className="label"> Title of Book and/or Author's Name</label><br></br>
        <input
          type="text"
          name="image"
          onChange={(e) => setBook(e.target.value)}
          value={book}
          placeholder=""
        />
        <br /> 
        <label className="label"> Read-aloud Video Link</label><br></br>
        <input
          type="text"
          name="image"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder=""
        />
        <br />
        <h4>After you submit, find your sound card on the <a href="http://localhost:3001/sounds">Sounds</a> page! Enjoy!</h4>
        <input
          type="submit"
          name="submit"
          value="Create Sound Card"
        />
      </form>
    </div>
  );
}

export default AddSound;
