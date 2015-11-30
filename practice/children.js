/**
 * Created by taox on 15-11-30.
 */
var App = React.createClass({
  componentDidMount: function() {
    // This doesn't refer to the `span`s! It refers to the children between
    // last line's `<App></App>`, which are undefined.
    console.log(this.props.children);
  },

  render: function() {
    return <div><span/><span/></div>;
  }
});

ReactDOM.render(<App></App>, document.getElementById('children'));