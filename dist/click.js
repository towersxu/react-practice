'use strict';

var Counter = React.createClass({
  displayName: 'Counter',

  getInitialState: function getInitialState() {
    return { clickNum: 1 };
  },
  handleClick: function handleClick() {
    this.setState(function (state) {
      return { clickNum: (function () {
          return 'a' + Math.random();
        })() };
    });
  },
  render: function render() {
    return React.createElement(
      'h2',
      { onClick: this.handleClick },
      '点击此次',
      this.state.clickNum,
      '下'
    );
  }
});
ReactDOM.render(React.createElement(Counter, null), document.getElementById('message'));
// var Counter = React.createClass({
//   getInitialState: function () {
//     return { clickCount: 0 };
//   },
//   handleClick: function () {
//     this.setState(function(state) {
//       return {clickCount: state.clickCount +1};
//     });
//   },
//   render: function () {
//     return (<h2 onClick={this.handleClick}>Click me! Number of clicks: {this.state.clickCount}</h2>);
//   }
// });
// ReactDOM.render(
//   <Counter />,
//   document.getElementById('message')
// );