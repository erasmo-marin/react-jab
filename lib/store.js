import _classCallCheck from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/createClass";
import { observable, action, decorate } from "mobx";
import get from "lodash/get";
import findKey from "lodash/findKey";
/*The default store for json app builder*/

var CoreStore =
/*#__PURE__*/
function () {
  function CoreStore() {
    var _this = this;

    _classCallCheck(this, CoreStore);

    this.config = {};
    this.transitions = {};
    this.router = false;

    this.setRouter = function (router) {
      _this.router = router;
    };
  }

  _createClass(CoreStore, [{
    key: "setConfig",
    value: function setConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.transitions = get(config, "transitions", {});
      this.config = config;
    }
    /*This will execute a transition to another route*/

  }, {
    key: "executeTransition",
    value: function executeTransition(transitionName) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var routes = get(this.config, "routes");
      var transition = get(this.config, "transitions[".concat(transitionName, "]"));
      var route = findKey(routes, {
        id: get(transition, "to")
      });
      var routeObject = routes[route];
      if (!routes || !transitionName || !transition || !this.router || !route) return;
      this.router.history.push(route);
      document.title = get(routeObject, "title");
    }
  }]);

  return CoreStore;
}();

decorate(CoreStore, {
  config: observable,
  transitions: observable,
  setConfig: action.bound,
  addTransitionListener: action.bound,
  executeTransition: action.bound
});
export default new CoreStore();