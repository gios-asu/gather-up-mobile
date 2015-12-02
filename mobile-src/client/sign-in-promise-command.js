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

  var _prodSigIn = function (user) {
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
    if (Meteor.settings && Meteor.settings.public.env === 'dev') {
      var user = {
        email : email,
        password: password,
        teamId: teamId
      };

      if (_.isEqual(user, Meteor.settings.public.testData.user)) {
        return _testSignIn(user).then(function(result) {
          var authToken = result.token;

          login(email, teamId, authToken);
        });
      }
    }

    // TODO

    return null;
  }

  return {
    handle: handle
  }
}