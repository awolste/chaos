import useSound from 'use-sound';
import React, {useState} from 'react'
import crowd from '../chaos_sounds/crowd.mp3'


export default function Sound(props) {

    const [playing, setPlaying] = useState(false);
    const [song, setSong] = useState('');
    const [play, {stop}] = useSound(song);

    return (
        <div>
            <button onMouseDown={() => setSong(crowd)} onClick={()=> {
                    playing ? stop() : play();
                    setPlaying(!playing);
                    console.log("in here")
                    console.log (playing)
                    console.log (song)
                }}>Toggle noise
            </button>
        </div>
    )
}
