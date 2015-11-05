AdminPasswordComponent = React.createClass({
  getInitialState() {
    return {
      enteredPassword: []
    }
  },
  handleClick(e) {
    e.preventDefault();
    var $target = $(e.target);
    var password = this.state.enteredPassword;

    password.push($target.find('span').text());

    if (password.length === 4) {      
      // TODO implement a timeout and check the password
      // if success, run success callback
      // if failure, run failure callback
      // then no matter what, reset the entered password
      
      this.setState({
        enteredPassword: []
      })
    } else {
      this.setState({
        enteredPassword: password
      });
    }
  },
  handleBackspace(e) {
    e.preventDefault();

    var password = this.state.enteredPassword;

    password.pop();

    this.setState({
      enteredPassword: password
    });
  },
  render() {
    return (
      <div className="admin__password">
        <div className="admin__password-circles" data-length={this.state.enteredPassword.length}>
          <div className="admin__password-circles-circle"></div>
          <div className="admin__password-circles-circle"></div>
          <div className="admin__password-circles-circle"></div>
          <div className="admin__password-circles-circle"></div>
        </div>

        <div className="admin__password-keypad">
          <div className="row">
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>1</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>2</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>3</span>
            </a>
          </div>
          <div className="row">
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>4</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>5</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>6</span>
            </a>
          </div>
          <div className="row">
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>7</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>8</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>9</span>
            </a>
          </div>
          <div className="row">
            <span className="admin__password-keypad-placeholder">
            </span>
            <a
                href="#!"
                className="admin__password-keypad-key waves-effect waves-green"
                onClick={this.handleClick}>
              <span>0</span>
            </a>
            <a
                href="#!"
                className="admin__password-keypad-backspace waves-effect waves-green"
                onClick={this.handleBackspace}>
              <span><i className="material-icons">backspace</i></span>
            </a>
            
          </div>
        </div>
      </div>
    );
  }
});
