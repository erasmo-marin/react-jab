import React from 'react';
import isConfigurable from "../lib/isConfigurable";

const configureStyles = `
	.toggle-configure-form {
		position: absolute;
		right: 0;
		top: 0;
	}
`;


class Card extends React.Component {
    render() {
        const { title, description } = this.props;

        return (
            <div className="card">
            	<style>{configureStyles}</style>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        );
    }
}

Card = isConfigurable(Card, [{
	name: "title",
	label: "Title",
	type: "input"
},{
	name: "description",
	label: "Description",
	type: "input"
}], null, {
	containerStyle: {
		display: "inline-block",
		position: "relative",
		border: "1px solid #dedede",
		borderRadius: "2px",
		margin: "1rem",
		padding: "2rem",
		width: "300px",
		height: "200px",
		boxSizing: "borderBox",
		background: "#fff",
    	boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
	}
});

export default Card;
