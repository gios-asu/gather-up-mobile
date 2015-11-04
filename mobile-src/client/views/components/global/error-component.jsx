ErrorComponent = React.createClass({
  render() {
    var errors = this.props.message;
    var $$error = '';

    if (errors) {
      var $$error = (
        <div className="card-panel red lighten-1">
          <span className="white-text">
            <ul>
              {errors.map(function(error, i) {
                return <li key={i}>{error}</li>;
              })}
            </ul>
          </span>
        </div>
      );
    }

    return (
      <div className="row">
        {$$error}
      </div>
    );
  }
});
