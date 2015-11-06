ViewPage = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    $(this.refs.accordian).collapsible({});
  },
  handleEventClick(e) {
    e.preventDefault();

    FlowRouter.go('/event');
  },
  getMeteorData() {
    return {
      events: EventsCollection.find({}).fetch()
    }
  },
  render() {
    var $$empty = '';

    if (this.data.events.length === 0) {
      $$empty = (
        <div className="card-panel grey lighten-2">
          <span className="black-text">
            <p className="center">You do not have any events or sign ins.</p>

            <a className="waves-effect waves-light large btn-large btn-block" href="#!" onClick={this.handleEventClick}>
              <i className="material-icons left">assignment</i>
              Start Gathering Sign Ins
            </a>
          </span>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            {$$empty}
            <ul ref="accordian" className="collapsible popout" data-collapsible="accordion">
              {this.data.events.map(function(event, i){
                var isFirst = i === 0;
                return <EventListItemComponent event={event} key={i} isActive={isFirst} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
