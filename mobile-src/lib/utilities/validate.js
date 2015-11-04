Validate = {
  check: function(validator) {
    var v = new validator();

    var args = Array.prototype.slice.call(arguments);
  
    return v.validate.apply(this, args.slice(1));
  }
};

