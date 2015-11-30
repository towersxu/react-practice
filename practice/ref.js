/**
 * Created by taox on 15-11-24.
 */
var MyComponent = React.createClass({
  handleClick: function() {
    this.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref={(ref) =>(this.myTextInput = ref)} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}
          />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('ref')
);