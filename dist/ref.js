"use strict";

/**
 * Created by taox on 15-11-24.
 */
var MyComponent = React.createClass({
  displayName: "MyComponent",

  handleClick: function handleClick() {
    this.myTextInput.focus();
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", ref: function ref(_ref) {
          return _this.myTextInput = _ref;
        } }),
      React.createElement("input", {
        type: "button",
        value: "Focus the text input",
        onClick: this.handleClick
      })
    );
  }
});

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('ref'));