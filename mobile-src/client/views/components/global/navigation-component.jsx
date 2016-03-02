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
        <div className="row">
          <div className="col s12">
            <div className="nav-wrapper">
              <a href={goBackUrl} className="brand-logo">{title}</a>
              <a href={goBackUrl} className={goBackClasses}>
                <i className="fa fa-chevron-left"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});
