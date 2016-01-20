"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ES6Container = (function (_React$Component) {
  _inherits(ES6Container, _React$Component);

  function ES6Container() {
    _classCallCheck(this, ES6Container);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ES6Container).apply(this, arguments));
  }

  _createClass(ES6Container, [{
    key: 'render',
    value: function render() {
      var esp = Math.round(this.props.esp / 1000);
      var second = esp;
      var message = 'ES6 has run' + second;
      return React.createElement(
        'h3',
        null,
        message
      );
    }
  }]);

  return ES6Container;
})(React.Component);

var start = new Date().getTime();
setInterval(function () {
  ReactDOM.render(React.createElement(ES6Container, { esp: new Date().getTime() - start }), document.getElementById('ES6Container'));
}, 1000);