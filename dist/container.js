'use strict';

var ExampleApplication = React.createClass({
  displayName: 'ExampleApplication',

  render: function render() {
    var elasped = Math.round(this.props.elasped / 100);
    var second = elasped / 10 + (elasped % 10 ? '' : '.0');
    var message = 'react is running' + second + 'second';
    return React.createElement(
      'p',
      null,
      message
    );
  }
});
var start = new Date().getTime();
setInterval(function () {
  ReactDOM.render(React.createElement(ExampleApplication, { elasped: new Date().getTime() - start }), document.getElementById('container'));
}, 100);