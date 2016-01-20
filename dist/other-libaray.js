'use strict';

/**
 * Created by taox on 15-11-30.
 */
var Apps = React.createClass({
  displayName: 'Apps',

  getInitialState: function getInitialState() {
    return { myModel: { items: [1, 2, 3] } };
  },

  componentDidMount: function componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.placeholder)).append($('<span />'));
  },

  componentWillUnmount: function componentWillUnmount() {
    // Clean up work here.
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Let's just never update this component again.
    return false;
  },

  render: function render() {
    return React.createElement('div', { id: 'placeholder' });
  }
});

ReactDOM.render(React.createElement(Apps, null), document.getElementById('app'));