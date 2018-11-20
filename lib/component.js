import _classCallCheck from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import { inject } from "mobx-react";

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$registry = _this$props.registry,
          registry = _this$props$registry === void 0 ? false : _this$props$registry,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? false : _this$props$id,
          props = _this$props.props,
          coreStore = _this$props.coreStore;

      if (!registry || !registry.get) {
        return React.createElement("div", {
          style: {
            color: "red"
          }
        }, "There was a problem trying to load component with key ".concat(id));
      }

      var C = registry.get(id);
      return React.createElement(C, Object.assign({}, props, {
        executeTransition: coreStore.executeTransition
      }));
    }
  }]);

  return Component;
}(React.Component);

Component = inject("coreStore")(Component);
export default Component;