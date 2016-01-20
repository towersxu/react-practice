'use strict';

/**
 * Created by taox on 15-11-30.
 */
var Box = React.createClass({
  displayName: 'Box',

  getInitialState: function getInitialState() {
    return { windowWidth: window.innerWidth };
  },

  handleResize: function handleResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  },

  componentDidMount: function componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Current window width: ',
      this.state.windowWidth
    );
  }
});

ReactDOM.render(React.createElement(Box, null), document.getElementById('resize-node'));