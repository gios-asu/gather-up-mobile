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
