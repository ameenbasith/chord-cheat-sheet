import './App.css';
import {Component} from "react";

import A from "./audio/a.mp3";
import Amaj7 from "./audio/amaj7.mp3";
import Am from "./audio/am.mp3";
import Amin7 from "./audio/amin7.mp3";
import B from "./audio/b.mp3";
import Bmaj7 from "./audio/bmaj7.mp3";
import Bm from "./audio/bm.mp3";
import Bmin7 from "./audio/bmin7.mp3";
import C from "./audio/c.mp3";
import Cmaj7 from "./audio/cmaj7.mp3";
import Cm from "./audio/cm.mp3";
import Cmin7 from "./audio/cmin7.mp3";
import Cshmin7 from "./audio/cSHmin7.mp3";
import D from "./audio/d.mp3";
import Dmaj7 from "./audio/dmaj7.mp3";
import Dm from "./audio/dm.mp3";
import Dmin7 from "./audio/dmin7.mp3";
import E from "./audio/e.mp3";
import Emaj7 from "./audio/emaj7.mp3";
import Edom7 from "./audio/edom7.mp3";
import Em from "./audio/em.mp3";
import Emin7 from "./audio/emin7.mp3";
import F from "./audio/f.mp3";
import Fmaj7 from "./audio/fmaj7.mp3";
import Fm from "./audio/fm.mp3";
import Fmin7 from "./audio/fmin7.mp3";
import Fshmin7 from "./audio/fSHmin7.mp3";
import G from "./audio/g.mp3";
import Gmaj7 from "./audio/gmaj7.mp3";
import Gm from "./audio/gm.mp3";
import Gmin7 from "./audio/gmin7.mp3";

import {Howl, Howler} from "howler";
import React, {useState} from "react";
import styled from "styled-components";
import useLocalStorage from 'use-local-storage';
import './index.css';

const Button = styled.button`
  background-color: black;
  color: whitesmoke;
  padding: 5px 15.18px;
  border-radius: 10px;
  outline: 0;
  margin: 0px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px grey;
  transition: ease background-color 150ms;

  &:hover {
    background-color: gray;
  }
`;

const Tab = styled.button`
  padding: 5px 15px;
  cursor: pointer;
  opacity: 0.6;
  background: black;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({active}) =>
          active && `   
    border-bottom: 2px solid black;
    opacity: 1;
    `}
`;

const types = [
    'A Major', 'A Minor', 'A flat Major', 'A flat Minor',
    'B Major', 'B Minor', 'B flat Major', 'B flat Minor',
    'C Major', 'C Minor', 'C# Minor',
    'D Major', 'D Minor', 'D flat Major', 'D sharp Minor',
    'E Major', 'E Minor', 'E flat Major',
    'F Major', 'F Minor', 'F# Major', 'F# Minor',
    'G Major', 'G Minor'
];

const audioClips = [
    {sound: A, label: 'A'},
    {sound: Amaj7, label: 'Amaj7'},
    {sound: Am, label: 'Am'},
    {sound: Amin7, label: 'Amin7'},
    {sound: B, label: 'B'},
    {sound: Bmaj7, label: 'Bmaj7'},
    {sound: Bm, label: 'Bm'},
    {sound: Bmin7, label: 'Bmin7'},
    {sound: C, label: 'C'},
    {sound: Cmaj7, label: 'Cmaj7'},
    {sound: Cm, label: 'Cm'},
    {sound: Cmin7, label: 'Cmin7'},
    {sound: Cshmin7, label: 'C#min7'},
    {sound: D, label: 'D'},
    {sound: Dmaj7, label: 'Dmaj7'},
    {sound: Dm, label: 'Dm'},
    {sound: Dmin7, label: 'Dmin7'},
    {sound: E, label: 'E'},
    {sound: Emaj7, label: 'Emaj7'},
    {sound: Edom7, label: 'Edom7'},
    {sound: Em, label: 'Em'},
    {sound: Emin7, label: 'Emin7'},
    {sound: F, label: 'F'},
    {sound: Fmaj7, label: 'Fmaj7'},
    {sound: Fm, label: 'Fm'},
    {sound: Fmin7, label: 'Fmin7'},
    {sound: Fshmin7, label: 'F#min7'},
    {sound: G, label: 'G'},
    {sound: Gmaj7, label: 'Gmaj7'},
    {sound: Gm, label: 'Gm'},
    {sound: Gmin7, label: 'Gmin7'},
]

function Theme() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    return (
        <div className="app" data-theme={theme}>
            <div className='main'>
                <h1> Chord Sheet</h1>
                <div className='container'>
                    <div className='top'>
                        <TabGroup/>
                    </div>
                    <p className='divider'/>
                </div>
                <div className='theme-toggle'>
                    <h2>Switch Theme</h2>
                    <i onClick={switchTheme} className='fas fa-question-circle'/>
                </div>
            </div>
        </div>
    );
}

