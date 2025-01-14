import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class ThemeToggle extends Component {
  @tracked isLightTheme = false;
  allThemes = ['dark', 'light'];

  get theme() {
    return this.isLightTheme ? 'light' : 'dark';
  }
}
