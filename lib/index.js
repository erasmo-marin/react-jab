import _objectSpread from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import { Route, Switch } from "react-router";
import { configure } from 'mobx';
import { Provider } from 'mobx-react'; //import DevTools from "mobx-react-devtools";

import map from "lodash/map";
import filter from "lodash/filter"; //import get from "lodash/get";

import Registry from "./registry";
import Component from "./component";
import coreStore from "./store";
configure({
  enforceActions: "always"
});

var Core =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Core, _React$Component);

  function Core(props) {
    var _this;

    _classCallCheck(this, Core);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Core).call(this, props));
    var _this$props$config = _this.props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config;
    coreStore.setConfig(config);
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
        coreStore: coreStore
      }, this.props.stores);

      window.stores = stores;
      var Router = router;
      var bottom = filter(config.globals, function (_ref) {
        var position = _ref.position;
        return position === "bottom";
      });
      var top = filter(config.globals, function (_ref2) {
        var position = _ref2.position;
        return position === "top";
      });
      return React.createElement(Provider, stores, React.createElement(Router, null, React.createElement(React.Fragment, null, map(top, function (_ref3, index) {
        var id = _ref3.id,
            props = _ref3.props;
        return React.createElement(Component, {
          key: index,
          id: id,
          props: props,
          registry: registry
        });
      }), React.createElement(Switch, null, map(config.routes, function (_ref4, path) {
        var name = _ref4.name,
            title = _ref4.title,
            _ref4$exact = _ref4.exact,
            exact = _ref4$exact === void 0 ? false : _ref4$exact,
            components = _ref4.components;
        return React.createElement(Route, {
          key: path,
          exact: exact,
          path: path === "default" ? undefined : path,
          render: function render() {
            return map(components, function (_ref5, index) {
              var id = _ref5.id,
                  props = _ref5.props;
              return React.createElement(Component, {
                key: index,
                id: id,
                props: props,
                registry: registry
              });
            });
          }
        });
      })), React.createElement(Route, {
        children: function children(router) {
          coreStore.setRouter(router);
          return null;
        }
      }), map(bottom, function (_ref6, index) {
        var id = _ref6.id,
            props = _ref6.props;
        return React.createElement(Component, {
          key: index,
          id: id,
          props: props,
          registry: registry
        });
      }))));
    }
  }]);

  return Core;
}(React.Component);

export default Core;
export { Registry };