import Sound from 'react-sound';
import React, {useState} from 'react'
import Horn from '../chaos_sounds/bike_horn.mp3'

function PlaySound(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button onClick = {() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}
      </button>
      <Sound
        url={props.songPath}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED          
        }
        playFromPosition={10}
        loop = {true}/>
    </div>
  );
}
export default PlaySound;