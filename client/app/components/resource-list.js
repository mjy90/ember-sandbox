import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ResourceListComponent extends Component {
  getLocationForResource(resource, locations) {
    const location = locations.find((location) => location.id === resource.locationId);

    return location || NO_LOCATION;
  }
}
