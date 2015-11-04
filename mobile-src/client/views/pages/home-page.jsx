HomePage = React.createClass({
  mixins: [TransitionMixin],
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col s12 m6 offset-m3">

            <h2>Get Started</h2>

            <p>
              Enter your event information. Once you are done,
              click <i>Start Gathering Sign Ups</i> to lock the
              app and start gathering sign ups.
            </p>

            <EventFormComponent />
          </div>
        </div>
      </div>
    );
  }  
});
