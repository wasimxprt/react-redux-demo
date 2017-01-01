import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}