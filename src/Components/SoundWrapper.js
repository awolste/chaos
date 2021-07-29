import React, { Component } from 'react'
import PlaySound from './PlaySound'

export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        return (
            <div>
                {
                    this.props.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                            key={index}
                            song={song}
                            volume={100}/>
                        )
                    })
                }
            </div>
        )
    }
}
