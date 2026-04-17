import assert from 'assert';
import { Given, Then } from '@cucumber/cucumber';
import type { Character } from '../../src/types/character';

interface WorldContext {
  response?: Response;
  data?: Character;
}

const BASE_URL = 'https://dragonball-api.com/api';

Given('the user opens the details page', async function (this: WorldContext) {
  this.response = await fetch(`${BASE_URL}/characters/10`);
});

Then('the character details should be displayed', function (this: WorldContext) {
  assert.ok(this.data);
  assert.ok(typeof this.data.name === 'string');
});

Then('the character should have a character attributes', function (this: WorldContext) {
  const char = this.data!;

  assert.ok(char.name.length > 0);
  assert.ok(char.image.length > 0);
  assert.ok(char.description.length > 0);
  assert.ok(char.race.length > 0);
  assert.ok(char.gender.length > 0);
  assert.ok(char.maxKi.length > 0);
  assert.ok(char.affiliation.length > 0);
});
