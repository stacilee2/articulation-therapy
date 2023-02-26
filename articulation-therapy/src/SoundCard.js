import React from 'react'

function SoundCard( { sound } ) {

    let words = sound.words;
    console.log(words)
    let wordsArray = words.split(",");

  return (
    <div className="card">
      <h2 key={sound.name}>{sound.name}</h2>
      <p> Check each word as you practice! </p>
      <p> Words: </p> 
      { wordsArray.map(word => {
        return <ul className="word" key={word}>{word}
        <input type="checkbox" className="checkbox"></input></ul>
      })}
        <p key={sound.book}> Book: {sound.book} </p>
        <a href={sound.url} className="book-url"> Read-Aloud: {sound.url} </a>
      </div>
  )
}

export default SoundCard;


