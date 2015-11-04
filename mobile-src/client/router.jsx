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
