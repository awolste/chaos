import Sound from 'react-sound';
import React, {useState, useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';


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

    const useStyles = makeStyles({
        root: {
            height: 300,
            padding: "4vw",
            width: "14px !important",
            trackColor: "#333"
        },
      });

    const classes = useStyles();

    return (
        <div className="song">
            

            <Sound
                url={props.song.path}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                volume={value}
                loop = {true}
                //autoLoad={true}
            />
            
            <div className={classes.root}>
                {/* <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" /> */}
                <Slider
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-labelledby="vertical-slider"   
                />
            </div>
            <div>
                {props.song.title}
            </div>
        </div>
    );
} export default PlaySound;