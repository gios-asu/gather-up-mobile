// Meteor.startup(function () {
//   var container = document.createElement('div');
//   container.id = 'react-container';
//   document.body.appendChild(container);

//   Tracker.autorun(function () {
//     ReactDOM.render(<App content={FlowRouter.getRouteName()}></App>, container);
//   });
// });

FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <HomePage transitionType="slide-right" />
    });
  },
  name: "HomePage"
});

FlowRouter.route('/signup', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <SignUpPage />
    });
  },
  name: "SignUp"
});
