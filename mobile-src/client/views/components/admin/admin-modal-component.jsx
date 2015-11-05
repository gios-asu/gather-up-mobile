AdminModalComponent = React.createClass({
  onSuccess() {
    console.log('Success');

    FlowRouter.go('/');
  },
  onFailure() {
    console.log('Failed');
  },
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
      </div>
    );
  }
})