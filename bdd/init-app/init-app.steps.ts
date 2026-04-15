import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

Given('the user opens the home page', function () {
  // open app (you can integrate with Cypress or Playwright)
});

When('the page has finished loading', function () {
  // wait for load / API call
});

Then('a list of characters should be displayed', function () {
  // assertion here
  assert.ok(true);
});

Then('the list should not be empty', function () {
  // assertion here
  assert.ok(true);
});

Then('each character should have a name and image', function () {
  // assertion here
  assert.ok(true);
});

Then('the user can navigate to the next page', function () {
  // assertion here
  assert.ok(true);
});
