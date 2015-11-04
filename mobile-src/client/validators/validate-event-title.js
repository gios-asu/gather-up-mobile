ValidateEventTitle = function() {
  var validate = function (title) {
    if (title === '') {
      return 'An event title is required';
    }

    return true;
  };

  return {
    validate: validate
  }
};
