/**
 * Created by taox on 15-11-30.
 */
var UserGist = React.createClass({
  getInitialState:function(){
    return {
      username:'',
      lastGistUrl:''
    }
  },
  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },
  render:function(){
    return (
      <div><span className='user'>{this.state.username}</span> lastest url is <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a></div>
    )
  }
});
var rel = ReactDOM.render(
  <UserGist source='https://api.github.com/users/octocat/gists'/>,
  document.getElementById('ajax-id')
);