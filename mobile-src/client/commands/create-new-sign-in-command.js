/** 
 * Create a new sign in
 *
 * Will encrypt the payload and also create a job
 */
CreateNewSignInCommand = function () {
  /**
   * Insert the sign in and create a job
   * @param  String eventId    The mongo id of the parent event object
   * @param  String publicKey  The public key to encrypt the sign in data
   * @param  Object signInData The raw sign in data
   * @return
   */
  var handle = function (eventId, publicKey, signInData) {
    // Encrypt the sign in data
    var encryptedPayload = dispatch(
        new EncryptSignInCommand(),
        publicKey,
        JSON.stringify(signInData)
    );

    // Update the given event in the database
    EventsCollection.update({
      _id: eventId
    }, {
      $push: {
        signIns: {
          encryptedSignIn: encryptedPayload,
          synced: false  
        }
      }
    });

    // Create a job
    JobsCollection.insert({
      job: 'sign-in',
      data: {
        eventId: eventId,
        encryptedSignIn: encryptedPayload
      }
    });

    // Save the touched collections
    save(JobsCollection);
    save(EventsCollection);
  };

  return {
    handle: handle
  };
};
