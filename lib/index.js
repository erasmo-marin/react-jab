"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Registry", {
  enumerable: true,
  get: function get() {
    return _registry.default;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _component.default;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _mobxReact = require("mobx-react");

var _map = _interopRequireDefault(require("lodash/map"));

var _filter = _interopRequireDefault(require("lodash/filter"));

var _get = _interopRequireDefault(require("lodash/get"));

var _registry = _interopRequireDefault(require("./registry"));

var _component = _interopRequireDefault(require("./component"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Core =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Core, _React$Component);

  function Core(props) {
    var _this;

    _classCallCheck(this, Core);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Core).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setTitle", function (title) {
      if (window.document) window.document.title = title;
    });

    var _this$props$config = _this.props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config;

    _store.default.setConfig(config);

    _this.setTitle((0, _get.default)(config, 'title', ''));

    return _this;
  }

  _createClass(Core, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config2 = _this$props.config,
          config = _this$props$config2 === void 0 ? {} : _this$props$config2,
          registry = _this$props.registry,
          router = _this$props.router;

      var stores = _objectSpread({
        coreStore: _store.default
      }, this.props.stores);

      var Router = router;
      var bottom = (0, _filter.default)(config.globals, function (_ref) {
        var position = _ref.position;
        return position === 'bottom';
      });
      var top = (0, _filter.default)(config.globals, function (_ref2) {
        var position = _ref2.position;
        return position === 'top';
      });
      return _react.default.createElement(_mobxReact.Provider, stores, _react.default.createElement(Router, null, _react.default.createElement(_react.default.Fragment, null, (0, _map.default)(top, function (_ref3, index) {
        var id = _ref3.id,
            props = _ref3.props,
            components = _ref3.components;
        return _react.default.createElement(_component.default, {
          key: index,
          id: id,
          props: props,
          registry: registry,
          components: components
        });
      }), _react.default.createElement(_reactRouter.Switch, null, (0, _map.default)(config.routes, function (_ref4, path) {
        var name = _ref4.name,
            title = _ref4.title,
            _ref4$exact = _ref4.exact,
            exact = _ref4$exact === void 0 ? false : _ref4$exact,
            components = _ref4.components;
        return _react.default.createElement(_reactRouter.Route, {
          key: path,
          exact: exact,
          path: path === 'default' ? undefined : path,
          render: function render() {
            return (0, _map.default)(components, function (_ref5, index) {
              var id = _ref5.id,
                  props = _ref5.props,
                  components = _ref5.components;
              return _react.default.createElement(_component.default, {
                key: index,
                id: id,
                props: props,
                registry: registry,
                components: components
              });
            });
          }
        });
      })), _react.default.createElement(_reactRouter.Route, {
        children: function children(router) {
          _store.default.setRouter(router);

          return null;
        }
      }), (0, _map.default)(bottom, function (_ref6, index) {
        var id = _ref6.id,
            props = _ref6.props,
            components = _ref6.components;
        return _react.default.createElement(_component.default, {
          key: index,
          id: id,
          props: props,
          registry: registry,
          components: components
        });
      }))));
    }
  }]);

  return Core;
}(_react.default.Component);

var _default = Core;
exports.default = _default;