/** 
 * Verify that the given text is a date, or
 * an empty string since it is not required
 */
ValidateDateNotRequired = function() {
  var validate = function (date) {
    if (date === '') {
      return true;
    }

    var re = new RegExp('([0-9]){4}-([0-9]){2}-([0-9]){2}', 'i');
    return re.test(date);
  };

  return {
    validate: validate
  }
};
