SignUpFormComponent = React.createClass({
  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">Your first name</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Your last name</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">email</i>
            <input id="name" type="email" className="validate" />
            <label htmlFor="name">Your email</label>
          </div>
        </div>
        <a className="waves-effect waves-light btn-large" href="#!">
          <i className="material-icons left">assignment</i>
          Sign In
        </a>
      </form>
    );
  }
});
