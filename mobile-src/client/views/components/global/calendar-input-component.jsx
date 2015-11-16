CalendarInputComponent = React.createClass({
  componentDidMount() {
    var that = this;

    var options = {
      selectMonths: true,
      min: this.props.min,
      max: this.props.max,
      format: 'yyyy-mm-dd',
      onClose: function () {
        if ( that.props.onChange ) {
          that.props.onChange({
            target: $('#' + that.props.inputId)[0]
          });
        }
      },
      onSet: function (context) {
        if (contect && contect.select) {
          this.close();
        }
      }
    };

    if (this.props.selectYears !== undefined) {
      options.selectYears = this.props.selectYears;
    } else if (this.props.selectYears == undefined) {
      options.selectYears = 3;
    } else {
      // Do nothing
    }
    if (this.props.today !== undefined ) {
      options.today = this.props.today;
    } else if (this.props.today == undefined) {
      // Do nothing
    } else {
      options.today = this.props.today;
    }

    $('#' + this.props.inputId).pickadate(options);
  },
  render() {
    return (
      <input
        id={this.props.inputId}
        type="date"
        className="datepicker"
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
        autoComplete={this.props.autoComplete} />
    );
  }  
});
