SendSignInCommand = function () {
  var _url = Meteor.settings.public.api.endpoint + 
             Meteor.settings.public.api.version +
            '/sign_up';

  var _token = authToken();

  var handle = function (data, deferred, job) {
    var event = EventsCollection.findOne({
      _id: data.eventId
    });

    if (event == null || ! event.synced === true) {
      deferred.reject(new Error('This sign up\'s event has not been synced'));
      return;
    }

    var options = {
      event_id: event.realId,
      token: _token,
      cipher_sign_up: data.encryptedSignIn
    };


    $.post(_url, options, function (result) {
      if (result.success && result.success === 'false') {
        deferred.reject(new Error('Failed to create sign in'));
        return;
      }

      // set the sign in as synced
      EventsCollection.update({
        _id: data.eventId,
        'signIns.encryptedSignIn': data.encryptedSignIn
      }, {
        $set: {
          'signIns.$.synced': true
        }
      });

      save(EventsCollection);
      job.success();
      deferred.resolve(result);
    }).fail(function() {
      deferred.reject(new Error('Failed to create sign in'));
    });
  }

  return {
    handle: handle
  };
};
