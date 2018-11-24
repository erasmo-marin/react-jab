import { observable, action, decorate } from 'mobx';
import get from 'lodash/get';
import forEach from 'lodash/forEach';
import findKey from 'lodash/findKey';

/*The default store for json app builder*/
class CoreStore {
    config = {};
    transitions = {};
    theme = {};
    router = false;

    setRouter = router => {
        this.router = router;
    };

    setConfig(config = {}) {
        this.transitions = get(config, 'transitions', {});
        this.config = config;
    }

    setTheme(theme = {}) {
        this.theme = theme;
    }

    formatUrl = (path, params = {}) => {
        forEach(params, (value, key) => {
            const r1 = new RegExp(`:${key}\\/`, 'g');
            const r2 = new RegExp(`:${key}(\\?|$)`, 'g');
            path = path.replace(r1, `${value}/`).replace(r2, value);
        });

        const r = new RegExp(`/:[\\w-]+\\?`, 'g');
        return path.replace(r, '');
    };

    /*This will execute a transition to another route*/
    executeTransition(transitionName, params = {}) {
        const routes = get(this.config, 'routes');
        const transition = get(this.config, `transitions[${transitionName}]`);
        let route = findKey(routes, { id: get(transition, 'to') });
        const routeObject = routes[route];

        if (!routes || !transitionName || !transition || !this.router || !route) return;

        route = this.formatUrl(route, params);

        this.router.history.push(route);
        if (window.document) window.document.title = get(routeObject, 'title');
    }
}

decorate(CoreStore, {
    config: observable,
    transitions: observable,
    setConfig: action.bound,
    setTheme: action.bound,
    addTransitionListener: action.bound,
    executeTransition: action.bound,
});

export default new CoreStore();
