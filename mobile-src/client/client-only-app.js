/**
 * You have to disconnect from the Meteor backend on start up
 * since this is a client only app
 */
Meteor.startup(function() {
  Meteor.disconnect();
});