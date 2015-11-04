TransitionGroup = React.addons.CSSTransitionGroup;

MainLayout = React.createClass({
  getInitialState() {
    return {
      prevContent: null
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
    var children = [this.props.content];

    if ( children[0] === null ) {
      children.splice(0, 1);
    }

    var items = children.map(function(item, i) {
      var key = item.type.displayName;
      return (
        <div key={key} className="slide">
          <header>
            <NavigationComponent />
          </header>
          <main>
            {item}
          </main>
          <footer>
          </footer>
        </div>
      );
    }.bind(this));

    return (
      <div>
        <div className="slide-container">
          <TransitionGroup
              className="slide-inner"
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              name="wow">
            {items}
          </TransitionGroup>
        </div>
      </div>
    );
  }
});