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
      content: <SignUpPage title="Welcome!" />
    });
  },
  name: "SignUp"
});

FlowRouter.route('/thankyou', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <ThankYouPage title="Thank You!" />
    });
  },
  name: "ThankYou"
});