function TabGroup() {
    const [active, setActive] = useState(types[0]);

    return (
        <>
            <div>
                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                ))}
            </div>
            <p/>
            <p> Selected Key: {active} </p>
            {active === types[0] && <a href="https://www.piano-keyboard-guide.com/key-of-a.html" target="_blank">
                Joyful, Pastoral, Declaration of Love </a>}
            {active === types[1] && <a href="https://www.piano-keyboard-guide.com/key-of-a-minor.html" target="_blank">
                Tender, Plaintive, Pious </a>}
            {active === types[2] && <a href="https://www.piano-keyboard-guide.com/key-of-a-flat.html" target="_blank">
                Death, Eternity, Judgement</a>}
            {active === types[3] &&
                <a href="https://www.piano-keyboard-guide.com/key-of-a-flat-minor.html" target="_blank">
                    Grumbling, Moaning, Wailing</a>}

            {active === types[4] && <a href="https://www.piano-keyboard-guide.com/key-of-b.html" target="_blank">
                Harsh, Strong, Wild, Rage</a>}
            {active === types[5] && <a href="https://www.piano-keyboard-guide.com/key-of-b-minor.html" target="_blank">
                Solitary, Melancholic, Patience</a>}
            {active === types[6] && <a href="https://www.piano-keyboard-guide.com/key-of-b-flat.html" target="_blank">
                Joyful, Quaint, Cheerful</a>}
            {active === types[7] &&
                <a href="https://www.piano-keyboard-guide.com/key-of-b-flat-minor.html" target="_blank">
                    Terrible, the Night, Mocking</a>}

            {active === types[8] && <a href="https://www.piano-keyboard-guide.com/key-of-c.html" target="_blank">
                Innocently Happy</a>}
            {active === types[9] && <a href="https://www.piano-keyboard-guide.com/key-of-c-minor.html" target="_blank">
                Innocently Sad, Love-Sick</a>}
            {active === types[10] &&
                <a href="https://www.piano-keyboard-guide.com/key-of-c-sharp-minor.html" target="_blank">
                    Despair, Wailing, Weeping</a>}

            {active === types[11] && <a href="https://www.piano-keyboard-guide.com/key-of-d.html" target="_blank">
                Triumphant, Victorious War-Cries</a>}
            {active === types[12] && <a href="https://www.piano-keyboard-guide.com/key-of-d-minor.html" target="_blank">
                Serious, Pious, Ruminating</a>}
            {active === types[13] && <a href="https://www.piano-keyboard-guide.com/key-of-d-flat.html" target="_blank">
                Grief, Depressive</a>}
            {active === types[14] &&
                <a href="https://www.piano-keyboard-guide.com/key-of-d-sharp-minor.html" target="_blank">
                    Deep Distress, Existential Angst</a>}

            {active === types[15] && <a href="https://www.piano-keyboard-guide.com/key-of-e.html" target="_blank">
                Quarrelsome, Boisterous, Incomplete Pleasure</a>}
            {active === types[16] && <a href="https://www.piano-keyboard-guide.com/key-of-e-minor.html" target="_blank">
                Effeminate, Amorous, Restless</a>}
            {active === types[17] && <a href="https://www.piano-keyboard-guide.com/key-of-e-flat.html" target="_blank">
                Cruel, Hard, Yet Full of Devotion</a>}

            {active === types[18] && <a href="https://www.piano-keyboard-guide.com/key-of-f.html" target="_blank">
                Furious, Quick-Tempered, Passing Regret</a>}
            {active === types[19] && <a href="https://www.piano-keyboard-guide.com/key-of-f-minor.html" target="_blank">
                Obscure, Plaintive, Funereal</a>}
            {active === types[20] && <a href="https://www.piano-keyboard-guide.com/key-of-f-sharp.html" target="_blank">
                Conquering Difficulties, Sighs of Relief</a>}
            {active === types[21] &&
                <a href="https://www.piano-keyboard-guide.com/key-of-f-sharp-minor.html" target="_blank">
                    Gloomy, Passionate Resentment</a>}

            {active === types[22] && <a href="https://www.piano-keyboard-guide.com/key-of-g.html" target="_blank">
                Serious, Magnificent, Fantasy</a>}
            {active === types[23] && <a href="https://www.piano-keyboard-guide.com/key-of-g-minor.html" target="_blank">
                Discontent, Uneasiness</a>}
        </>);
}

export default class App extends Component {
    SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    RenderButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
            return (
                <Button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                    {soundObj.label}
                </Button>
            )
        })
    }

    render() {
        Howler.volume(0.5);
        return (
            <React.Fragment>
                <div className="chords" data-theme={this.theme}>
                    {this.RenderButtonAndSound()}
                </div>
                <Theme/>
            </React.Fragment>
        );
    }
}
