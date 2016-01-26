/**
 * Create a new event
 *
 * Will also insert the event into the job queue
 */
CreateNewEventCommand = function () {
  /**
   * Insert the event and create a job
   * @param  Object eventData
   * @return String           The mongo id of the inserted object
   */
  var handle = function (eventData) {
    var id = EventsCollection.insert(eventData);

    // Add the created mongo id to the object
    eventData.id = id;

    // Create a job
    JobsCollection.insert({
      job: 'event',
      data: eventData
    });

    // Save the touched collections
    save(JobsCollection);
    save(EventsCollection);

    return id;
  };

  return {
    handle: handle
  };
};
