'use strict';

/**
 * Created by taox on 15-11-23.
 */
var CheckLink = React.createClass({
  displayName: 'CheckLink',

  //propTypes:{
  //  children:React.PropTypes.element.isRequired
  //},
  render: function render() {
    // This takes any props passed to CheckLink and copies them to <a>
    return React.createElement(
      'a',
      this.props,
      this.props.children + ' √ '
    );
  }
});

ReactDOM.render(React.createElement(
  CheckLink,
  { href: '/checked.html' },
  'Click here!'
), document.getElementById('clicklink'));