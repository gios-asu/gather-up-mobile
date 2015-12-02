UserCollection = new DumbCollection('user');

login = function(email, teamId, authToken, publicKey) {
  logout();

  return UserCollection.insert({
    email: email,
    teamId: teamId,
    authToken: authToken,
    publicKey: publicKey
  });
}

logout = function () {
  UserCollection.remove({});
}

isLoggedIn = function () {
  return UserCollection.find({}).fetch().length > 0;
}