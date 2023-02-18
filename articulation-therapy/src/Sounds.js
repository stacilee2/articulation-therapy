import React from 'react'
import SoundCard from './SoundCard';

function Sounds( {sounds} ) {

  return (
    <div className="collection">
      <h4>Find different vocalic /r/ sounds with instructions for target level here based on your client's needs:</h4>
      <li>Word Level: target word only 5-10 reps</li>
      <li>Phrase Level: I see...(add target here) / My...(add target here)</li>
      <li>Sentence Level: Create a sentence using target</li>
     {
      sounds.map((sound) => {
        return (
        <SoundCard sound={sound} key={sound.id} className="sound-card" />
        )
      })
    }
    </div>
  );
}

export default Sounds;
