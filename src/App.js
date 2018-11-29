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
import { Grid, Container } from "semantic-ui-react";
import forEach from "lodash/forEach";
import get from "lodash/get";

class App extends Component {
    constructor(props) {
        super(props);
        this.registry = new Registry({
            navbar: Navbar,
            footer: Footer,
            about: About,
            home: Home,
            card: Card,
            grid: Grid,
            "grid.column": Grid.Column,
            "grid.row": Grid.Row,
            container: Container
        });
    }

    updateComponentDeep(components) {

        if(!components)
            return;

        forEach(components, component => {
            this.updateComponentDeep(get(component, "components"));
            const getProps = get(component, "ref.ComponentRef.getConfigurableProps", false);
            if(getProps) {
                component.props = {
                    ...component.props,
                    ...getProps()
                };
            }
        });
    }

    getUpdatedConfig = () => {
        this.updateComponentDeep(config.routes);
        this.updateComponentDeep(config.globals);
        return config;
    }

    render() {
        return <Core registry={this.registry} config={config} router={BrowserRouter} />;
    }
}

export default App;
