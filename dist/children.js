'use strict';

/**
 * Created by taox on 15-11-30.
 */
var App = React.createClass({
  displayName: 'App',

  componentDidMount: function componentDidMount() {
    // This doesn't refer to the `span`s! It refers to the children between
    // last line's `<App></App>`, which are undefined.
    console.log(this.props.children);
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('span', null),
      React.createElement('span', null)
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('children'));