module.exports = function () {
  this.When(/^I click on Logout$/, function () {
    browser.waitForExist('.logout');
    browser.leftClick('.logout');
  });  
};
