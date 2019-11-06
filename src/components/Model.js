import View from './View';

export default class Model {
  constructor(keysDef) {
    this.view = new View();
    this.grabStore();
    this.keysDefault = keysDef;
    this.textArea = document.querySelector('.textarea');
    this.cursorPos = 0;
    this.caps = 0;
    this.switch = false;
    this.lang = 'ru';
    this.store = {};
  }

  keybordInit() {
    const keysArr = this.keysDefault;
    View.keybordInit(keysArr);
  }

  static animation(e) {
    const target = (e.target) ? e.target : e;
    target.classList.add('animation-key', 'pressed-btn');
    setTimeout(() => target.classList.remove('animation-key'), 300);
  }

  inputClick() {
    const input = this.textArea;
    this.cursorPos = input.selectionEnd;
  }

  keyUp(e) {
    const target = (e.target) ? e.target : e;
    if (target.matches('.caps') && this.caps) return false;
    return target.classList.remove('pressed-btn');
  }

  keyDown(e) {
    const target = (e.target) ? e.target : e;
    const input = this.textArea;
    const pos = this.cursorPos;
    const keyValue = target.innerHTML;

    // * PRINT
    if (target.matches('.print')) {
      input.value = input.value.slice(0, pos)
        + keyValue + input.value.slice(pos, input.value.length);
      this.cursorPos += 1;
    }

    // * SPACE
    if (target.matches('.space')) {
      const space = ' ';
      input.value = input.value.slice(0, pos)
        + space + input.value.slice(pos, input.value.length);
      this.cursorPos += 1;
    }

    // * CAPS
    if (target.matches('.caps')) {
      this.caps = (this.caps) ? 0 : 1;
      this.view.transform(this.caps);
    }

    // ? TAB
    if (target.matches('.tab')) {
      const tab = '\t';
      input.value = input.value.slice(0, pos)
        + tab + input.value.slice(pos, input.value.length);
      this.cursorPos += 8;
    }

    // * ENTER
    if (target.matches('.enter')) {
      input.value += '\n';
      this.cursorPos = input.selectionEnd;
    }

    // * DEL
    if (target.matches('.del')) {
      if (this.cursorPos) {
        input.value = input.value.slice(0, this.cursorPos)
          + input.value.slice(this.cursorPos + 1, input.value.length);
      } else {
        if (input.value.length === 1) {
          input.value = '';
        }
        input.value = input.value.slice(0, 1) + input.value.slice(2, input.value.length);
      }
    }

    // * BACKSPACE
    if (target.matches('.backspace')) {
      if (this.cursorPos) {
        input.value = input.value.slice(0, this.cursorPos - 1)
          + input.value.slice(this.cursorPos, input.value.length);
        this.cursorPos -= 1;
      }
    }
  }

  shift(set) {
    if (set === 2) return false;

    if (!this.switch) {
      this.view.changeSymb();
      this.caps = (this.caps) ? 0 : 1;
      this.view.transform(this.caps);
    }
    return 1;
  }

  changeLang() {
    this.lang = (this.lang === 'ru') ? 'en' : 'ru';
    this.view.switchLang(this.lang);
    this.switch = true;
  }

  grabStore() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('storeKey')) {
        const storeObj = JSON.parse(localStorage.getItem('storeKey'));

        if (storeObj.language === 'en') {
          this.lang = 'en';
          this.view.switchLang(this.lang);
        }
        if (storeObj.caps) {
          this.caps = 1;
          this.view.transform(this.caps);
          const capsKey = document.querySelector('.caps');
          capsKey.classList.add('pressed-btn');
        }
      }
    });

    window.addEventListener('beforeunload', () => {
      this.store.caps = this.caps;
      this.store.language = this.lang;

      const storeObj = JSON.stringify(this.store);
      localStorage.setItem('storeKey', storeObj);
    });
  }
}
