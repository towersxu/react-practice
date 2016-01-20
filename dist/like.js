'use strict';

/**
 * Created by taox on 15-11-23.
 */
var LikeButton = React.createClass({
  displayName: 'LikeButton',

  getInitialState: function getInitialState() {
    return { liked: false };
  },
  handleClick: function handleClick(event) {
    //console.log(event);
    this.setState({ liked: !this.state.liked });
  },
  render: function render() {
    var text = this.state.liked ? 'your like it' : 'your dislike it';
    return React.createElement(
      'p',
      { onClick: this.handleClick },
      text,
      ',click this to toggle.'
    );
  }
});
ReactDOM.render(React.createElement(LikeButton, null), document.getElementById('liked'));