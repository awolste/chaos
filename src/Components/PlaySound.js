import Sound from 'react-sound';
import React, {useState, useEffect} from 'react';

function PlaySound(props) {
    
    const [isPlaying, setIsPlaying] = useState(false);

    const handleChange = (event, newValue) => {
        setIsPlaying(true)
    };

    return (
        <div>
            <div>
                {props.song.title}
            </div>

            <Sound
                url={props.song.path}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={10}
                volume={props.volume}
                loop = {true}
                //autoLoad={true}
            />
            
    
        </div>
    );
} export default PlaySound;