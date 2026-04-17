import { When } from '@cucumber/cucumber';

When('the page has finished loading', async function () {
  const json = await this.response!.json();

  this.data = json;

  if (!json) {
    throw new Error('No data returned from API');
  }
});
