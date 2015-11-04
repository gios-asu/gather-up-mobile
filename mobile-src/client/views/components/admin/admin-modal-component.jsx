AdminModalComponent = React.createClass({
  handleClick(e) {
    // TODO
  },
  render() {
    return (
      <div className="admin__modal-button">
        <a
            className="btn-floating btn-large waves-effect waves-dark btn-flat grey lighten-3"
            onClick={this.handleClick}>
          <i className="material-icons grey-text text-darken-1">perm_identity</i>
        </a>
      </div>
    );
  }
});
