let { defineSupportCode, Status } = require('cucumber');
let { writeScreenShot, writeJsonObject } = require('../../lib/util');

defineSupportCode(function ({ After }) {
  After(function (testCase) {
    if (testCase.result.status === Status.FAILED) {
        // Attaching screenshot
        return writeScreenShot(this.attach);
    }
  });
});
