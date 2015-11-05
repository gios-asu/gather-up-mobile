ValidatePassword = function () {
  var validate = function(password) {
    // Verify that it is a number
    
    if (Number.isInteger(parseInt(password, 10))) {
      if ((""+password).length !== 4) {
        return "Your password must be 4 numbers long";
      }
    } else {
      return "Your password must be 4 numbers";
    }

    return true;
  }

  return {
    validate: validate
  }
};