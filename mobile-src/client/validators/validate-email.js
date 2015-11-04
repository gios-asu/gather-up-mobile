/**
 * Verify that the given text is an
 * email.
 */
ValidateEmail = function() {
  var validate = function (email) {
    var re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 'i');
    if (re.test(email)) {
      return true;
    } else {
      return 'Please enter a valid email address';
    }
  };

  return {
    validate: validate
  }
};