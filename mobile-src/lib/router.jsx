FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <HomePage />
    });
  },
  name: "Home"
});

FlowRouter.route('/signup', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <SignUp />
    });
  },
  name: "SignUp"
});
