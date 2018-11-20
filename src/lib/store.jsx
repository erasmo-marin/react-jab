import { observable, action, decorate } from "mobx";
import get from "lodash/get";
import findKey from "lodash/findKey";

/*The default store for json app builder*/
class CoreStore {

	config = {};
	transitions = {};
	router = false;

	setRouter = router => {
		this.router = router;
	}

	setConfig(config = {}) {
		this.transitions = get(config, "transitions", {});
		this.config = config;
	}

	/*This will execute a transition to another route*/
	executeTransition(transitionName, options = {}) {
		const routes = get(this.config, "routes");
		const transition = get(this.config, `transitions[${transitionName}]`);
		let route = findKey(routes, { id: get(transition, "to") });
		const routeObject = routes[route];

		if(!routes || !transitionName || !transition || !this.router || !route)
			return;
		this.router.history.push(route);
		document.title = get(routeObject, "title");
	}

}

decorate(CoreStore, {
	config: observable,
	transitions: observable,
	setConfig: action.bound,
	addTransitionListener: action.bound,
	executeTransition: action.bound
});


export default new CoreStore();