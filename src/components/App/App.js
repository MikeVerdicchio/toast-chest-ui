import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Here's to friendship, here's to great times, and here's to when the Toast Chest isn't around.</p>
                </header>
            </div>
        );
    }
}
