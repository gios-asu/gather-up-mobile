SendEventCommand = function () {
  var _url = Meteor.settings.public.api.endpoint +
              Meteor.settings.public.api.version +
              '/event';

  var _token = authToken();
  data.token = _token

  var handle = function (data, deferred, job) {
    $.post(url, data, function (result) {
      if (result.success && result.success === 'false') {
        deferred.reject(new Error('Failed to create event'));
        return;
      }

      // add the real event id to the database
      EventsCollection.update({
        _id: data.id
      }, {
        $set: {
          realId: result.event_id
        }
      });

      save(EventsCollection);
      _success(job);

      deferred.resolve(result);
    }).fail(function() {
      deferred.reject(new Error('Failed to create event'));
    });
  };

  return {
    handle: handle
  }
}