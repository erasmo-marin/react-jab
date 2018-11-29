import React from 'react';
import map from 'lodash/map';
import jabCore from './core';

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.ComponentRef = false;
    }


    render() {
        const { registry = false, id = false, props, components, core = jabCore } = this.props;

        if (!registry || !registry.get) {
            console.warn(`There was a problem trying to load component with key ${id}`);
            return null;
        }

        const C = registry.get(id);

        if (!C) return null;

        return (
            <C {...props} componentId={id} executeTransition={core.executeTransition} registry={registry} core={core} ref={c => this.ComponentRef = c}>
                {/*Recursively build components tree so we can add all components levels we want from config*/
                map(components, (component, index) => {
                    const { components, id, props } = component;
                    return (<Component
                                key={index}
                                id={id}
                                props={props}
                                registry={registry}
                                components={components}
                                core={core}
                                ref={(c) => component.ref = c}
                            />)
                })}
            </C>
        );
    }
}

export default Component;
