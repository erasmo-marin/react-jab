import React, { Component } from 'react';
import Core, { Registry } from "./lib";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import config from "./config";
import "./style.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.registry = new Registry({
      "home": Home,
      "navbar": Navbar,
      "footer": Footer,
      "about": About
    });
  }

  render() {
    return <Core registry={this.registry} config={config} router={BrowserRouter}/>
  }
}

export default App;
