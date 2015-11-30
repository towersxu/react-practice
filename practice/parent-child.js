/**
 * Created by taox on 15-11-30.
 */
var GroceryList = React.createClass({
  handleClick:function(i){
    console.log('your click '+this.props.items[i]);
  },
  render:function(){
    return (
      <ul>
        {this.props.items.map(function(item,i){
          return <li key={i} onClick={this.handleClick.bind(this,i)}>{item}</li>
        }.bind(this))}
      </ul>
    )
  }
});
ReactDOM.render(
  <GroceryList items={['Apple','Banana','Cranberry']}/>,
  document.getElementById('grocery')
);