import React, { Component } from 'react'
import PlaySound from './PlaySound'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            // is muted should be true while is playing is false on start
            isMuted:true,
            randomize:false,
            //playAll:true
        }
        this.muteHandler = this.muteHandler.bind(this)
        // this.playHandler = this.playHandler.bind(this)
        //this.randomize = this.randomize.bind(this)
    }

    muteHandler() {
        this.setState({
            isMuted: !this.state.isMuted
        });
    }
    
    // playHandler() {
    //     this.setState({
    //         playAll: true,
    //         isMuted: false
    //     });
    // }

    randomize = () => {
        this.setState({
            randomize: !this.state.randomize
        }, () => {
      });
    }
    
    render() {

        return (
            <div>
                {/* <button onClick={this.muteHandler}>Mute</button> */}
                {/* <button onClick={this.playHandler}>Play</button>  */}
                <button onClick = {(this.randomize)}>Randomize</button>
                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                            key={index}
                            song={song}
                            isMuted={this.state.isMuted}
                            // playAll={this.state.playAll}
                            randomize={this.state.randomize}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
