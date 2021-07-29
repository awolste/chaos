import React, { Component } from 'react'
import PlaySound from './PlaySound'
import Sound from 'react-sound'
import { useState } from 'react'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            isMuted:true,
            randomize:false
        }
        this.muteHandler = this.muteHandler.bind(this)
        this.randomize = this.randomize.bind(this)
    }

    muteHandler() {
        console.log("before: " + this.state.isMuted)
        this.setState({
            isMuted: !this.state.isMuted
        }, () => {
      });
    }

    randomize = () => {
        console.log('Randomize')
        this.setState({
            randomize: !this.state.randomize
        }, () => {
      });
    }
    
    render() {

        return (
            <div>
                 <button onClick = {(this.muteHandler)}>{this.state.isMuted ? "Mute" : "Unmute"}</button>
                 <button onClick = {(this.randomize)}>Randomize</button>
                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                            key={index}
                            song={song}
                            volume={100}
                            isMuted={this.state.isMuted}
                            randomize={this.state.randomize}/>
                        )
                    })
                }
            </div>
        )
    }
}
