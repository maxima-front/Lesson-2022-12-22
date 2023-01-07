class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.launchClock();
    this.state = { currentTime: 1 };

    this.listener = document.addEventListener('click', () => console.log('click'));
  }

  componentWillUnmount() {
    document.removeEventListener('', this.listener);
  }

  getInitialState() {
    return {};
  }

  launchClock() {
    setInterval(function () {
      // this.setState({
      //   currentTime: new Date().toLocaleString(),
      // });
      this.forceUpdate();
    }.bind(this), 1000);
  }

  render() {
    console.log("Rendering Clock...");
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
}