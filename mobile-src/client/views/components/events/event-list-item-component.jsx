EventListItemComponent = React.createClass({
  render() {
    var headerClasses = "collapsible-header ";
    var $$date  = '';
    var $$time  = '';
    var $$notes = '';

    if (this.props.isActive) {
      headerClasses += " active";
    }

    if (this.props.event.date) {
      $$date = (
        <span className="event__list-item__badge">
          <i className="material-icons">perm_contact_calendar</i> {__.Date.humanize(this.props.event.date, 'YYYY-MM-DD') }
        </span>
      );
    }

    if (this.props.event.time) {
      $$time = (
        <span className="event__list-item__badge">
          <i className="material-icons">query_builder</i> {__.Time.humanize(this.props.event.time) }
        </span>
      );
    }

    if (this.props.event.notes) {
      $$notes = (
        <span className="event__list-item__badge">
          <i className="material-icons">mode_edit</i> {this.props.event.notes}
        </span>
      );
    }

    return (
      <li>
        <div className={headerClasses}>
          <EventFullStatusComponent event={this.props.event} /> {this.props.event.title} 
        </div>
        <div className="collapsible-body">
          <p>
            <EventSelfStatusComponent event={this.props.event} />
            <EventSignInStatusComponent event={this.props.event} />
            {$$date}
            {$$time}
            {$$notes}
          </p>
        </div>
      </li>
    );
  }  
});
