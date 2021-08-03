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
        setIsPlaying(true);
        props.onVolumeChange(props.song.title, newValue)
    };

    //as component did update
    useEffect(()=>{
        setValue(0)
    },[props.isMuted]);
    
    useEffect(()=>{
        setValue(props.volume)
    },[props.volume]);
    
    useEffect(()=>{
        if(props.play){setIsPlaying(true)}
    },[props.play]);

    return (
        <div>
            <div>
                {props.song.title}
            </div>

            <Sound
                url={props.song.path}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
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