dispatch = function(command) {
  var args = Array.prototype.slice.call(arguments);
  
  return command.handle.apply(this, args.slice(1));
}
