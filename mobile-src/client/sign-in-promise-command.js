SignInPromiseCommand = function() {
  var _testSignIn = function (user) {
    var deferred = Q.defer();

    // Simulate latency
    Meteor.setTimeout(function () {
      deferred.resolve({
        token: Meteor.settings.public.testData.authToken
      });
    }, 1000);

    return deferred.promise;
  }

  var _prodSignIn = function (user) {
    var deferred = Q.defer();
    var url = Meteor.settings.public.api.endpoint +
              Meteor.settigns.public.api.version +
              '/sign_in'

    $.post(url, {
      email: user.email,
      password: user.password,
      team_id: user.teamId
    }, function (result) {
      deferred.resolve(result)
    });

    return defered.promise;
  }

  var handle = function (email, password, teamId) {
    var promise = null;
    var user = {
        email : email,
        password: password,
        teamId: teamId
    };

    if (Meteor.settings && Meteor.settings.public.env === 'dev') {
      if (_.isEqual(user, Meteor.settings.public.testData.user)) {
        promise = _testSignIn(user)
      }
    }

    if (promise === null) {
      _prodSignIn(user);
    }

    return promise.then(function(result) {
      var authToken = result.token;

      login(email, teamId, authToken);
    });
  }

  return {
    handle: handle
  }
}