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

publicKey = function () {
  var user = UserCollection.find({}).fetch();

  if (user.length > 0) {
    return user[0].publicKey;
  }

  return null;
}

authToken = function () {
  var user = UserCollection.find({}).fetch();

  if (user.length > 0) {
    return user[0].authToken;
  }

  return null;
}