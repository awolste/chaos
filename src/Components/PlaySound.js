import Sound from 'react-sound';
import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

function PlaySound(props) {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setIsPlaying(true)
    };

    // // as component did mount
    // useEffect(()=>{
    //    setIsPlaying(!isPlaying)
    // },[props.setIntitialPlay]);

    // //as component did update
    // useEffect(()=>{
    //     setValue(Math.random() * 100)
    // },[props.randomize]);
    
    // how to only call this when the button is pressed
    // //as component did update
    // useEffect(()=>{
    //     setValue(0)
    // },[props.mute]);

    return (
        <div>
            <div>
                {props.song.title}
            </div>

            <Sound
                url={props.song.path}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={10}
                volume={value}
                loop = {true}
                //autoLoad={true}
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