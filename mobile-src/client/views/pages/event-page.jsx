EventPage = React.createClass({
  mixins: [TransitionMixin],
  render() {
    return (
      <div className="event">
        <div className="row">
          <div className="col s12 m8 offset-m2">

            <h2>Gather Sign Ins</h2>

            <p>
              Enter your event information. Once you are done,
              click <i>Start Gathering Sign Ins</i> to lock the
              app and start gathering sign ups.
            </p>

            <EventFormComponent />
          </div>
        </div>
      </div>
    );
  }
});