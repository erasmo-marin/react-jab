import React from "react";

class About extends React.Component {

	render() {

		const { executeTransition, ...rest } = this.props;

		return (
			<div {...rest}>
				<p>
					Json App Builder (JAB) is a way to build apps, reusing code and saving time. Just
					imagine that you can build a website from a set of components just using a
					json configuration. All this is possible with JAB.
				</p>
				<p>
					Things that can be done with JAB: build your own wix, render different layouts based
					on user preferences, change the UI remotely without reloading, build a component
					library, etc.
				</p>
			</div>
		)
	}

}

export default About;