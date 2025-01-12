import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ResourceComponent extends Component {
  @action
  signUp(resource) {
    alert(`You've signed up for ${resource.title}!`);
  }

  imageUrl = (resource) => `https://picsum.photos/seed/${resource.id}/300`;

  exchangeLabel = (resource) => resource.exchange?.label;
}
