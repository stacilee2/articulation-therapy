import React from 'react'

function SoundCard( { sound } ) {

  return (
    <div className="card">
      <h2 key={sound.name}>{sound.name}</h2>
      <p> Words: {sound.words}</p>
        <p key={sound.book}> Book: {sound.book} </p>
        <a href={sound.url}> Read-Aloud: {sound.url} </a>
      </div>
  )
}

export default SoundCard;


