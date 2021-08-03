import React, { Component } from 'react'
import axios from 'axios'
import PlaySound from './PlaySound'
import { Link } from 'react-router-dom'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            // is muted should be true while is playing is false on start
            random:false,
            isMuted:true,
            settingsId: this.props.match.params.id
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
        
        console.log(this.props.match.params.id)
        if (this.props.match.params.id !== undefined){
            axios.get(`https://blooming-sands-86661.herokuapp.com/settings/${this.props.match.params.id}`)
            .then(res => {
                this.props.songs.forEach((song, index) => {
                    console.log(res.data[index])
                    this.setState({
                        [song.title]: res.data[index]
                    })
                }); 
            })
        }
        else{
            this.props.songs.forEach(song => {
                this.setState({
                    [song.title]: 0
                })
            });
        }
        
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
        console.log("HERE " + typeof volArr)
        axios.post(`https://blooming-sands-86661.herokuapp.com/create`, {
            volumes: volArr
        })
            .then(res => {
                    console.log("Copied! "+window.location.href +"/"+ res.data)
                    navigator.clipboard.writeText(window.location.href +"/"+ res.data)  
            })
    }
    
    render() {

        return (
            // accessing a style in this format
            <div className={this.props.styles["background"]}>
                <button onClick={this.mute}>Mute</button>
                <button onClick={this.saveSettings}>Test Save</button>
                <button><Link to={this.props.redirectPath}>Change Route to {this.props.redirectPath}</Link></button>
                {/* <button onClick = {(this.randomize)}>Randomize</button> */}

                {
                    this.props.songs.map((song,index)=>{
                        console.log("HERE " + this.state[song.title])
                        return (
                            <PlaySound 
                                key={index}
                                song={song}
                                volume={this.state[song.title]}
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
