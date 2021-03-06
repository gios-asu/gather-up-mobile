/** 
 * Ask for the private key!
 *
 * Will return a promise since this will require asking
 * the central server!
 */
PublicKeyPromiseCommand = function () {
  var _publicKey = function(token) {
    var deferred = Q.defer();
    var url = Meteor.settings.public.api.endpoint +
              Meteor.settings.public.api.version +
              '/public_key';

    $.post(url, {
      token: token
    }, function (result) {
      if (result.success && result.success === 'false') {
        deferred.reject(new Error('Wrong credentials'));
        return;
      }

      deferred.resolve(result);
    }).fail(function() {
      deferred.reject(new Error('Wrong credentials'));
    });

    return deferred.promise;
  }

  /**
   * Return a promise that will have a token and a public key
   * 
   * @param  String token The auth token for the signed in user
   * @return Promise      This promise will return a token and a publickey pair
   */
  var handle = function (token) {
    var promise = _publicKey(token);

    return promise.then(function(result) {
      return {
        token: token,
        publicKey: result.public_key
      }
    });
  };

  return {
    handle: handle
  };
};
