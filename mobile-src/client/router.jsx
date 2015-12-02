function requireLoggedIn(context, redirect) {
  if (Meteor.isClient) {
    if (isLoggedIn() !== true) {
      redirect('/');
    }
  }
}

FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <HomePage transitionType='slide-right' />
    });
  },
  name: 'HomePage'
});

var adminRoutes = FlowRouter.group({
  prefix: '',
  triggersEnter: [requireLoggedIn],
  name: 'loggedIn'
});

adminRoutes.route('/dashboard', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <DashboardPage transitionType='slide-right' />
    });
  },
  name: 'Dashboard'
});

adminRoutes.route('/event', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <EventPage />,
      allowGoBack: true
    });
  },
  name: 'Event'
});

adminRoutes.route('/signup', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <SignUpPage title='Welcome!' />
    });
  },
  name: 'SignUp'
});

adminRoutes.route('/thankyou', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <ThankYouPage title='Thank You!' />
    });
  },
  name: 'ThankYou'
});

adminRoutes.route('/view', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <ViewPage />,
      allowGoBack: true
    });
  },
  name: 'View'
});
