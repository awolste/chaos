import React, { Component } from 'react'
import axios from 'axios'
import PlaySound from './PlaySound'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import toast,{ Toaster } from 'react-hot-toast'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            // is muted should be true while is playing is false on start
            random:false,
            isMuted:true,
        }
        // this.randomize = this.randomize.bind(this)
        this.mute = this.mute.bind(this)
        this.onVolumeChange = this.onVolumeChange.bind(this)
        this.saveSettings = this.saveSettings.bind(this)
    }

    // randomize () {
    //     this.setState({
    //         random: !this.state.random
    //     });
    // }

    componentDidMount(){
        this.props.songs.forEach(song => {
            this.setState({
                [song.title]: 0
            })
        });
        console.log(this.props.styles["background"])
    }

    mute(){
        this.setState({
            isMuted: !this.state.isMuted
        });
        this.props.songs.forEach(song => {
            this.setState({
                [song.title]: 0
            })
        });
    }

    onVolumeChange(event, newVol) {
        console.log("EVENT: " + event + "   NEWVAL: " + newVol)
            this.setState({
                [event]: newVol
            });
    }

    saveSettings(){
        let volArr = []
        this.props.songs.forEach(song => {
            volArr.push(this.state[song.title])
        })

        axios.post(`http://blooming-sands-86661.herokuapp.com/create`, volArr)
            .then(res => {
                // need to remove id if url has an id already
                // window.location.origin + /chaos 
                navigator.clipboard.writeText(window.location.origin + this.props.currPath +"/"+ res.data)  
                toast.success('Sharable link copied to clipboard!',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            })
    }
    
    render() {

        return (
            // accessing a style in this format
            <div className={this.props.styles["background"]}>
                <div><Toaster/></div>
                <button className="muteButton" onClick={this.mute}>Mute</button>
                <button className = "saveButton" onClick={this.saveSettings}>Test Save</button>
                <button className="switchButton"><Link className="buttonLink" to={this.props.redirectPath}>C{(this.props.redirectPath).substring(2)} Mode</Link></button>
                {/* <button onClick = {(this.randomize)}>Randomize</button> */}

                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                                key={index}
                                song={song}
                                // random={this.state.random}
                                isMuted={this.state.isMuted}
                                onVolumeChange={this.onVolumeChange}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
