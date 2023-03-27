import React from 'react'
import { Link } from 'react-router-dom'

  function SoundCard( { sound } ) {
    
    const { name, book, url, words } = sound
    let wordsArray = words.split(",");

    console.log(url)

    return (
      <div className="card">
        <h2 key={name}>{name}</h2>
        <p> Check each word as you practice! </p>
        <p> Words: </p> 
        { wordsArray.map((word) => {
          return <ul className="word" key={word}> {word}
          <input type="checkbox" className="checkbox" key={word}></input></ul>
        })}
          <p key={book}> Book: {book} </p>
          <Link to={{ pathname: url }} target={url} >{url}</Link>
        </div>
    )
}
export default SoundCard;


