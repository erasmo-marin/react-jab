import React from 'react';
import { Card as SemanticCard } from "semantic-ui-react";
import { isConfigurable } from "../lib/configuration";

class Card extends React.Component {
    render() {
        const { title, description, toggleConfigurationButton = null, fontWeight = 400, backgroundColor = "#ffffff", color = "#000000" } = this.props;

        return (
            <SemanticCard style={{ width: "100%", backgroundColor, color }}>
            	{ toggleConfigurationButton }
            	<SemanticCard.Content>
	                <SemanticCard.Header style={{fontWeight, color}}>{title}</SemanticCard.Header>
	                <SemanticCard.Description style={{color}}>{description}</SemanticCard.Description>
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
				},
				{
					name: "fontWeight",
					type: "select",
					label: "Title Font Weight",
					values: [{
						text: "Bold",
						value: 600
					},{
						text: "Normal",
						value: 400
					},{
						text: "Light",
						value: 300
					}]
				},{
					name: "backgroundColor",
					type: "color",
					label: "Background Color"
				},
				{
					name: "color",
					type: "color",
					label: "Text Color"
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
