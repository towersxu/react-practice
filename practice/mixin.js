/**
 * Created by taox on 15-11-23.
 */
var SetIntervalMixin = {
  componentWillMount: function () {
    this.interval = [];
  },
  setInterval: function () {
    this.interval.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function () {
    this.interval.forEach(clearInterval);
  }
};
var TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function () {
    return {seconds: 0}
  },
  componentDidMount: function () {
    this.setInterval(this.tick, 1000);
  },
  tick: function () {
    this.setState({seconds:this.state.seconds+1});
  },
  render:function(){
    return(
      <p>React TickTock {this.state.seconds} s</p>
    );
  }
});
var DbTick = React.createClass({
  mixins:[SetIntervalMixin],
  getInitialState: function () {
    return {seconds: 0}
  },
  componentDidMount: function () {
    this.setInterval(this.tick, 1000);
  },
  tick: function () {
    this.setState({seconds:this.state.seconds+2});
  },
  render:function(){
    return(
      <p>React TickTock {this.state.seconds} s</p>
    );
  }
});
ReactDOM.render(<TickTock />,document.getElementById('mixin'));
ReactDOM.render(<DbTick />,document.getElementById('dbmixin'));
//var b = setInterval(function(){
//  console.log(this);
//},1000);
//var setArr = [];
//setArr.push(setInterval.apply(null,[function(){console.log(1)},1000]));
//setArr.push(setInterval.apply(null,[function(){console.log(2)},1000]));
//setArr.push(setInterval.apply(null,[function(){console.log(4)},1000]));
//setTimeout(function(){
//  setArr.forEach(clearInterval);
//},5000);