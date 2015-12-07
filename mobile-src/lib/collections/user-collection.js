UserCollection = new DumbCollection('user');

login = function(email, teamId, authToken, publicKey) {
  logout();

  var id = UserCollection.insert({
    email: email,
    teamId: teamId,
    authToken: authToken,
    publicKey: publicKey
  });

  save(UserCollection);

  return id;
}

logout = function () {
  UserCollection.remove({});
  save(UserCollection);
}

isLoggedIn = function () {
  return UserCollection.find({}).fetch().length > 0;
}