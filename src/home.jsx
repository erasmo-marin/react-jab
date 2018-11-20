import React from "react";

class Home extends React.Component {

	render() {

		const { executeTransition, ...rest } = this.props;

		return (
			<div {...rest} className="container">
				<p>Json App Builder (JAB) is an open source library based on react,
				that makes possible to build an user interface and data flows only
				with a JSON configuration. Writing components that works with JAB
				is easy, because they are just react components. JAB can be used
				for web or react-native apps. JAB is opinionated, it uses `mobx`
				and `react-router`. If you are building a react-native app, then
				you have to use `react-router-native`, if you are building a web app,
				then use `react-router-dom`.</p>

				<p>JAB works with a component registry. Every component you want to use
				in your project must be mapped in this registry in order to be loaded. 
				Also, you need to declare a configuration object that describes your app
				routes, the components in the route, global components in the case they
				are route independent (like a navbar or a footer), and transitions,
				objects that describe a transition to another route.</p>

				<p>Routes support parameters, and you can send parameters through transitions.
				Also, you can execute transitions from your components with the `executeTransition`
				function.</p>
			</div>
		)
	}
}

export default Home;