import _classCallCheck from "/Users/erasmo/Proyectos/jab/node_modules/@babel/runtime/helpers/esm/classCallCheck";

var Registry = function Registry() {
  var _this = this;

  var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Registry);

  this.get = function (id) {
    return _this.components[id] || null;
  };

  this.components = components;
};

export default Registry;