/**
 * Verify that the given test is a date, and
 * don't allow empty values
 */
ValidateDate = function() {
  var validate = function (date) {
    if (date === '') {
      return 'An date is required';
    }

    var validator = new ValidateDateNotRequired();

    return validator.validate(date);
  };

  return {
    validate: validate
  }
};
