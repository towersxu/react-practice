/**
 * Created by taox on 15-11-23.
 */
var LikeButton = React.createClass({
  getInitialState:function(){
    return {liked:false}
  },
  handleClick:function(event){
    //console.log(event);
    this.setState({liked:!this.state.liked});
  },
  render:function(){
    var text = this.state.liked?'your like it':'your dislike it';
    return (
      <p onClick={this.handleClick}>
        {text},click this to toggle.
      </p>
    );
  }
});
ReactDOM.render(
  <LikeButton />,
  document.getElementById('liked')
);