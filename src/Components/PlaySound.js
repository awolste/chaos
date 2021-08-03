import Sound from 'react-sound';
import React, {useState, useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

      const muiTheme = createMuiTheme({
        overrides:{
          MuiSlider: {
            thumb:{
            color: "#333",
            width: "30px",
            left: "5px",
            borderRadius: "25px"
            },
            track: {
              color: '#fff'
            },
            rail: {
              color: '#333'
            }
          }
      }
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
                <ThemeProvider theme={muiTheme}>
                    <Slider
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="vertical-slider"   
                    />
                </ThemeProvider>
                
            </div>
            <div>
                {props.song.title}
            </div>
        </div>
    );
} export default PlaySound;