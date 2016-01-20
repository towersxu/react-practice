'use strict';

/**
 * Created by taox on 15-11-23.
 */
var SetIntervalMixin = {
  componentWillMount: function componentWillMount() {
    this.interval = [];
  },
  setInterval: (function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  })(function () {
    this.interval.push(setInterval.apply(null, arguments));
  }),
  componentWillUnmount: function componentWillUnmount() {
    this.interval.forEach(clearInterval);
  }
};
var TickTock = React.createClass({
  displayName: 'TickTock',

  mixins: [SetIntervalMixin],
  getInitialState: function getInitialState() {
    return { seconds: 0 };
  },
  componentDidMount: function componentDidMount() {
    this.setInterval(this.tick, 1000);
  },
  tick: function tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  },
  render: function render() {
    return React.createElement(
      'p',
      null,
      'React TickTock ',
      this.state.seconds,
      ' s'
    );
  }
});
var DbTick = React.createClass({
  displayName: 'DbTick',

  mixins: [SetIntervalMixin],
  getInitialState: function getInitialState() {
    return { seconds: 0 };
  },
  componentDidMount: function componentDidMount() {
    this.setInterval(this.tick, 1000);
  },
  tick: function tick() {
    this.setState({ seconds: this.state.seconds + 2 });
  },
  render: function render() {
    return React.createElement(
      'p',
      null,
      'React TickTock ',
      this.state.seconds,
      ' s'
    );
  }
});
ReactDOM.render(React.createElement(TickTock, null), document.getElementById('mixin'));
ReactDOM.render(React.createElement(DbTick, null), document.getElementById('dbmixin'));
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