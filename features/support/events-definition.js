module.exports = function() {
  this.When(/^I click on Start Gathering Sign Ins$/, function () {
    browser.leftClick('#start-gathering-sign-ins');
  });

  this.Then(/^I fill out the event form with "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, function (title, date, time, notes) {
    browser.waitForExist('input[id="event_title"]');
    browser.pause(1000);
    browser.setValue('input[id="event_title"]', title);

    browser.leftClick('input[id="event_date"]');
    browser.leftClick('.picker__today');

    browser.leftClick('input[id="event_time"]');
    browser.keys(time.split(''));

    browser.setValue('textarea[id="event_notes"]', notes);
    browser.keys(['Enter']);
  });

  this.Then(/^I fill out the sign in form with "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, function (firstName, lastName, email, birthDate) {
    this.pending();
  })
};
