EventFullStatusComponent = React.createClass({
  render() {
    // Checkbox if event is synced and all sign ins are synced
    var synced = true;

    if (this.props.event.synced !== true) {
      synced = false;
    } else {
      for (var i = 0; i < this.props.event.signIns.length; i++) {
        if (this.props.event.signIns[i].synced !== true) {
          synced = false;
          break;
        }
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
      <span>
        {$$message}
      </span>
    );
  }
});