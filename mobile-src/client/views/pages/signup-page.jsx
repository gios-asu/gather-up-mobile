SignUpPage = React.createClass({
  mixins: [TransitionMixin],
  render() {
    var registerTagLine = '';
    var _event = Session.get('event');

    if (_event && _event.title) {
      registerTagLine = ' for ' + _event.title;
    }

    return (
      <div className="signup">
        <div className="row">
          <div className="col s12 s12 m8 offset-m2">
            <h2>Sign In {registerTagLine}</h2>

            <SignUpFormComponent />

            <AdminModalComponent />
          </div>
        </div>
      </div>
    );
  }  
});
