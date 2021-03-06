import React, { Component } from 'react';
import Core, { Registry } from './lib';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/globals/navbar';
import Footer from './components/globals/footer';
import About from './components/pages/about';
import Home from './components/pages/home';
import Card from './components/card';
import config from './config';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.registry = new Registry({
            navbar: Navbar,
            footer: Footer,
            about: About,
            home: Home,
            card: Card,
        });
    }

    render() {
        return <Core registry={this.registry} config={config} router={BrowserRouter} />;
    }
}

export default App;
