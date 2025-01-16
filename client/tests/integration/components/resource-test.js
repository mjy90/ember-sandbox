import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | resource', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      resource: {
        id: 4,
        title: 'Woodworking Classes',
        type: {
          enum: 'SKILL',
          label: 'Skill',
          icon: '',
        },
        exchange: {
          enum: 'MATERIALS',
          label: 'Cost of materials',
          icon: '',
        },
        locationId: 1,
        description: 'Learn to whittle a spoon!',
      },
      location: {
        id: 1,
        name: 'Sweet Potato Homestead',
        address: '123 Main St., Lewiston, ME 04240',
        resourceIds: [1, 2, 3, 4, 5],
      },
    });

    await render(hbs`<Resource @resource={{this.resource}} @location={{this.location}} />`);

    assert.dom('.resource').exists();
    assert.dom('.resource img').hasAttribute('alt', 'Preview image');
    assert.dom('.resource .details .metadata')
      .containsText('Sweet Potato Homestead')
      .containsText('Cost of materials');
    assert.dom('.resource .details .description').hasText('Learn to whittle a spoon!');
    assert.dom('.resource .details button').hasText('Contact Organizer');
  });
});
