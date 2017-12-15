let { defineSupportCode } = require('cucumber');
defineSupportCode(function ({ Given, Then , When}) {

  let artProject = browser.pages.ArtProject;

  Given('I go to yousuf art project website', function () {
    return browser.get('https://ybhuiyan.github.io/');
  });

  Then('I should see art project main logo', function () {
    return this.expect(artProject.artPageLogo.isDisplayed())
      .to.eventually.equal(true);
  });

  When ('I click on contact-me tab', function () {
    return artProject.contactMe.click();
  });

  When ('I land on contact-me page with title', function (title) {
    return this.expect(artProject.contactMePage.getText())
      .to.eventually.equal(title);
  });

});
