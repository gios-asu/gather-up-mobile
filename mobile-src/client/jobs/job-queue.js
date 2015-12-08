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
    } else if (job.job === 'event') {
      dispatch(new SendEventCommand(), job.data, deferred, job);
    }

    return deferred.promise;
  };

  return {
    handleOldestJob: handleOldestJob
  };
};
