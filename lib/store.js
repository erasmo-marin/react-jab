"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = require("mobx");

var _get = _interopRequireDefault(require("lodash/get"));

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var _findKey = _interopRequireDefault(require("lodash/findKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*The default store for json app builder*/
var CoreStore =
/*#__PURE__*/
function () {
  function CoreStore() {
    var _this = this;

    _classCallCheck(this, CoreStore);

    _defineProperty(this, "config", {});

    _defineProperty(this, "transitions", {});

    _defineProperty(this, "router", false);

    _defineProperty(this, "setRouter", function (router) {
      _this.router = router;
    });

    _defineProperty(this, "formatUrl", function (path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      (0, _forEach.default)(params, function (value, key) {
        var r1 = new RegExp(":".concat(key, "\\/"), 'g');
        var r2 = new RegExp(":".concat(key, "(\\?|$)"), 'g');
        path = path.replace(r1, "".concat(value, "/")).replace(r2, value);
      });
      var r = new RegExp("/:[\\w-]+\\?", 'g');
      return path.replace(r, '');
    });
  }

  _createClass(CoreStore, [{
    key: "setConfig",
    value: function setConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.transitions = (0, _get.default)(config, "transitions", {});
      this.config = config;
    }
  }, {
    key: "executeTransition",

    /*This will execute a transition to another route*/
    value: function executeTransition(transitionName) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var routes = (0, _get.default)(this.config, "routes");
      var transition = (0, _get.default)(this.config, "transitions[".concat(transitionName, "]"));
      var route = (0, _findKey.default)(routes, {
        id: (0, _get.default)(transition, "to")
      });
      var routeObject = routes[route];
      if (!routes || !transitionName || !transition || !this.router || !route) return;
      route = this.formatUrl(route, params);
      this.router.history.push(route);
      if (window.document) window.document.title = (0, _get.default)(routeObject, "title");
    }
  }]);

  return CoreStore;
}();

(0, _mobx.decorate)(CoreStore, {
  config: _mobx.observable,
  transitions: _mobx.observable,
  setConfig: _mobx.action.bound,
  addTransitionListener: _mobx.action.bound,
  executeTransition: _mobx.action.bound
});

var _default = new CoreStore();

exports.default = _default;