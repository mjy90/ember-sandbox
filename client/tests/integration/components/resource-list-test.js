import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const RESOURCE_TYPES = {
  food: {
    enum: 'FOOD',
    label: 'Food',
    icon: '',
  },
  shelter: {
    enum: 'SHELTER',
    label: 'Shelter',
    icon: '',
  },
};

const EXCHANGE_TYPES = {
  free: {
    enum: 'FREE',
    label: 'Free',
    icon: '',
  },
  payWhatYouCan: {
    enum: 'PWYC',
    label: 'Pay what you can',
    icon: '',
  },
};

module('Integration | Component | resource-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      locations: [
        {
          id: 1,
          name: 'Sweet Potato Homestead',
          address: '123 Main St., Lewiston, ME 04240',
        },
        {
          id: 2,
          name: "Old Man George's",
          address: '123 Main St., Lewiston, ME 04240',
        },
      ],
      resources: [
        {
          id: 1,
          title: 'Food',
          type: RESOURCE_TYPES.food,
          exchange: EXCHANGE_TYPES.free,
          locationId: 2,
          description: 'Free meal!',
        },
        {
          id: 2,
          title: 'Rooms',
          type: RESOURCE_TYPES.shelter,
          exchange: EXCHANGE_TYPES.payWhatYouCan,
          locationId: 1,
          description: 'Cheap bedroom!',
        },
      ]
    });

    await render(hbs`
      <ResourceList
        @resources={{this.resources}}
        @locations={{this.locations}}
      />
    `);

    assert.dom('.resources').exists();
    assert.dom('.resources .resource').exists({ count: 2 });

    assert
      .dom('.resources .resource:nth-of-type(1)')
      .containsText('Food')
      .containsText("Old Man George's");

    assert
      .dom('.resources .resource:nth-of-type(2)')
      .containsText('Rooms')
      .containsText('Sweet Potato Homestead');
  });
});
