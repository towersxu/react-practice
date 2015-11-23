/**
 * Created by taox on 15-11-23.
 */
var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
          return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});
ReactDOM.render(
  <MyComponent results={[{id:1,text:"a"},{id:4,text:"b"},{id:3,text:"c"}]}/>,
  document.getElementById('list')
);