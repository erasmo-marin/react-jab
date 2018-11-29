import React from "react";
import map from "lodash/map";
import forEach from "lodash/forEach";
import cloneDeep from "lodash/cloneDeep";
import { Form, Button, Icon } from "semantic-ui-react";
import Color from './color';
import "./semantic.min.css";

/* options example:

	[{
		name: "title", //should be the prop name
		label: "Title", //the form label
		type: "string", //string, boolean, number, date, array
		validationRegex: (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]),
		inputComponent: "input" //can be input, checkbox, textarea, select, selectMultiple, date
		values: ["an", "array", "of", "possible", "values"] //only for select and selectMultiple		
	}]
*/

const configureStyles = `
	.toggle-configure-form {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 99;
	}
`;


const inputTypes = {
	input: Form.Input,
	select: Form.Select,
	textarea: Form.TextArea,
	color: Color
}

const isConfigurable = (WrappedComponent, options, Container = React.Fragment, containerProps = {}, CustomOptionsComponent = false) => {

	return class ConfigurableComponent extends React.Component {
		constructor(props) {
			super(props);
			this.options = options;
			this.configurations = {};
			forEach(this.options, ({ name }) => {
				this.configurations[name] = this.props[name];
			});
			this.state = {
				configure: true,
				generatedProps: {}
			}
			this.container = Container;
			this.containerProps = containerProps;
		}

		toggleConfigure = () => this.setState({ configure: !this.state.configure });

		commitChanges = () => {
			this.setState({ generatedProps: cloneDeep(this.configurations) });
		}

		setField = (name, value) => {
			this.configurations[name] = value;
		}

		getDynamicForm = () => {
			if(CustomOptionsComponent)
				return <CustomOptionsComponent onFormChange={this.onFormChange} onSubmit={this.commitChanges}/>;

			return (
				<Form onSubmit={this.commitChanges}>
					{
						map(this.options, option => {
							const C = inputTypes[option.type];
							if(!C)
								return null;

							return <Form.Field>
										<C
											label={option.label || option.name}
											name={option.name}
											options={option.values}
											onChange={(e, { name, value }) => this.setField(name, value)}
											defaultValue={this.configurations[option.name] || undefined}
										/>
									</Form.Field>
						})
					}
					<Button>Apply Changes</Button>
				</Form>
			)

		}

		onFormChange = (configurations) => {
			this.configurations = configurations;
		}

		getToggleButton = () => {
			return (<div className="toggle-configure-form">
						<Icon name="eye" onClick={this.toggleConfigure}/>
					</div>)
		}

		getConfigurableProps = () => {
			return this.configurations;
		}

		render() {

			const { generatedProps, configure = false } = this.state;
			const { configurable = false, ...rest } = this.props;
			const Container = this.container;

			if(configurable && configure)
				return <Container {...this.containerProps}>
							<style>{configureStyles}</style>
							{this.getToggleButton()}
							{this.getDynamicForm()}
						</Container>
			if(configurable && !configure)
				return  (<React.Fragment>
							<style>{configureStyles}</style>
							<WrappedComponent {...rest} {...generatedProps} getConfigurableProps={this.getConfigurableProps} toggleConfigurationButton={this.getToggleButton()}/>
						 </React.Fragment>);

			return <WrappedComponent {...this.props} getConfigurableProps={this.getConfigurableProps}/>
		}
	}
};

export default isConfigurable;