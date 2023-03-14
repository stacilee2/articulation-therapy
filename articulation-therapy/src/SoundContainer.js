import React from 'react'
import SoundCard from './SoundCard';

function SoundContainer( {sounds} ) {

  return (
    <div className="collection">
      <h4>Find different vocalic /r/ sounds with instructions for target level here based on your client's needs:</h4>
      <li>WORD Level: target word only 5-10 reps</li>
      <li>PHRASE Level: I see..." "   OR   My..." "</li>
      <li>SENTENCE Level: Create a sentence using target</li>
     {
      sounds.map((sound, id) => {
        return (
        <SoundCard sound={sound} key={id} className="sound-card" />
        )
      })
    }
    </div>
  );
}

export default SoundContainer;
