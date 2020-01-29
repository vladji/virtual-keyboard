import View from './View';

const symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '\\', ','];

export default class Model {
  constructor(keysDef) {
    this.view = new View();
    this.keysDefault = keysDef;
    this.textArea = document.querySelector('.textarea');
    this.cursorPos = 0;
    this.caps = 0;
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
    if (target.classList.contains('caps') && this.caps) return false;
    return target.classList.remove('pressed-btn');
  }

  keyDown(e) {
    const target = (e.target) ? e.target : e;
    const input = this.textArea;
    const pos = this.cursorPos;
    const keyClasses = target.classList;
    const keyValue = target.innerHTML;

    // * PRINT
    if (keyClasses.contains('print')) {
      input.value = input.value.slice(0, pos)
        + keyValue + input.value.slice(pos, input.value.length);
      this.cursorPos += 1;
    }

    // * SPACE
    if (keyClasses.contains('space')) {
      const space = '\0';
      input.value = input.value.slice(0, pos)
        + space + input.value.slice(pos, input.value.length);
      this.cursorPos += 1;
    }

    // * CAPS
    if (keyClasses.contains('caps')) {
      this.view.transform();
      this.caps = (this.caps) ? 0 : 1;
    }

    // ? TAB
    if (keyClasses.contains('tab')) {
      const tab = '\t';
      input.value = input.value.slice(0, pos)
        + tab + input.value.slice(pos, input.value.length);
      this.cursorPos += 8;
    }

    // * ENTER
    if (keyClasses.contains('enter')) {
      input.value += '\n';
      this.cursorPos = input.selectionEnd;
    }

    // * DEL
    if (keyClasses.contains('del')) {
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
    if (keyClasses.contains('backspace')) {
      if (this.cursorPos) {
        input.value = input.value.slice(0, this.cursorPos - 1)
          + input.value.slice(this.cursorPos, input.value.length);
        this.cursorPos -= 1;
      }
    }
  }

  shift() {
    this.view.changeSymb(symbols);
    this.view.transform();
  }
}
