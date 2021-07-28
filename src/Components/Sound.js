import Sound from 'react-sound';
import React, {useState} from 'react'

function PlaySound(props) {
  // need hook for volume
  const [currVolume, setCurrVolume] = useState(props.volume)
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button onClick = {() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play' : 'Stop'} {props.song.title}
      </button>
      <Sound
        url={props.song.path}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED          
        }
        playFromPosition={10}
        volume={currVolume}
        loop = {true}/>
    </div>
  );
}
export default PlaySound;