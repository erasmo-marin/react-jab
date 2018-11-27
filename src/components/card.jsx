import React from 'react';
import { Card as SemanticCard } from "semantic-ui-react";
import isConfigurable from "../lib/isConfigurable";

class Card extends React.Component {
    render() {
        const { title, description, toggleConfigurationButton = null } = this.props;

        return (
            <SemanticCard style={{ width: "100%" }}>
            	{ toggleConfigurationButton }
            	<SemanticCard.Content>
	                <SemanticCard.Header>{title}</SemanticCard.Header>
	                <SemanticCard.Description>{description}</SemanticCard.Description>
	            </SemanticCard.Content>
            </SemanticCard>
        );
    }
}


const fields = [{
					name: "title",
					label: "Title",
					type: "input"
				},{
					name: "description",
					label: "Description",
					type: "textarea"
				}];

const containerProps = {
	style: { width: "100%" }
}

const Container = (props) => (
	<SemanticCard {...props}>
		<SemanticCard.Content>
			{props.children}
		</SemanticCard.Content>
	</SemanticCard>
)

Card = isConfigurable(Card, fields, Container, containerProps);

export default Card;
