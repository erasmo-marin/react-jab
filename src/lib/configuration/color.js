import React from "react";
import { Form } from "semantic-ui-react";
import { TwitterPicker } from 'react-color';

class Color extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			value: props.defaultValue || "#ffffff"
		}
	}

	onChange = ({ hex }) => {

		const value = hex;

		const { name } = this.props;

		this.setState({ value }, () => {
			if(this.props.onChange)
				this.props.onChange(false, { name, value });
		});
	}

	toggleVisible = () => this.setState({visible: !this.state.visible});

	render() {

		const { visible = false, value = "#fff" } = this.state;
		const { label = "Color" } = this.props;

		return	<Form.Field> 
					<label>{label}</label>
					<div style={{width: "30px", height: "30px", backgroundColor: value, border: "1px solid #dedede"}} onClick={this.toggleVisible}/>
					{ visible ? <TwitterPicker color={ value } onChange={this.onChange}/> : null }
				</Form.Field>
	}

}

export default Color;