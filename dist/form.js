'use strict';

/**
 * Created by taox on 15-11-24.
 */
var ChatInput = React.createClass({
  displayName: 'ChatInput',

  getInitialState: function getInitialState() {
    return { value: 'Hello', name: 'username' };
  },
  change: function change(e) {
    console.log(e);
    this.setState({ value: e.target.value });
  },
  keyUp: function keyUp(e) {
    console.log(e);
  },
  render: function render() {
    var value = this.state.value;
    return React.createElement('input', { type: 'text', value: value, onChange: this.change, onKeyUp: this.keyUp });
  }
});
ReactDOM.render(React.createElement(ChatInput, { ref: function ref(input) {
    console.log(input);
    if (input != null) {
      input.focus();
    }
  } }), document.getElementById('chat-input'));
/* textarea */
var textArea = React.createClass({
  displayName: 'textArea',

  //getInitialState: function(){
  //  return {value:"this is description,\n welcome to react practice"}
  //},
  render: function render() {
    var value = this.state.value || 'test';
    //console.log(value);
    return React.createElement('textarea', { name: 'description', value: value });
  }
});
ReactDOM.render(React.createElement('textArea', null), document.getElementById('text-input'));