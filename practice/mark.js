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
