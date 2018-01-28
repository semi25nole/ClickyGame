import React, {Component} from 'react';
import './App.css';
import logo1 from './alabama.png';
import logo2 from './auburn.png';
import logo3 from './bethune.png';
import logo4 from './ecu.png';
import logo5 from './fau.png';
import logo6 from './fsu.jpg';
import logo7 from './vomit.png';
import logo8 from './iowa.png';
import logo9 from './nebraska.png';
import logo10 from './ou.png';
import logo11 from './pennst.jpg';
import logo12 from './texas.png';


class App extends Component {
    render() {
        return (
            <div class="container">
                <header>
                    <h1>Clicky Game</h1>
                </header>
                <div id="head">
                    <p class="text-center">How good is your memory? Click to find out! Don't click the same image twice!!</p>
                    <p id="count" class="text-center"></p>
                </div>
                <div class="jumbotron">
                    <img src={logo1} alt=""/><img src={logo2} alt=""/><img src={logo3} alt=""/><img src={logo4} alt=""/><img
                    src={logo5} alt=""/>
                    <img src={logo6} alt=""/><img src={logo7} alt=""/><img src={logo8} alt=""/><img src={logo9} alt=""/><img
                    src={logo10} alt=""/>
                    <img src={logo11} alt=""/><img src={logo12} alt=""/>
                </div>
            </div>
        );
    }
}

export default App;
