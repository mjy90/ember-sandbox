import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'client/tests/helpers';

module('Acceptance | ember sandbox', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2.welcome-text').hasText('Welcome to the Midwest Maine Mutual Aid Network');
    assert.dom('h3.tagline').hasText('Where neighbors lend a hand');

    assert.dom('.nav-bar [data-test="resources-button"]').hasText('Find Resources');
    await click('.nav-bar [data-test="resources-button"]');
    assert.strictEqual(currentURL(), '/resources');
  });
});
