const config = {
    name: 'Hello World App',
    version: '1.0.0',
    title: 'Hello World',
    theme: {
        colors: {
            backgroundColor: '#f5f5f6',
            primaryColor: '#d81b60',
            primaryLightColor: '#ff5c8d',
            primaryDarkColor: '#a00037',
            secondaryColor: '#3f51b5',
            secondaryLightColor: '#757de8',
            secondaryDarkColor: '#002984',
            primaryTextColor: '#ffffff',
            secondaryTextColor: '#ffffff',
        },
    },
    routes: {
        '/': {
            id: 'home',
            title: 'Home',
            exact: true,
            components: {
                home: {
                    id: 'home',
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
                                configurable: true
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
                title: 'Footer title',
                links: [
                    [{ text: 'Link 1', url: 'https://github.com' }, { text: 'Link 2', url: 'https://microsoft.com' }],
                    [{ text: 'Link 3', url: 'https://npmjs.com' }, { text: 'Link 4', url: 'https://google.com' }],
                    [{ text: 'Link 5', url: 'https://gitlab.com' }, { text: 'Link 6', url: 'https://amazon.com' }],
                ],
            },
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
};

export default config;
