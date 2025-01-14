import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | switch', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      checked: false,
      size: undefined,
    });

    // Renders as normal
    await render(hbs`<Switch @checked={{this.checked}} @size={{this.size}} />`);

    assert.dom('.switch').exists();
    assert.dom('.switch').hasAttribute('class', 'switch '); // Size class not present
    assert.dom('.switch input[type="checkbox"]:not(:checked)').exists();
    assert.dom('.switch .slider').exists();

    // Checkbox updates
    this.set('checked', true);

    assert.dom('.switch input[type="checkbox"]:checked').exists();

    // Size updates
    this.set('size', 'large');

    assert.dom('.switch').hasClass('large');
  });
});
