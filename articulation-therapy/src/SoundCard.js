import React from 'react'

function SoundCard( { sound } ) {

  return (
    <div className="card">
      <h2>{sound.name}</h2>
      <span>Check each box as you practice each word</span>
      {sound.words.map(word =>
        <ul className="word-list">{word}
        <input type="checkbox" /></ul>)}
        <p> Book: {sound.book} </p>
        <a href={sound.url}> Read-Aloud: {sound.url} </a>
      </div>
  )
}

export default SoundCard;


