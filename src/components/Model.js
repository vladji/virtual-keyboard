
import View from './View';

export default class Model {
  constructor(keysDef) {
    this.view = new View();
    this.language = 'ru';
    this.uppercase = false;
    this.keysDefault = keysDef;
  }

  keybordInit() {
    const keysArr = this.keysDefault;
    const render = this.view;
    render.keybordInit(keysArr);
  }

  keybord() {
    const caps = this.uppercase;
    const lang = this.language;
    console.log(caps, lang);
  }
}
