'use strict';

/**
 * Created by taox on 15-11-30.
 */
var GroceryList = React.createClass({
  displayName: 'GroceryList',

  handleClick: function handleClick(i) {
    console.log('your click ' + this.props.items[i]);
  },
  render: function render() {
    return React.createElement(
      'ul',
      null,
      this.props.items.map((function (item, i) {
        return React.createElement(
          'li',
          { key: i, onClick: this.handleClick.bind(this, i) },
          item
        );
      }).bind(this))
    );
  }
});
ReactDOM.render(React.createElement(GroceryList, { items: ['Apple', 'Banana', 'Cranberry'] }), document.getElementById('grocery'));