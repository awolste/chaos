import React, { Component } from 'react'
import PlaySound from './PlaySound'
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
    }

    // randomize () {
    //     this.setState({
    //         random: !this.state.random
    //     });
    // }

    mute(){
        this.setState({
            isMuted: !this.state.isMuted
        });
    }

    onVolumeChange(event, newVol) {
        console.log("EVENT: " + event.target.id + "   NEWVAL: " + newVol)
    }
    
    render() {

        return (
            <div>
                <button onClick={this.mute}>Mute</button>
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
