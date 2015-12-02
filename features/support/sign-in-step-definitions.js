module.exports = function() {
  this.Given(/^I have visited the Home Page\.$/, function () {
    browser.url('http://localhost:3000');
  });

  this.When(/^I sign in with "([^"]*)", "([^"]*)", "([^"]*)"$/, function (email, password, teamId) {
    browser.setValue('input[name="email"]', email);
    browser.setValue('input[name="password"]', password);
    browser.setValue('input[name="teamId"]', teamId);
    browser.keys(['Enter']);
  });

  this.Then(/^I see "([^"]*)"$/, function (text) {
    browser.waitForExist('.loader', null, true);

    var source = browser.getSource();
    
    expect(source).toContain(text);
  });

  this.Then(/^I see the following error: "([^"]*)"$/, function (error) {
    var source = browser.getSource();
    
    expect(source).toContain(error);
  })
};
