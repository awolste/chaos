import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import SoundWrapper from './Components/SoundWrapper.js';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'


import Alarm from './chaos_sounds/alarm.mp3'
import Horn from './chaos_sounds/bike_horn.mp3'
import Hammer from './chaos_sounds/jackhammers.mp3'
import Baby from './chaos_sounds/baby_crying.mp3'
import Bark from './chaos_sounds/bark.mp3'
import City from './chaos_sounds/chaos_city.mp3'
import Dolphin from './chaos_sounds/dolphins.mp3'
import Bees from './chaos_sounds/bees.mp3'

import Birds from './calm_sounds/birds_crickets.mp3'
import Fire from './calm_sounds/fire.mp3'
import Creek from './calm_sounds/creek.mp3'
import Ocean from './calm_sounds/ocean.mp3'
import Rain from './calm_sounds/rain.mp3'
import Rainforest from './calm_sounds/rainforest.mp3'
import Thunder from './calm_sounds/thunderstorm.mp3'
import Chimes from './calm_sounds/wind_chimes.mp3'

var chaos= [
  {title: "Alarm", path: Alarm},
  {title: "Bike Horn", path: Horn},
  {title: "Jackhammer", path: Hammer},
  {title: "Baby Crying", path: Baby},
  {title: "Dog Barking", path: Bark},
  {title: "City", path: City},
  {title: "Dolphins", path: Dolphin},
  {title: "Bees", path: Bees}]

var calm= [
  {title: "Birds", path: Birds},
  {title: "Fire", path: Fire},
  {title: "Running Creek", path: Creek},
  {title: "Waves", path: Ocean},
  {title: "Rain", path: Rain},
  {title: "Rainforest", path: Rainforest},
  {title: "Thunder", path: Thunder},
  {title: "Wind Chimes", path: Chimes}]

    var calmStyles= {
        background : "backgroundCalm",
    }

    var chaosStyles= {
        background : "backgroundChaos",
    }

const routing = (
    <Router>
            <div>
                <Route exact path="/">
                    <Redirect to="/calm" from="/" />
                </Route>
                <Route
                    exact path='/calm'
                    render={(props)=>(
                        <SoundWrapper {...props} songs={calm} styles={calmStyles} redirectPath={"/chaos"}/>
                    )}
                />	  
                <Route
                    exact path='/calm/:id'
                    render={(props)=>(
                        <SoundWrapper {...props} songs={calm} styles={calmStyles} redirectPath={"/chaos"}/>
                    )}
                />
                <Route
                    exact path='/chaos'
                    render={(props)=>(
                        <SoundWrapper {...props} songs={chaos} styles={chaosStyles} redirectPath={"/calm"}/>
                    )}
                />
                <Route
                    exact path='/chaos/:id'
                    render={(props)=>(
                        <SoundWrapper {...props} songs={chaos} styles={chaosStyles} redirectPath={"/calm"}/>
                    )}
                />
            </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
