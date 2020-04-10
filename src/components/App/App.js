import React, { Component } from 'react';
import { TOAST_CHEST_RANDOM, DEFAULT_TOAST } from '../../constants';

import logo from './logo.svg';
import './App.css';
import Toast from '../Toast';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = { toast: null };
    }

    async handleButtonClick() {
        const toast = await this.getToast();
        this.setState({ toast: toast });
    }

    async getToast() {
        const resp = await fetch(TOAST_CHEST_RANDOM);
        const data = await resp.json();
        return data.toast;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Toast toast={this.state.toast ? this.state.toast : DEFAULT_TOAST} />
                    <button onClick={this.handleButtonClick}>
                        {this.state.toast ? "Another!" : "Generate a toast!"}
                    </button>
                </header>
            </div>
        );
    }
}
