import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    state = {
        toast: {}
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="row text-center">
                    <hr />
                    <h1>Toast Chest</h1>
                    <hr />
                    <p>Here's to friendship, here's to great times, and here's to when the Toast Chest isn't around.</p>
                </div>
            </header>
        </div>
    );
}

export default App;
