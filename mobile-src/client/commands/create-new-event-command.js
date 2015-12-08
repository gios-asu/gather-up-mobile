/**
 * Create a new event
 *
 * Will also insert the event into the job queue
 */
CreateNewEventCommand = function () {
  var handle = function (eventData) {
    var id = EventsCollection.insert(eventData);

    eventData.id = id;

    JobsCollection.insert({
      job: 'event',
      data: eventData
    });

    save(JobsCollection);
    save(EventsCollection);

    return id;
  };

  return {
    handle: handle
  };
};
