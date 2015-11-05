AdminButtonComponent = React.createClass({
  getInitialState() {
    return {
      modalIsOpen: false
    };
  },
  handleClick(e) {
    this.setState({
      modalIsOpen: true
    });
  },
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  },
  render() {
    // Set the ReactModel app element
    //
    // This must be called before using the ReactModal
    ReactModal.setAppElement(document.getElementById('react-root'));

    var modalStyles = {
      overlay : {},
      content: {}
    };

    return (
      <div className="admin__modal-button">
        <a
            className="btn-floating btn-large waves-effect waves-dark btn-flat grey lighten-3"
            onClick={this.handleClick}>
          <i className="material-icons grey-text text-darken-1">perm_identity</i>
        </a>
        <ReactModal
            style={modalStyles}
            onRequestClose={this.closeModal}
            isOpen={this.state.modalIsOpen}>
          <AdminModalComponent />
        </ReactModal>
      </div>
    );
  }
});
