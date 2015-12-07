module.exports = function() {
  this.Given(/^I am logged in$/, function () {
    browser.url('http://localhost:3000/');

    browser.setValue('input[name="email"]', 'test@test.com');
    browser.setValue('input[name="password"]', 'test');
    browser.setValue('input[name="teamId"]', '1');
    browser.keys(['Enter']);
  });

  this.When(/^I login with "([^"]*)", "([^"]*)", "([^"]*)"$/, function (email, password, teamId) {
    browser.setValue('input[name="email"]', email);
    browser.setValue('input[name="password"]', password);
    browser.setValue('input[name="teamId"]', teamId);
    browser.keys(['Enter']);
  });
};
