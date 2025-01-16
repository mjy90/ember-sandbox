import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class Switch extends Component {
  get classes() {
    const css = `switch ${this.args.size || ''} ${this.args.contrast ? 'contrast' : ''}` ;
    return css.trimEnd();
  }
}
