ValidateNotEmpty = function() {
  var validate = function (text, message) {
    if (text === '') {
      return message || "Please enter some text";
    }

    return true;
  };

  return {
    validate: validate
  }
};
