"use strict";

var Comment = React.createClass({
  displayName: "Comment",

  rawMarkup: function rawMarkup() {
    var rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
    );
  }
});
ReactDOM.render(React.createElement(Comment, { author: "xt", children: "<h2>lalalalal</h2>" }), document.getElementById('mark'));

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function render() {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author, key: comment.id },
        comment.text
      );
    });
    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});
var CommentForm = React.createClass({
  displayName: "CommentForm",

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    console.log(text + ':' + author);
    // TODO: send request to the server
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function render() {
    return React.createElement(
      "form",
      { className: "commentForm", onSubmit: this.handleSubmit },
      React.createElement("input", { type: "text", placeholder: "Your name", ref: "author" }),
      React.createElement("input", { type: "text", placeholder: "Say something...", ref: "text" }),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
});
var CommentBox = React.createClass({
  displayName: "CommentBox",

  getInitialState: function getInitialState() {
    return { data: [] };
  },
  componentDidMount: function componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (function (res) {
        console.log(res);
        this.setState({ data: res });
      }).bind(this),
      error: (function (err) {
        console.log(arguments);
      }).bind(this)
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Comments1"
      ),
      React.createElement(CommentList, { data: this.state.data }),
      React.createElement(CommentForm, null)
    );
  }
});
ReactDOM.render(React.createElement(CommentBox, { url: "/react-practice/data/comments.json" }), document.getElementById('content'));