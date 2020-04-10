import React, { Component } from 'react';
import './Toast.css';

export default class Toast extends Component {
    render() {
        return (
            <div>
                <p>{this.props.toast}</p>
            </div>
        );
    }
}
