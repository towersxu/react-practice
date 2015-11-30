/**
 * Created by taox on 15-11-24.
 */
var ChatInput = React.createClass({
  getInitialState:function(){
    return {value:'Hello',name:'username'};
  },
  change:function(e){
    console.log(e);
    this.setState({value:e.target.value});
  },
  keyUp:function(e){
    console.log(e);
  },
  render:function(){
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.change} onKeyUp={this.keyUp}/>;
  }
});
ReactDOM.render(
  <ChatInput ref={
    function(input){
      console.log(input);
      if(input !=null){
        input.focus();
      }
    }
  }/>,
  document.getElementById('chat-input')
);
/* textarea */
var textArea = React.createClass({
  //getInitialState: function(){
  //  return {value:"this is description,\n welcome to react practice"}
  //},
  render:function(){
    var value = this.state.value || 'test';
    //console.log(value);
    return <textarea name="description" value={value}></textarea>;
  }
});
ReactDOM.render(
  <textArea />,
  document.getElementById('text-input')
);