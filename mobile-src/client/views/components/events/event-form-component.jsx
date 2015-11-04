EventFormComponent = React.createClass({
  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col s12">
            <i className="large material-icons prefix">label</i>
            <input id="event_title" type="text" className="validate" required />
            <label htmlFor="event_title">Event Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="large material-icons prefix">perm_contact_calendar</i>
            <label htmlFor="event_date">Date</label>
            <CalendarInputComponent inputId="event_date" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="large material-icons prefix">mode_edit</i>
            <textarea id="event_notes" className="materialize-textarea"></textarea>
            <label htmlFor="event_notes">Notes</label>
          </div>
        </div>

        <a className="waves-effect waves-light btn-large" href="/signup">
          <i className="material-icons left">assignment</i>
          Start Gathering Sign Ups
        </a>
      </form>
    );
  }
});
