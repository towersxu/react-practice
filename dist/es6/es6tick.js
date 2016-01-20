'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by taox on 15-11-23.
 */

var Counter = exports.Counter = (function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this, props));

    _this.state = { count: props.initialCount };
    return _this;
  }

  _createClass(Counter, [{
    key: 'tick',
    value: function tick() {
      this.setState({ count: this.state.count + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { onClick: this.tick.bind(this) },
        'Clicks:',
        this.state.count
      );
    }
  }]);

  return Counter;
})(React.Component);

Counter.propTypes = { initialCount: React.propTypes.number };
Counter.defaultProps = { initialCount: 0 };
ReactDOM.render(React.createElement(HelloMessage, { name: 'xt' }), document.getElementById('counter'));