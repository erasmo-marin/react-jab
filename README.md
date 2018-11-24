# Json App Builder

Json App Builder (JAB) is an open source library based on react, that makes possible to build an user interface and data flows only with a JSON configuration. Writing components that works with JAB is easy, because they are just react components. JAB can be used for web or react-native apps. JAB is opinionated, it uses `mobx` and `react-router`. If you are building a react-native app, then you have to use `react-router-native`, if you are building a web app, then use `react-router-dom`.

JAB works with a component registry. Every component you want to use in your project must be mapped in this registry in order to be loaded. Also, you need to declare a configuration object that describes your app routes, the components in the route, global components in the case they are route independent (like a navbar or a footer), and transitions, objects that describe a transition to another route.

Routes support parameters, and you can send parameters through transitions. Also, you can execute transitions from your components with the `executeTransition` function.



## Starting development server

Just run the example app built with create-react-app with:

```$ yarn start-example```



## Example configuration

```javascript
const config = {
	name:  "Hello World App",
	version: "1.0.0",
	title: "Hello World",
	routes: {
		"/": {
			id: "home",
			title: "Home",
			exact: true,
			components: {

			}
		},
		"/about": {
			id: "about",
			title: "About",
			components: {
				about: {
					id: "about",
					props: {
						style: {
							marginTop: "50px",
							padding: "2rem",
							color: "rgba(0,0,0,0.7)"
						}
					}
				}
			}
		},
		/*The default route when no match is found*/
		default: {
			id: "404",
			name: "Not found",
			title: "Not found",
			components: {
			}
		}
	},
	globals: {
		navbar: {
			id: "navbar",
			position: "top",
			props: {
				items: [{
					text: "Home",
					transition: "goHome"
				},{
					text: "About",
					transition: "goAbout"
				}]
			}
		},
		footer: {
			id: "footer",
			position: "bottom",
			props: {
				style: {
				}
			},
			children: {

			}
		}
	},
	transitions: {
		"goHome": {
			from: null,
			to: "home"
		},
		"goAbout": {
			from: null,
			to: "about"
		}
	}
}

export default config;
```



## Example initialization

```javascript
import React, { Component } from 'react';
import Core, { Registry } from "react-jab";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import About from "./about";
import config from "./config";
import "./style.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.registry = new Registry({
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
```
