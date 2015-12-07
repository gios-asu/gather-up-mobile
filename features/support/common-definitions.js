module.exports = function() {
  this.Given(/^I initially visit the site$/, function () {
    browser.url('http://localhost:3000');
    browser.localStorage('DELETE');
  });

  this.Given(/^I have visited the Home Page\.$/, function () {
    browser.url('http://localhost:3000');
  });

  this.Given(/^I am on the (.*) page$/, function (className) {
    browser.waitForExist('.' + className);
    browser.pause(1000);
  });


  this.Then(/^I see "([^"]*)"$/, function (text) {
    var source = browser.getSource();
    
    expect(source).toContain(text);
  });

  this.Then(/^I see "([^"]*) after loading"$/, function (text) {
    browser.waitForExist('.loader', null, true);

    var source = browser.getSource();
    
    expect(source).toContain(text);
  });

  this.Then(/^I see the following error: "([^"]*)"$/, function (error) {
    var source = browser.getSource();
    
    expect(source).toContain(error);
  });
};