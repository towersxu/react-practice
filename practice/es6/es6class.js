/**
 * Created by taox on 15-11-23.
 */
  "use strict";
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}
ReactDOM.render(<HelloMessage name="xutao" />,document.getElementById('es6'));