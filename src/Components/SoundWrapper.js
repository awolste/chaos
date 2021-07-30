import React, { Component } from 'react'
import PlaySound from './PlaySound'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            isMuted:false,
            //randomize:false,
            //playAll:false
        }
        this.muteHandler = this.muteHandler.bind(this)
        //this.playHandler = this.playHandler.bind(this)
        //this.randomize = this.randomize.bind(this)
    }

    muteHandler() {
        this.setState({
            isMuted: !this.state.isMuted
        }, () => {
      });
    }
    
    // playHandler() {
    //     this.setState({
    //         playAll: !this.state.playAll
    //     }, () => { 
    //   });
    // }

    // randomize = () => {
    //     this.setState({
    //         randomize: !this.state.randomize
    //     }, () => {
    //   });
    // }
    
    render() {

        return (
            <div>
                <button onClick = {(this.muteHandler)}>{this.state.isMuted ? "Play" : "Mute"}</button>
                 {/* <button onClick = {(this.playHandler)}>Play</button> */}
                 {/* <button onClick = {(this.randomize)}>Randomize</button> */}
                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                            key={index}
                            song={song}
                            volume={100}
                            isMuted={this.state.isMuted}
                            // playAll={this.state.playAll}
                            randomize={this.state.randomize}/>
                        )
                    })
                }
            </div>
        )
    }
}
