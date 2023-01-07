class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.launchClock();
    this.state = { currentTime: 1 };
  }

  componentDidMount() {
    const data = await fetch('/');
  }

  getInitialState() {
    return ({})
  }

  launchClock() {
    setInterval(
      function () {
        // this.setState({
        //   currentTime: new Date().toLocaleString(),
        // });
        this.forceUpdate();
      }.bind(this),
      1000
    );
  }

  render() {
    console.log("Rendering Clock...");
    return <div>{this.state.currentTime}</div>;
  }
}
