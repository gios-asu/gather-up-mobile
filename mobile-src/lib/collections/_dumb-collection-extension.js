save = function (db) {
  var syncedCollection = db.find().fetch();
  amplify.store('dumbCollection_' + db.name, syncedCollection);
}
