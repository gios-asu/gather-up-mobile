/** 
 * Make sure that the event title is
 * not empty
 */
ValidateEventTitle = function() {
  var validate = function (title) {
    var validator = new ValidateNotEmpty();
    return validator.validate(title, 'An event title is required');
  };

  return {
    validate: validate
  }
};
