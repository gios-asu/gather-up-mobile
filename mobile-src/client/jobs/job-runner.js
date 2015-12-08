var _JobRunner = function () {
  var _jobQueue = new JobQueue();
  var _failedAttempts = 0;
  var _lastFailedAttempts = 0;

  /**
   * The runner should wait 
   * @return {[type]} [description]
   */
  var _shouldWait = function () {
    if (_failedAttempts != 0) {
      if (_failedAttempts < 10) {
        _failedAttempts = parseInt(.8 * _failedAttempts);  
      } else {
        _failedAttempts = _failedAttempts - 1;
      }
      
      return true;
    } else {
      return false;
    }
  };

  var _fail = function () {
    _lastFailedAttempts++;
    _failedAttempts = _lastFailedAttempts;
  };

  var _success = function () {
    _failedAttempts = 0;
    _lastFailedAttempts = 0;
  }

  var _interval = function () {
    if ( _shouldWait() ) {
      return null;
    }

    _jobQueue.handleOldestJob().then(
      _success.bind(this)
    ).fail(
      _fail.bind(this)
    );
  };

  var run = function () {
    Meteor.setInterval(_interval.bind(this), 500);
  };

  return {
    run: run
  }
}

JobRunner = new _JobRunner();
JobRunner.run();