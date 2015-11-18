var ExampleApplication = React.createClass({
  render:function(){
    var elasped = Math.round(this.props.elasped/100);
    var second = elasped/10+ (elasped % 10 ? '' : '.0' );
    var message = 'react is running'+second+'second';
    return <p>{message}</p>
  }
});
var start = new Date().getTime();
setInterval(function(){
  ReactDOM.render(<ExampleApplication elasped={new Date().getTime() - start}/>,document.getElementById('container'));
},100);
