import Route from '@ember/routing/route';

const RESOURCE_TYPES = {
  skill: {
    enum: 'SKILL',
    label: 'Skill',
    icon: '',
  },
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
  class: {
    enum: 'CLASS',
    label: 'Class',
    icon: '',
  },
  group: {
    enum: 'GROUP',
    label: 'Group',
    icon: '',
  },
  other: {
    enum: 'OTHER',
    label: 'Other',
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
  materials: {
    enum: 'MATERIALS',
    label: 'Cost of materials',
    icon: '',
  },
  paid: {
    enum: 'PAID',
    label: 'Paid',
    icon: '',
  },
  barter: {
    enum: 'BARTER',
    label: 'Barter',
    icon: '',
  },
};

const NO_LOCATION = {
  id: 0,
  name: 'No Location Given',
  address: '',
  resourceIds: [],
};

export default class ResourcesRoute extends Route {
  model() {
    // TODO: Load resources and types from API
    return {
      resourceTypes: RESOURCE_TYPES,
      exchangeTypes: EXCHANGE_TYPES,
      locations: [
        {
          id: 1,
          name: 'Sweet Potato Homestead',
          address: '123 Main St., Lewiston, ME 04240',
          resourceIds: [1, 2, 3, 4, 5],
        },
      ],
      resources: [
        {
          id: 1,
          title: 'Handyman',
          type: RESOURCE_TYPES.skill,
          exchange: EXCHANGE_TYPES.materials,
          locationId: 1,
          description: `Skilled in all things home improvement: woodworking, electrical,
            painting, plumbing, etc. DISCLAIMER: NOT LICENSED OR INSURED`,
        },
        {
          id: 2,
          title: 'Food',
          type: RESOURCE_TYPES.food,
          exchange: EXCHANGE_TYPES.free,
          locationId: 1,
          description: "If you're experiencing food insecurity, we can help.",
        },
        {
          id: 3,
          title: 'Rooms',
          type: RESOURCE_TYPES.shelter,
          exchange: EXCHANGE_TYPES.payWhatYouCan,
          locationId: 1,
          description: `We have a spare bedroom we're willing to loan out for a few days if
            you're in need.
          `,
        },
        {
          id: 4,
          title: 'Woodworking Classes',
          type: RESOURCE_TYPES.class,
          exchange: EXCHANGE_TYPES.materials,
          locationId: 1,
          description: `Learn to whittle a spoon!`,
        },
        {
          id: 5,
          title: 'Permaculture Classes',
          type: RESOURCE_TYPES.class,
          exchange: EXCHANGE_TYPES.materials,
          locationId: 1,
          description: `Learn to build a sustainable food garden!`,
        },
      ],
    };
  }
}
