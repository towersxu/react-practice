/**
 * Created by taox on 15-11-23.
 */
export class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {count:props.initialCount};
  }
  tick() {
    this.setState({count:this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks:{this.state.count}
      </div>
    );
  }
}
Counter.propTypes = {initialCount:React.propTypes.number};
Counter.defaultProps = {initialCount:0};
ReactDOM.render(<HelloMessage name='xt' />,document.getElementById('counter'));