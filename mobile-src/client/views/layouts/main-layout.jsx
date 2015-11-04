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
    var transitionType = this.props.content.props.transitionType || 'slide-left';
    var item           = this.props.content;
    var key            = item.type.displayName;
    var title          = this.props.content.props.title || '';
    var content        = (
        <div key={key} className="slide">
          <header>
            <NavigationComponent title={title} />
          </header>
          <main>
            {item}
          </main>
          <footer>
          </footer>
        </div>
    );

    return (
      <div>
        <div className="slide-container">
          <TransitionGroup
              className="slide-inner"
              transitionName={transitionType}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              name="wow">
            {content}
          </TransitionGroup>
        </div>
      </div>
    );
  }
});