import React from 'react'

function SoundCard( { sound } ) {

  return (
    <div className="card">
      <h1>{sound.name}</h1>
      {sound.words.map(word =>
        <li>{word}</li>)}
        <p> Book: {sound.book} </p>
        <a href={sound.url}> Read-Aloud: {sound.url} </a>
      </div>
  )
}

export default SoundCard;


