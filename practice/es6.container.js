"use strict";
class ES6Container extends React.Component {
  render() {
    var esp = Math.round(this.props.esp /1000);
    var second = esp;
    var message = 'ES6 has run'+second;
    return <h3>{message}</h3>;
  }
}
var start = new Date().getTime();
setInterval(()=>{
  ReactDOM.render(<ES6Container esp={new Date().getTime() - start} />,document.getElementById('ES6Container'));
},1000);
