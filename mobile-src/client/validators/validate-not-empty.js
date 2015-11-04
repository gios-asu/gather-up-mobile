ValidateNotEmpty = function() {
  var validate = function (text) {
    return text !== '';
  };

  return {
    validate: validate
  }
};
