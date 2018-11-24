import React from 'react'
import { inject } from 'mobx-react'
import map from 'lodash/map'

class Component extends React.Component {
    render() {
        const { registry = false, id = false, props, coreStore, components } = this.props

        if (!registry || !registry.get) {
            console.warn(`There was a problem trying to load component with key ${id}`)
            return null
        }

        const C = registry.get(id)

        if (!C) return null

        return (
            <C {...props} executeTransition={coreStore.executeTransition} registry={registry} coreStore={coreStore}>
                {/*Recursively build components tree so we can add all components levels we want from config*/
                map(components, ({ components, id, props }, index) => (
                    <Component
                        key={index}
                        id={id}
                        props={props}
                        registry={registry}
                        components={components}
                        coreStore={coreStore}
                    />
                ))}
            </C>
        )
    }
}

Component = inject('coreStore')(Component)

export default Component
