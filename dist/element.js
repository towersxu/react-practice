'use strict';

/**
 * Created by taox on 15-11-27.
 */
var root = React.createElement('div');
//root = root({className:'aa'});
var p = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'qqq'
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'a',
      { href: 'http://www.baidu.com' },
      '百度一下'
    )
  )
);
var section = React.createClass({
  displayName: 'section',

  getInitialState: function getInitialState() {
    return { color: 'green' };
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'section',
      null,
      React.createElement(
        'h1',
        null,
        'Color'
      ),
      React.createElement(
        'h3',
        null,
        'Name'
      ),
      React.createElement(
        'p',
        null,
        this.state.color || "white"
      ),
      React.createElement(
        'h3',
        null,
        'Hex'
      ),
      React.createElement(
        'p',
        null,
        (function () {
          switch (_this.state.color) {
            case "red":
              return "#FF0000";
            case "green":
              return "#00FF00";
            case "blue":
              return "#0000FF";
            default:
              return "#FFFFFF";
          }
        })()
      )
    );
  }
});
var parent = React.createElement('div', { className: 'tower' }, p);
var parent1 = React.createElement(section);
ReactDOM.render(parent1, document.getElementById('react-div'));