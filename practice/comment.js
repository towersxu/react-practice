var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});
ReactDOM.render(
  <Comment author='xt' children='<h2>lalalalal</h2>'/>,
  document.getElementById('mark')
)

var CommentList = React.createClass({
  render:function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
var CommentForm = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    console.log(text+':'+author);
    // TODO: send request to the server
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
var CommentBox = React.createClass({
  getInitialState:function() {
    return {data:[]};
  },
  componentDidMount: function() {
    $.ajax({
      url:this.props.url,
      dataType:'json',
      cache:false,
      success:function(res){
        console.log(res);
        this.setState({data:res});
      }.bind(this),
      error:function(err){
        console.log(arguments);
      }.bind(this)
    });
  },
  render: function(){
    return (
      <div className="commentBox">
        <h1>Comments1</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox url="/react-practice/data/comments.json"/>,
  document.getElementById('content')
);
