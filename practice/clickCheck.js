/**
 * Created by taox on 15-11-23.
 */
var CheckLink = React.createClass({
  //propTypes:{
  //  children:React.PropTypes.element.isRequired
  //},
  render: function() {
    // This takes any props passed to CheckLink and copies them to <a>
    return <a {...this.props}>{this.props.children+' √ '}</a>;
  }
});

ReactDOM.render(
  <CheckLink href="/checked.html">
    Click here!
  </CheckLink>,
  document.getElementById('clicklink')
);