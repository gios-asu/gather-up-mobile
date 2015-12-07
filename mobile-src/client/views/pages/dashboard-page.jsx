DashboardPage = React.createClass({
  mixins: [TransitionMixin],
  handleEventClick(e) {
    e.preventDefault();

    FlowRouter.go('/event');
  },
  handleViewClick(e) {
    e.preventDefault();

    FlowRouter.go('/view');
  },
  handleLogoutClick(e) {
    e.preventDefault();

    logout();

    FlowRouter.go('/');
  },
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m8 offset-m2">

            <h2>Welcome!</h2>

            <p>
              This is the administrative panel. From here, you can
              gather new sign ins for an event, or see who has
              already signed in.
            </p>

            <a
                className="waves-effect waves-light large btn-large btn-block"
                href="#!"
                onClick={this.handleEventClick}
                id="start-gathering-sign-ins">
              <i className="material-icons left">assignment</i>
              Start Gathering Sign Ins
            </a>
            &nbsp;
            <a className="waves-effect waves-light asu-blue large btn-large btn-block" href="#!" onClick={this.handleViewClick}>
              <i className="material-icons left">list</i>
              View Sign Ins
            </a>
            &nbsp;
            <a className="logout grey darken-1 waves-effect waves-light large btn-large btn-block" href="#!" onClick={this.handleLogoutClick}>
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
});
