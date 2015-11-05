AdminModalComponent = React.createClass({
  render() {
    return (
      <div>
        <div className="modal-content">
          <h4>Admin Panel</h4>
          <p>Please enter your password to unlock the app:</p>

          <AdminPasswordComponent
              onSuccess={this.onSuccess}
              onFailure={this.onFailure} />
        </div>
        <div className="modal-footer">
          <a href="#!" className="waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
})