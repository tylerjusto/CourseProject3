import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import request from 'superagent';
import { TemperatureConverter } from 'cis137-components';
import './App.css';
import Home from './Home';
import About from './About';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerMinimized: false,
            temperature: null
        };
    }

    componentDidMount(){
        setInterval(
            this.updateTemperature,
            60 * 1000
        );
        this.updateTemperature();
    }

    updateTemperature() {
        const appKey = process.env.REACT_APP_WEATHER_KEY
        request
            .get(`http://api.openweathermap.org/data/2.5/weather?zip=21158,us&appid=${appKey}`)
            .end((err, resp) => {
                if (err) {
                    console.error(err);
                    return;
                }


                this.setState({
                    temperature: resp.body.main.temp
                });
            });
    }

    minimizeHeader = () => {
        this.setState({
            headerMinimized: !this.state.headerMinimized
        });
    };

    render() {
        let {headerMinimized} = this.state;
        return (
            <BrowserRouter>
                <div>
                    <div className={`App-hero ${headerMinimized ? 'minimized' : ''}`}>
                        <header onClick={this.minimizeHeader}>
                            <Link to="/"><h1>Tanning Oasis</h1></Link>
                        </header>
                        <nav>
                            <Link to="/">Home</Link> |
                            <Link to="/About">About</Link> |
                            <Link to="/Events">Events</Link>
                        </nav>
                    </div>
                    <TemperatureConverter kelvin={this.state.temperature} toUnit="F" prefix="The current temperature is: " />

                    <Route path="/" exact component={Home}/>
                    <Route path="/About" exact component={About}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
