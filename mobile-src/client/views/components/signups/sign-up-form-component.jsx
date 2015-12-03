SignUpFormComponent = React.createClass({
  getInitialState() {
    return {};
  },
  handleChange(e) {
    var $target = $(e.target);
    var check   = false;

    if ($target.is('#first_name') || $target.is('#last_name')) {
      check = Validate.check(ValidateNotEmpty, $target.val());
    } else if ($target.is('#email')) {
      check = Validate.check(ValidateEmail, $target.val());
    } else if ($target.is('#birthdate') ) {
      check = Validate.check(ValidateDate, $target.val());
    }

    var $i = $target.parent().find('i');
    if (check === true) {
      var old = $i.text();

      if ($i.data('old-content') == null) {
        $i.data('old-content', old);
      }

      $i.text('check').addClass('good').removeClass('bad');
    } else {
      $i.text($i.data('old-content')).addClass('bad').removeClass('good');
    }
  },
  handleSubmit(e) {
    e.preventDefault();

    var firstName = $('#first_name').val();
    var lastName  = $('#last_name').val();
    var email     = $('#email').val();
    var birthdate = $('#birthdate').val();

    var error = Validate.chain(
        Validate.check(ValidateNotEmpty, firstName, 'Please enter a first name'),
        Validate.check(ValidateNotEmpty, lastName, 'Please enter a last name'),
        Validate.check(ValidateEmail, email),
        Validate.check(ValidateDate, birthdate)
    );

    if (error !== true) {
      this.setState({'error': error});
      return;
    } else {
      this.setState({'error': null});
    }

    var event   = Session.get('event');
    var signins = Session.get('signins') || [];

    var signinData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthdate: birthdate
    };

    EventsCollection.update({
      _id: event.id
    }, {
      $push: {
        signins: signinData
      }
    });
    save(EventsCollection);

    FlowRouter.go('/thankyou');
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ErrorComponent message={this.state.error} />
        <div className="row">
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="first_name" type="text" className="validate" onChange={this.handleChange} autoComplete="off" />
            <label htmlFor="first_name">Your first name</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="last_name" type="text" className="validate" onChange={this.handleChange} autoComplete="off" />
            <label htmlFor="last_name">Your last name</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">email</i>
            <input id="email" type="email" className="validate" onChange={this.handleChange} autoComplete="off" />
            <label htmlFor="email">Your email</label>
          </div>
          <div className="input-field col s12">
            <i className="large material-icons prefix">perm_contact_calendar</i>
            <label htmlFor="birthdate">Birth Date</label>
            <CalendarInputComponent
                min={new Date(1900, 0, 1)}
                max={new Date()}
                today={false}
                selectYears={100}
                inputId="birthdate"
                defaultValue={this.state.date}
                onChange={this.handleChange}
                autoComplete="off" />
          </div>
        </div>
        <a className="waves-effect waves-light btn-large" href="#!" onClick={this.handleSubmit}>
          <i className="material-icons left">assignment</i>
          Sign In
        </a>
      </form>
    );
  }
});
