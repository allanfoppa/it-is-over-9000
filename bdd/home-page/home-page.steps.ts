import assert from 'assert';
import { Given, Then } from '@cucumber/cucumber';
import type { CharactersResponse } from '../../src/types/characters-response';

interface WorldContext {
  response?: Response;
  data?: CharactersResponse;
}

const BASE_URL = 'https://dragonball-api.com/api';

Given('the user opens the home page', async function (this: WorldContext) {
  this.response = await fetch(`${BASE_URL}/characters`);
});

Then('a list of characters should be displayed', function (this: WorldContext) {
  assert.ok(this.data);
  assert.ok(Array.isArray(this.data.items));
});

Then('the list should not be empty', function (this: WorldContext) {
  assert.ok(this.data!.items.length > 0);
});

Then('each character should have a name and image', function (this: WorldContext) {
  this.data!.items.forEach((char) => {
    assert.ok(typeof char.name === 'string' && char.name.length > 0);
    assert.ok(typeof char.image === 'string' && char.image.length > 0);
  });
});

Then('the user can navigate to the next page', function (this: WorldContext) {
  assert.ok(this.data!.links.next);
});
