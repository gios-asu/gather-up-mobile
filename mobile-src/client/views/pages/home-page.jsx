HomePage = React.createClass({
  mixins: [TransitionContent],
  render() {
    return (
      <div className="home">
        <h2>Get Started</h2>

        <div className="row">
          <form className="col m6 offset-m3">
            <div className="row">
              <div className="input-field col s12">
                <i className="large material-icons prefix">label</i>
                <input id="event_title" type="text" className="validate" />
                <label htmlFor="event_title">Event Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="large material-icons prefix">mode_edit</i>
                <textarea id="event_notes" className="materialize-textarea"></textarea>
                <label htmlFor="event_notes">Notes</label>
              </div>
            </div>
          </form>
        </div>

        <a className="waves-effect waves-light btn-large" href="/signup">
          <i className="material-icons left">assignment</i>
          Start Gathering Sign Ups
        </a>
      </div>
    );
  }  
});
