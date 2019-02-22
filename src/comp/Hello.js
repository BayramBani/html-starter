class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center-align">Hello <b className="blue-text">{this.props.name}</b></h1>
      </div>
    );
  }
}

export default Hello;
