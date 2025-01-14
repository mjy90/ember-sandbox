import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | theme-toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ThemeToggle />`);

    assert.dom('.theme-toggle').exists();
    assert.dom('.theme-toggle svg.fa-moon').exists();
    assert.dom('.theme-toggle .switch').exists();
    assert.dom('.theme-toggle svg.fa-sun').exists();
  });
});
