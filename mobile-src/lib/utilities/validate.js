Validate = {
  check: function(validator) {
    var v = new validator();

    var args = Array.prototype.slice.call(arguments);
  
    return v.validate.apply(this, args.slice(1));
  },
  chain: function() {
    var args = Array.prototype.slice.call(arguments);

    var errorMessages = args.filter(function(a) {
      if (a === true) {
        return false;
      } else {
        return a;
      }
    });

    if (errorMessages.length === 0) {
      return true;
    }

    return errorMessages;
  }
};

