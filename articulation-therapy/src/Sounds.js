import React from 'react'
import SoundCard from './SoundCard';

function Sounds( {sounds} ) {

  return (
    <div className="collection">
      <h4>Word Level: target word only 5-10 reps</h4>
      <h4>Phrase Level: I see...(add target here) / My...(add target here)</h4>
      <h4>Sentence Level: Create a sentence using target</h4>
     {
      sounds.map((sound) => {
        return (
        <SoundCard sound={sound} key={sound.id} />
        )
      })
    }
    </div>
  );
}

export default Sounds;
