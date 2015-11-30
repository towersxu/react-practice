/**
 * Created by taox on 15-11-27.
 */
var root = React.createElement('div');
//root = root({className:'aa'});
var p =  <div><h1>qqq</h1><p>

          <a href="http://www.baidu.com">百度一下</a>
        </p></div>;
var section = React.createClass({
  getInitialState:function(){
    return {color:'green'}
  },
  render:function(){
    return (<section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>{this.state.color || "white"}</p>
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case "red":   return "#FF0000";
            case "green": return "#00FF00";
            case "blue":  return "#0000FF";
            default:      return "#FFFFFF";
          }
        })()}
      </p>
    </section>);
  }
});
var parent = React.createElement('div',{className:'tower'},p);
var parent1 = React.createElement(section);
ReactDOM.render(parent1,document.getElementById('react-div'));