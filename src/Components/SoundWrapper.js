import React, { Component } from 'react'
import Sound from './Sound'
import Crowd from '../chaos_sounds/crowd.mp3'
import Alarm from '../chaos_sounds/alarm.mp3'
import Horn from '../chaos_sounds/bike_horn.mp3'

export default class SoundWrapper extends Component {

    songs= [Crowd, Alarm, Horn]

    render() {
        return (
            <div>
            {
                this.songs.map((song,index)=>{
                    return (
                        <Sound 
                        key={index}
                        songPath={song}/>
                    )
                })
            }
        </div>
        )
    }
}
