PublicKeyPromiseCommand = function () {
  var _testPublicKey = function(token) {
    var deferred = Q.defer();

    // Simulate latency
    Meteor.setTimeout(function () {
      deferred.resolve({
        public_key: Meteor.settings.public.testData.publicKey
      });
    }, 1000);

    return deferred.promise;
  }

  var _prodPublicKey = function(token) {
    var deferred = Q.defer();
    var url = Meteor.settings.public.api.endpoint +
              Meteor.settigns.public.api.version +
              '/public_key'

    $.post(url, {
      token: token
    }, function (result) {
      deferred.resolve(result)
    });

    return defered.promise;
  }

  var handle = function (token) {
    var promise = null;

    if (Meteor.settings && Meteor.settings.public.env === 'dev') {
      if (token === Meteor.settings.public.testData.authToken) {
        promise = _testPublicKey(token)
      }
    }

    if (promise === null) {
      _prodPublicKey(token);
    }

    return promise.then(function(result) {
      return {
        token: token,
        publicKey: result.public_key
      }
    });
  }

  return {
    handle: handle
  };
};
