/**
 * Verify that the text provided is not
 * empty and is a time
 */
ValidateTime = function() {
  var validate = function (time) {
    if (time === '') {
      return 'An time is required';
    }

    var validator = new ValidateTimeNotRequired();

    return validator.validate(time);
  };

  return {
    validate: validate
  }
};
