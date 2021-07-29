import React, { Component } from 'react'
import PlaySound from './PlaySound'
import Sound from 'react-sound'
import { useState } from 'react'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={isMuted:true}
        this.muteHandler = this.muteHandler.bind(this)
    }

    muteHandler() {
        console.log("before: " + this.state.isMuted)
        this.setState({
            isMuted: !this.state.isMuted
        }, () => {
      }); 
      console.log("exit: " + this.state.isMuted)
    }
    
    render() {

        return (
            <div>
                 <button onClick = {(this.muteHandler)}>mute</button>
                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                            key={index}
                            song={song}
                            volume={100}
                            isMuted={this.state.isMuted}/>
                        )
                    })
                }
            </div>
        )
    }
}
