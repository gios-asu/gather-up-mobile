EventListItemComponent = React.createClass({
  render() {
    var headerClasses = "collapsible-header ";

    if (this.props.isActive) {
      headerClasses += " active";
    }

    return (
      <li>
        <div className={headerClasses}>
          {this.props.event.title}
        </div>
        <div className="collapsible-body">
          <p>
            <i className="material-icons">perm_contact_calendar</i> {this.props.event.date}<br/>
            <i className="material-icons">query_builder</i> {this.props.event.time}<br/>
            <i className="material-icons">mode_edit</i> {this.props.event.notes}
          </p>
        </div>
      </li>
    );
  }  
});
