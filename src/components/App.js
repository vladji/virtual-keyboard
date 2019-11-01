import '../scss/style.css';

export default class App {
  constructor() {
    this.lang = 'ru';
  }

  start() {
    const [...lang] = this.lang;
    const keybord = document.createElement('div');
    keybord.innerHTML = `Hello world ${lang}`;
    document.body.append(keybord);
  }
}
