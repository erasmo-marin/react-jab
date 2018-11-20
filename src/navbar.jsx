import React from "react";
import map from "lodash/map";

class Navbar extends React.Component {

	goTo = transition => {
		this.props.executeTransition(transition);
	}

	render() {

		const { executeTransition, items, ...rest } = this.props;

		return (
			<div {...rest} className="navbar">
				{
					map(items, ({ text, transition }, index) => (
						<div key={index} onClick={() => this.goTo(transition)} className="navbar-link">
							{text}
						</div>
					))
				}
			</div>
		);
	}

};

export default Navbar;