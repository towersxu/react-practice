/**
 * Created by taox on 15-11-30.
 */
var Apps = React.createClass({
  getInitialState: function() {
    return {myModel: {items: [1, 2, 3]}};
  },

  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this.refs.placeholder)).append($('<span />'));
  },

  componentWillUnmount: function() {
    // Clean up work here.
  },

  shouldComponentUpdate: function() {
    // Let's just never update this component again.
    return false;
  },

  render: function() {
    return <div id="placeholder"/>;
  }
});

ReactDOM.render(<Apps />, document.getElementById('app'));