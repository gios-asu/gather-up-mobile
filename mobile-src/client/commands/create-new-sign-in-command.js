/** 
 * Create a new sign in
 *
 * Will encrypt the payload and also create a job
 */
CreateNewSignInCommand = function () {
  var handle = function (eventId, publicKey, signInData) {
    var encryptedPayload = dispatch(
        new EncryptSignInCommand(),
        publicKey,
        JSON.stringify(signInData)
    );
    
    EventsCollection.update({
      _id: eventId
    }, {
      $push: {
        encryptedSignIn: encryptedPayload
      }
    });

    JobsCollection.insert({
      job: 'sign-in',
      data: {
        eventId: eventId,
        encryptedPayload: encryptedPayload
      }
    });

    save(JobsCollection);
    save(EventsCollection);
  };

  return {
    handle: handle
  };
};
