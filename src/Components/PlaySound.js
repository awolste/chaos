import Sound from 'react-sound';
import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

function PlaySound(props) {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [value, setValue] = useState(0);
    //is there a way to trigger a fucntion if a prop changes

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log("VALUE: " + value)
    };

    useEffect(()=>{
        setIsPlaying(!isPlaying)
        console.log("*********" + isPlaying)
    },[props.isMuted]);

    // useEffect(()=>{
    //     setIsPlaying(true)
    // },[props.playAll]);
    
    // useEffect(()=>{
    //     setValue(Math.random() * 100)
    //     console.log("randomize")
    // },[props.randomize]);

    return (
        <div>
            {/* {console.log("entering sound component" + props.isMuted)}
            <button onClick = {() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? 'Play' : 'Stop'} {props.song.title}
            </button> */}
            <div>{props.song.title}</div>

            <Sound
                url={props.song.path}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={10}
                volume={value}
                loop = {true}
            />
            
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
        </div>
    );
} export default PlaySound;