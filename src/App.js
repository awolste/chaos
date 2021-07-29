import './App.css';
import SoundWrapper from './Components/SoundWrapper.js';

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

function App() {

    var chaos= [
        //insert others here
        {title: "Alarm", path: Alarm},
        {title: "Bike Horn", path: Horn},
        {title: "Jackhammer", path: Hammer},
        {title: "Baby Crying", path: Baby},
        {title: "Dog Barking", path: Bark},
        {title: "City", path: City},
        {title: "Dolphins", path: Dolphin},
        {title: "Bees", path: Bees},
    ]

    var calm= [
        {title: "Birds", path: Birds},
        {title: "Fire", path: Fire},
        {title: "Running Creek", path: Creek},
        {title: "Waves", path: Ocean},
        {title: "Rain", path: Rain},
        {title: "Rainforest", path: Rainforest},
        {title: "Thunder", path: Thunder},
        {title: "Wind Chimes", path: Chimes},
    ]

    return (
        <div>
            <h1>Chaos</h1>
            <SoundWrapper songs={chaos}/>
            <h1>Calm</h1>
            <SoundWrapper songs={calm}/>
        </div>
  );
}

export default App;
