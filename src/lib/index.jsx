import React from 'react'
import { Route, Switch } from 'react-router'
import { Provider } from 'mobx-react'
import map from 'lodash/map'
import filter from 'lodash/filter'
import get from 'lodash/get'
import Registry from './registry'
import Component from './component'
import coreStore from './store'

class Core extends React.Component {
    constructor(props) {
        super(props)
        const { config = {} } = this.props
        coreStore.setConfig(config)
        this.setTitle(get(config, 'title', ''))
    }

    setTitle = title => {
        if (window.document) window.document.title = title
    }

    render() {
        const { config = {}, registry, router } = this.props

        let stores = {
            coreStore,
            ...this.props.stores,
        }

        const Router = router
        const bottom = filter(config.globals, ({ position }) => position === 'bottom')
        const top = filter(config.globals, ({ position }) => position === 'top')

        return (
            <Provider {...stores}>
                <Router>
                    <React.Fragment>
                        {map(top, ({ id, props, components }, index) => {
                            return (
                                <Component
                                    key={index}
                                    id={id}
                                    props={props}
                                    registry={registry}
                                    components={components}
                                />
                            )
                        })}
                        <Switch>
                            {map(config.routes, ({ name, title, exact = false, components }, path) => {
                                return (
                                    <Route
                                        key={path}
                                        exact={exact}
                                        path={path === 'default' ? undefined : path}
                                        render={() => {
                                            return map(components, ({ id, props, components }, index) => {
                                                return (
                                                    <Component
                                                        key={index}
                                                        id={id}
                                                        props={props}
                                                        registry={registry}
                                                        components={components}
                                                    />
                                                )
                                            })
                                        }}
                                    />
                                )
                            })}
                        </Switch>
                        <Route
                            children={router => {
                                coreStore.setRouter(router)
                                return null
                            }}
                        />
                        {map(bottom, ({ id, props, components }, index) => {
                            return (
                                <Component
                                    key={index}
                                    id={id}
                                    props={props}
                                    registry={registry}
                                    components={components}
                                />
                            )
                        })}
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

export default Core
export { Registry, Component }
