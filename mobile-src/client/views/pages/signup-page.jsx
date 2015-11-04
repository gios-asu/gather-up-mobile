SignUpPage = React.createClass({
  mixins: [TransitionMixin],
  render() {
    return (
      <div className="signup">
        <h2>Register</h2>

        <div className="row">
          <form className="col s12 m6 offset-m3">
            <div className="row">
              <div className="input-field col s12">
                <i className="large material-icons prefix">label</i>
                <input id="name" type="text" className="validate" />
                <label htmlFor="name">Your name</label>
              </div>
            </div>
          </form>
        </div>

        <a className="waves-effect waves-light btn-large" href="#!">
          <i className="material-icons left">assignment</i>
          Register
        </a>
      </div>
    );
  }  
});
