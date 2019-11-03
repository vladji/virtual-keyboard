import View from './View';

export default class Model {
  constructor(keysDef) {
    this.view = new View();
    this.keysDefault = keysDef;
    this.textArea = document.querySelector('.textarea');
    this.cursorPos = null;
  }

  keybordInit() {
    const keysArr = this.keysDefault;
    View.keybordInit(keysArr);
  }

  mouseClick(e) {
    const input = this.textArea;
    if (e.target.classList.contains('row')) return 0;

    e.target.classList.add('animation-key');
    setTimeout(() => e.target.classList.remove('animation-key'), 100);

    const keyClasses = e.target.classList;
    const keyValue = e.target.innerHTML;

    if (keyClasses.contains('print')) {
      input.value += keyValue;
      this.cursorPos = null; // return cursor to the end of string
    } else if (keyClasses.contains('space')) {
      input.value += '\0';
      this.cursorPos = null;
    } else if (keyClasses.contains('enter')) {
      input.value += '\n';
      this.cursorPos = null;
    } else if (keyClasses.contains('tab')) {
      input.value += '\t';
      this.cursorPos = null;
    } else if (keyClasses.contains('backspace')) {
      if (this.cursorPos) {
        input.value = input.value.slice(0, this.cursorPos - 1)
          + input.value.slice(this.cursorPos, input.value.length);
        this.cursorPos -= 1;
      } else {
        input.value = input.value.slice(0, input.value.length - 1);
      }
    } else if (keyClasses.contains('del')) {
      if (this.cursorPos) {
        input.value = input.value.slice(0, this.cursorPos)
          + input.value.slice(this.cursorPos + 1, input.value.length);
      } else if (this.cursorPos === 0) {
        if (input.value.length === 1) {
          input.value = '';
        }
        input.value = input.value.slice(0, 1) + input.value.slice(2, input.value.length);
      } else {
        return 0;
      }
    } else if (keyClasses.contains('caps')) {
      this.view.capsLock();
    }
    return 1;
  }

  static shift() {
    const shift = document.querySelector('.shift');
    const style = document.createElement('style');
    style.innerHTML = '.switch {text-transform: uppercase;}';
    document.body.prepend(style);

    shift.addEventListener('mouseup', () => {
      style.remove();
    });
  }

  inputClick() {
    const input = this.textArea;
    this.cursorPos = input.selectionEnd;
    console.log('this.cursorPos', this.cursorPos);
  }
}
