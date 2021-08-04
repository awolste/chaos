import React, { Component } from 'react'
import axios from 'axios'
import PlaySound from './PlaySound'
import { Link } from 'react-router-dom'
import toast,{ Toaster } from 'react-hot-toast'
import Header from './Header'
export default class SoundWrapper extends Component {

    constructor(props){
        super(props)
        this.state={
            // is muted should be true while is playing is false on start
            isMuted:true,
            play:false,
            settingsId: this.props.match.params.id
        }
        // this.randomize = this.randomize.bind(this)
        this.mute = this.mute.bind(this)
        this.randomize = this.randomize.bind(this)
        this.setToPlaying = this.setToPlaying.bind(this)
        this.onVolumeChange = this.onVolumeChange.bind(this)
        this.saveSettings = this.saveSettings.bind(this)
        this.seeIfMuted = this.seeIfMuted.bind(this)
        this.seeIfPlaying = this.seeIfPlaying.bind(this)
    }

    randomize(){
        this.props.songs.forEach(song => {
            this.setState({
                [song.title]: Math.random()*100
            })
        });
    }

    componentDidMount(){
        if (this.props.match.params.id !== undefined){
            axios.get(`https://blooming-sands-86661.herokuapp.com/settings/${this.props.match.params.id}`)
            .then(res => {
                this.props.songs.forEach((song, index) => {
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

    setToPlaying(){
        this.setState({
            play: true
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
        axios.post(`https://blooming-sands-86661.herokuapp.com/create`, {
            volumes: volArr
        })
            .then(res => {
                // need to remove id if url has an id already
                // window.location.origin + /chaos 
                console.log("in here" + navigator.clipboard)
                navigator.clipboard.writeText(window.location.origin + this.props.currPath +"/"+ res.data)  
                toast.success('Sharable link copied to clipboard!',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            })
    }

    seeIfMuted(){
        let muted = true
        this.props.songs.map((song,index)=>{
            if(this.state[song.title] > 0)
                muted = false
        })
        if (!muted){
            return <div id="bars">
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                    <div className={this.props.styles["bar"]}></div>
                </div>
        }
        
    }
    seeIfPlaying(){
        if (!this.state.play && this.props.match.params.id !== undefined){
            return (
                <div className="overlay">
                    <button className="playButton" onClick={this.setToPlaying}></button>
                </div>
            )
            
        }
    }
    
    render() {

        return (
            // accessing a style in this format
            <div className={this.props.styles["background"]}>
                <div><Toaster/></div>
                <Header/>
                <div className="elementBox">
                    {this.seeIfMuted()}
                </div>
                {this.seeIfPlaying()}

                <div className="buttonBox">
                    <div className="buttonText">
                        C{this.props.redirectPath.substring(2)} Mode
                    </div>
                    <Link className=" musicButton buttonLink" to={this.props.redirectPath}></Link>
                </div>
                <div className="buttonBox2">
                    <div className="buttonText">
                        Mute
                    </div>
                    <button className="musicButton" onClick={this.mute}></button>
                </div>
                {/* <div className="buttonBox4">
                    <div className="buttonText">
                        Randomize
                    </div>
                    <button className="musicButton" onClick={this.randomize}></button>
                </div> */}
                <div className="buttonBox3">
                    <div className="buttonText">
                        Share
                    </div>
                    <button className="musicButton" onClick={this.saveSettings}></button>
                </div>
            
                <div className="songs">
                    {
                        this.props.songs.map((song,index)=>{
                            return (
                                <PlaySound 
                                    key={index}
                                    song={song}
                                    volume={this.state[song.title]}
                                    // random={this.state.random}
                                    isMuted={this.state.isMuted}
                                    play={this.state.play}
                                    onVolumeChange={this.onVolumeChange}
                                />
                            )
                        })
                    }
                </div>
                <div className="footer">Sounds from Zapsplat.com | Made with &#9829; by Cassiopeia</div>
            </div>
        )
    }
}
