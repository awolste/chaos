import React, { Component } from 'react'
import PlaySound from './PlaySound'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            // is muted should be true while is playing is false on start
            setIntitialPlay:false,
            randomize:false,
            mute:false,
        }
        this.initHandler = this.initHandler.bind(this)
        this.randomize = this.randomize.bind(this)
        this.mute = this.mute.bind(this)
    }

    initHandler() {
        this.setState({
            setIntitialPlay: !this.state.setIntitialPlay
        });
    }

    randomize () {
        this.setState({
            randomize: !this.state.randomize
        });
    }

    mute(){
        this.setState({
            mute: !this.state.mute
        });
    }
    
    render() {

        return (
            <div>
                <button onClick={this.mute}>Mute</button>
                <button onClick = {(this.randomize)}>Randomize</button>

                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                                key={index}
                                song={song}
                                setIntitialPlay={this.state.setIntitialPlay}
                                randomize={this.state.randomize}
                                mute={this.state.mute}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
