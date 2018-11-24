const specs = {
    name: 'Hello World App',
    version: '1.0.0',
    title: 'Hello World',
    /*las rutas son componentes que cargan dependiendo de una ruta*/
    routes: {
        '/': {
            id: 'home',
            title: 'Home',
            exact: true,
            components: {
                home: {
                    id: 'asds',
                    props: {
                        title: 'Welcome to Jab',
                    },
                    components: {
                        card1: {
                            id: 'card',
                            props: {
                                title: 'Card 1',
                                description:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            },
                        },
                        card2: {
                            id: 'card',
                            props: {
                                title: 'Card 2',
                                description:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            },
                        },
                        card3: {
                            id: 'card',
                            props: {
                                title: 'Card 3',
                                description:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                            },
                        },
                    },
                },
            },
        },
        '/about': {
            id: 'about',
            title: 'About',
            components: {
                about: {
                    id: 'about',
                    props: {
                        style: {
                            marginTop: '50px',
                            padding: '2rem',
                            color: 'rgba(0,0,0,0.7)',
                        },
                    },
                },
            },
        },
        /*The default route when no match is found*/
        default: {
            id: '404',
            name: 'Not found',
            title: 'Not found',
            components: {},
        },
    },
    /*los globals son componentes globales que no dependen de una ruta*/
    globals: {
        navbar: {
            id: 'navbar',
            position: 'top',
            props: {
                items: [
                    {
                        text: 'Home',
                        transition: 'goHome',
                    },
                    {
                        text: 'About',
                        transition: 'goAbout',
                    },
                ],
            },
        },
        footer: {
            id: 'footer',
            position: 'bottom',
            props: {
                style: {},
            },
            children: {},
        },
    },
    transitions: {
        goHome: {
            from: null,
            to: 'home',
        },
        goAbout: {
            from: null,
            to: 'about',
        },
    },
}

export default specs
