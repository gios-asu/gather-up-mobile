ThankYouPage = React.createClass({
  mixins: [TransitionMixin],
  render() {
    var registerTagLine = '';
    var _event = Session.get('event');

    if (_event && _event.title) {
      registerTagLine = 'to ' + _event.title;
    }

    return (
      <div className="thankyou">
        <div className="row">
          <div className="col s12 s12 m8 offset-m2">
            <h2>You have signed in{registerTagLine}</h2>

            <div className="thankyou__badge">
              <div className="check-box">
                <i className="large material-icons">verified_user</i>
              </div>
            </div>

            <div className="thankyou__button">
              <a className="waves-effect waves-light btn" href="/signup">
                <i className="material-icons left">assignment</i>
                Return to Sign In
              </a>
            </div>

            <AdminModalComponent />
          </div>
        </div>
      </div>
    );
  }  
});
