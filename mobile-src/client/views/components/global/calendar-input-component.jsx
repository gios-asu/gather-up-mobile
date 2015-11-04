CalendarInputComponent = React.createClass({
  componentDidMount() {
    $('#' + this.props.inputId).pickadate({
      selectMonths: true,
      selectYears: 2
    });
  },
  render() {
    return (
      <input
        id={this.props.inputId}
        type="date"
        className="datepicker"
        defaultValue={this.props.defaultValue} />
    );
  }  
});
