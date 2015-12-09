JobQueue = function () {
  var _success = function (job) {
    JobsCollection.remove(job._id);
    save(JobsCollection);
  };

  var handleOldestJob = function () {
    var deferred = Q.defer();

    var job = JobsCollection.findOne({}, {createdAt: -1});

    

    if (job == null) {
      deferred.reject(new Error('No jobs in queue'));
    } else {
      job.success = function () {
        _success(this);
      }.bind(job);

      if (job.job === 'event') {
        dispatch(new SendEventCommand(), job.data, deferred, job);
      } else if (job.job === 'sign-in') {
        dispatch(new SendSignInCommand(), job.data, deferred, job);
      }
    }

    return deferred.promise;
  };

  return {
    handleOldestJob: handleOldestJob
  };
};
