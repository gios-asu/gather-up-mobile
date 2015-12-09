EventSignInStatusComponent = React.createClass({
  render() {
    // Checkbox if event is synced and all sign ins are synced
    var synced = true;
    var numberSynced = 0;
    var total = this.props.event.signIns.length;

    for (var i = 0; i < this.props.event.signIns.length; i++) {
      if (this.props.event.signIns[i].synced !== true) {
        synced = false;
      } else {
        numberSynced++;
      }
    }

    var $$message = '';

    if (synced) {
      $$message = (
        <i className="fa fa-check-circle green-text"></i>
      );
    } else {
      $$message = (
        <i className="fa fa-circle-o yellow-text"></i>
      );
    }

    return (
      <span className="event__list-item__badge">
        {$$message} {numberSynced} of {total} Sign Ins Synced
      </span>
    );
  }
});