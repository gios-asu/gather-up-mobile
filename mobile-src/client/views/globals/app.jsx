App = React.createClass({
  setInitialState() {
    return {
      prevContent: 'Home'
    }
  },
  componentWillReceiveProps (nextProps) {
    if (this.props.content === nextProps.content) {
      return;
    }

    this.setState({
      'prevContent': this.props.content
    });
  },
  render() {
    var child;
    var children = [<Home key="Home" />, <Profile key="Profile" />];

    if (this.props.content == 'Home') {
      children.pop();
    } else {
      children.shift();
    }

    return (
      <div>
        <Header />
        <TransitionGroup className="content">
          {children}
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
});
