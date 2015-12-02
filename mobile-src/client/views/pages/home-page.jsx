HomePage = React.createClass({
  mixins: [TransitionMixin],
  getInitialState() {
    return {
      error: false,
      isLoading: false
    }
  },
  handleSubmit(e) {
    e.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();
    var teamId = $('#teamId').val();

    var error = Validate.chain(
        Validate.check(ValidateNotEmpty, email, "Email is required"),
        Validate.check(ValidateNotEmpty, password, "Password is required"),
        Validate.check(ValidateNotEmpty, teamId, "Team ID is required")
    );

    if (error !== true) {
      this.setState({error: error});
      return;
    } else {
      this.setState({error: null});
    }

    this.setState({ isLoading : true });

    dispatch(new SignInPromiseCommand(), email, password, teamId).then(function(result) {
      // success
      FlowRouter.go('Dashboard');
    }.bind(this)).fail(function(err) {
      // error
      this.setState({ error: err });
      this.setState({ isLoading: false });
    }.bind(this));
  },
  render() {
    if (this.state.isLoading) {
      return <AppLoadingComponent />;
    }

    return (
      <div className="event">
        <div className="row">
          <div className="col s12 m8 offset-m2">

            <h2>Sign In!</h2>

            <div className="row">
              <form className="col s10 offset-s1" onSubmit={this.handleSubmit}>
                <ErrorComponent message={this.state.error} />
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="text" name="email" className="validate" />
                    <label forHtml="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="password" type="password" name="password" className="validate" />
                    <label forHtml="password">Password</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="teamId" type="text" name="teamId" className="validate" />
                    <label forHtml="teamId">Team ID</label>
                  </div>

                  <div className="input-field col s12 center">
                    <button className="btn  waves-effect waves-light" type="submit" name="action">Sign In
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
