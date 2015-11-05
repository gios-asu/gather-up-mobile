NavigationComponent = React.createClass({
  render() {
    var title = this.props.title || 'Gather Up';
    var goBackUrl = this.props.allowGoBack ? '/' : '#!';

    var goBackClasses = 'nav__go-back button-collapse ';

    if (this.props.allowGoBack) {
      goBackClasses += '';
    } else {
      goBackClasses += 'hide';
    }

    return(
     <nav>
        <div className="nav-wrapper">
          <a href={goBackUrl} className="brand-logo">{title}</a>
          <a href={goBackUrl} className={goBackClasses}>
            <i className="fa fa-chevron-left"></i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
