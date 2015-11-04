SignUpFormComponent = React.createClass({
  handleChange(e) {
    var $target = $(e.target);
    var check   = false;

    if ($target.is('#first_name') || $target.is('#last_name')) {
      check = Validate.check(ValidateNotEmpty, $target.val());
    } else if ($target.is('#email')) {
      check = Validate.check(ValidateEmail, $target.val());
    }

    var $i = $target.parent().find('i');
    if (check === true) {
      var old = $i.text();
      $i.data('old-content', old).text('check').addClass('good');
    } else {
      $i.text($i.data('old-content')).addClass('bad');
    }
  },
  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="first_name" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="first_name">Your first name</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="last_name" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="last_name">Your last name</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">email</i>
            <input id="email" type="email" className="validate" onChange={this.handleChange} />
            <label htmlFor="email">Your email</label>
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
