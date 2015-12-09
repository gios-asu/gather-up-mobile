Server.post('/api/v1/sign_in', function(request, response) {
  var data = request.body;

  if (Meteor.settings && Meteor.settings.public.env === 'dev') {
    if (data.email === Meteor.settings.public.testData.user.email &&
        data.password === Meteor.settings.public.testData.user.password &&
        data.team_id === Meteor.settings.public.testData.user.team_id ) {

      response.send( {
        token: Meteor.settings.public.testData.authToken
      } );
      return;
    }
  }

  response.send( {
    success: 'false'
  } );
});

Server.post('/api/v1/public_key', function(request, response) {
  var data = request.body;

  if (Meteor.settings && Meteor.settings.public.env === 'dev') {
    if (data.token === Meteor.settings.public.testData.authToken) {

      response.send( {
        public_key: Meteor.settings.public.testData.publicKey
      } );
      return;
    }
  }

  response.send( {
    success: 'false'
  } );
});

Server.post('/api/v1/event', function (request, response) {
  var data = request.body;

  if (Meteor.settings && Meteor.settings.public.env === 'dev') {
    if (data.token === Meteor.settings.public.testData.authToken) {
      response.send( {
        event_id: +new Date()
      } );
      return;
    }
  }

  response.send( {
    success: 'false'
  } );
});

Server.post('/api/v1/sign_up', function (request, response) {
  var data = request.body;

  if (Meteor.settings && Meteor.settings.public.env === 'dev') {
    if (data.token === Meteor.settings.public.testData.authToken) {
      response.send( {
        success: 'true'
      } );
      return;
    }
  }

  response.send( {
    success: 'false'
  } );
})