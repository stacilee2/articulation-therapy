import React from 'react'

  function SoundCard( { sound } ) {

    const { name, book, url, words } = sound
    let wordsArray = words.split(",");

  return (
    <div className="card">
      <h2 key={name}>{name}</h2>
      <p> Check each word as you practice! </p>
      <p> Words: </p> 
      { wordsArray.map((word) => {
        return <ul className="word" key={word}> {word}
        <input type="checkbox" className="checkbox" key={word}></input></ul>
      })}
        <p key={book}> Book:{book} </p>
        <a href={url} className="book-url"> Read-Aloud: {url} </a>
      </div>
  )
}
export default SoundCard;


