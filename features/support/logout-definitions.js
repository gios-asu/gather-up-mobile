module.exports = function () {
  this.When(/^I click on Logout$/, function () {
    browser.waitForExist('.logout');
    browser.pause(1000);
    browser.leftClick('.logout');
  });  
};
