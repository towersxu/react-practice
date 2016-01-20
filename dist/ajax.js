'use strict';

/**
 * Created by taox on 15-11-30.
 */
var UserGist = React.createClass({
  displayName: 'UserGist',

  getInitialState: function getInitialState() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
  componentDidMount: function componentDidMount() {
    $.get(this.props.source, (function (result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }).bind(this));
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'span',
        { className: 'user' },
        this.state.username
      ),
      ' lastest url is ',
      React.createElement(
        'a',
        { href: this.state.lastGistUrl },
        this.state.lastGistUrl
      )
    );
  }
});
var rel = ReactDOM.render(React.createElement(UserGist, { source: 'https://api.github.com/users/octocat/gists' }), document.getElementById('ajax-id'));