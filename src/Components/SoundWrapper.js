import React, { Component } from 'react'
import PlaySound from './PlaySound'
import Sound from 'react-sound';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            // is muted should be true while is playing is false on start
            setIntitialPlay:false,
            playSounds:false,
            isPlaying:false,
            
        }
        this.initHandler = this.initHandler.bind(this)
        this.playSounds = this.playSounds.bind(this)
        this.mute = this.mute.bind(this)
        this.handleVolume = this.handleVolume.bind(this)
    }

    componentDidMount(){
        this.props.songs.map((song) =>{
            this.setState({
                [song.title]: 0
            })
        })
    }

    initHandler() {
        this.setState({
            setIntitialPlay: !this.state.setIntitialPlay
        });
    }

    playSounds () {
        this.props.songs.map((song, index) =>{
            this.setState({
                [song.title]: 0
            });
        })
        this.setState({
            isPlaying: true
        });
    }

    handleVolume(volume){
        this.props.songs.map((song) =>{
            this.setState({
                [song.title]: volume
            });
        })
    }

    handleChange = (event, newValue) => {
        console.log("EVENT: " + event.target.id + "    " + "NEWVAL: " + newValue)
        this.setState({
            [event.target.id]: newValue
        });
    };

    mute(){
        this.setState({
            mute: !this.state.mute
        });
    }
    
    render() {

        return (
            <div>
                <button onClick={this.mute}>Mute</button>
                <button onClick = {this.playSounds}>Play</button>

                {
                    this.props.songs.map((song,index)=>{
                        let volume = this.state[song.title]
                        return (
                            <div>
                                <div>
                                    {song.title}
                                </div>

                                <Sound
                                    url={song.path}
                                    playStatus={this.state.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                                    playFromPosition={10}
                                    volume={this.state[song.title]}
                                    loop = {true}
                                    //autoLoad={true}
                                />

                                <Grid container spacing={2}>
                                    <Grid item>
                                        <VolumeDown />
                                    </Grid>
                                    <Grid item xs>
                                        <Slider id={song.title} value={this.state[song.title]} onChange={this.handleChange} aria-labelledby="continuous-slider" />
                                    </Grid>
                                    <Grid item>
                                        <VolumeUp />
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
