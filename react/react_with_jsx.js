/*
  <script type="text/babel">
 */
/*ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);*/

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
ReactDOM.render(
  <HelloMessage name="React" />,
  document.getElementById('root')
);
