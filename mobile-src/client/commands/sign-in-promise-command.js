/** 
 * Ask for the sign in creditials!
 *
 * Will return a promise since it needs to ask the server
 */
SignInPromiseCommand = function() {
  var _signIn = function (user) {
    var deferred = Q.defer();
    var url = Meteor.settings.public.api.endpoint +
              Meteor.settings.public.api.version +
              '/sign_in';

    $.post(url, {
      email: user.email,
      password: user.password,
      team_id: user.teamId
    }, function (result) {
      if (result.success && result.success === 'false') {
        deferred.reject(new Error('Wrong credentials'));
        return;
      }

      deferred.resolve(result)
    }).fail(function() {
      deferred.reject(new Error('Wrong credentials'));
    });

    return deferred.promise;
  }

  var handle = function (email, password, teamId) {
    var promise = null;
    var user = {
        email : email,
        password: password,
        teamId: teamId
    };

    promise = _signIn(user);

    return promise.then(function afterAuthTokenGetPublicKey(result) {
      var authToken = result.token;

      return dispatch(new PublicKeyPromiseCommand(), authToken);
    }).then(function afterPublicKeyLogin(result) {
      var authToken = result.token;
      var publicKey = result.publicKey;

      login(email, teamId, authToken, publicKey);
    });
  };

  return {
    handle: handle
  };
};
