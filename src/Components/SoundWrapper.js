import React, { Component } from 'react'
import Crowd from '../chaos_sounds/crowd.mp3'
import Alarm from '../chaos_sounds/alarm.mp3'
import Horn from '../chaos_sounds/bike_horn.mp3'
import Hammer from '../chaos_sounds/jackhammers.mp3'
import Cat from '../chaos_sounds/cat_meow.mp3'
import PlaySound from './Sound'

export default class SoundWrapper extends Component {

    songs= [
        {title: "Crowd", path: Crowd},
        {title: "Alarm", path: Alarm},
        {title: "Horn", path: Horn},
        {title: "Hammer", path: Hammer},
        {title: "Cat", path: Cat},
    ]

    render() {
        return (
            <div>
                {
                    this.songs.map((song,index)=>{
                        return (
                            <PlaySound 
                            key={index}
                            song={song}
                            volume={10}/>
                        )
                    })
                }
            </div>
        )
    }
}
