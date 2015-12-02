UserCollection = new DumbCollection('user');

login = function(email, teamId, authToken) {
  logout();

  return UserCollection.insert({
    email: email,
    teamId: teamId,
    authToken: authToken
  });
}

logout = function () {
  UserCollection.remove({});
}

isLoggedIn = function () {
  return UserCollection.find({}).fetch().length > 0;
}