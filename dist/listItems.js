"use strict";

/**
 * Created by taox on 15-11-23.
 */
var ListItemWrapper = React.createClass({
  displayName: "ListItemWrapper",

  render: function render() {
    return React.createElement(
      "li",
      null,
      this.props.data.text
    );
  }
});
var MyComponent = React.createClass({
  displayName: "MyComponent",

  render: function render() {
    return React.createElement(
      "ul",
      null,
      this.props.results.map(function (result) {
        return React.createElement(ListItemWrapper, { key: result.id, data: result });
      })
    );
  }
});
ReactDOM.render(React.createElement(MyComponent, { results: [{ id: 1, text: "a" }, { id: 4, text: "b" }, { id: 3, text: "c" }] }), document.getElementById('list'));