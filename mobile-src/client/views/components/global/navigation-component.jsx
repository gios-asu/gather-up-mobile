NavigationComponent = React.createClass({
  render() {
    var title = this.props.title || 'Gather Up';

    return(
     <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">{title}</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
