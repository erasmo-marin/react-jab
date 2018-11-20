# Json App Builder

Json App Builder (JAB) is an open source library based on react, that makes possible to build a user interface and data flows only with a JSON configuration. Writing components that works with JAB is easy, because they are just react components.

JAB works with a component registry. Every component you want to use in your project must be mapped in this registry in order to be loaded. Also, you need to declare a configuration object that describes your app routes, the components in the route, global components in the case they are route independent (like a navbar or a footer), and transitions, objects that describe a transition to another route.

Routes support parameters, and you can send parameters through transitions. Also, you can execute transitions from your components with the `executeTransition` function.