import Model from './Model';

const keysDefault = [
  [{ val: 'ё', class: 'switch symb print Backquote' }, { val: '1', class: 'def symb print Digit1' }, { val: '2', class: 'def symb print Digit2' }, { val: '3', class: 'def symb print Digit3' }, { val: '4', class: 'def symb print Digit4' }, { val: '5', class: 'def symb print Digit5' }, { val: '6', class: 'def symb print Digit6' }, { val: '7', class: 'def symb print Digit7' }, { val: '8', class: 'def symb print Digit8' }, { val: '9', class: 'def symb print Digit9' }, { val: '0', class: 'def symb print Digit0' }, { val: '-', class: 'def symb print Minus' }, { val: '=', class: 'def symb print Equal' }, { val: 'Backspace', class: 'def backspace Backspace' }],
  [{ val: 'Tab', class: 'def tab Tab' }, { val: 'й', class: 'switch print KeyQ' }, { val: 'ц', class: 'switch print KeyW' }, { val: 'у', class: 'switch print KeyE' }, { val: 'к', class: 'switch print KeyR' }, { val: 'е', class: 'switch print KeyT' }, { val: 'н', class: 'switch print KeyY' }, { val: 'г', class: 'switch print KeyU' }, { val: 'ш', class: 'switch print KeyI' }, { val: 'щ', class: 'switch print KeyO' }, { val: 'з', class: 'switch print KeyP' }, { val: 'х', class: 'switch print BracketLeft' }, { val: 'ъ', class: 'switch print BracketRight' }, { val: '/', class: 'def symb print Backslash' }, { val: 'DEL', class: 'def del Delete' }],
  [{ val: 'CapsLock', class: 'def caps CapsLock' }, { val: 'ф', class: 'switch print KeyA' }, { val: 'ы', class: 'switch print KeyS' }, { val: 'в', class: 'switch print KeyD' }, { val: 'а', class: 'switch print KeyF' }, { val: 'п', class: 'switch print KeyG' }, { val: 'р', class: 'switch print KeyH' }, { val: 'о', class: 'switch print KeyJ' }, { val: 'л', class: 'switch print KeyK' }, { val: 'д', class: 'switch print KeyL' }, { val: 'ж', class: 'switch print Semicolon' }, { val: 'э', class: 'switch print Quote' }, { val: 'ENTER', class: 'def enter Enter' }],
  [{ val: 'Shift', class: 'def shift ShiftLeft' }, { val: 'я', class: 'switch print KeyZ' }, { val: 'ч', class: 'switch print KeyX' }, { val: 'с', class: 'switch print KeyC' }, { val: 'м', class: 'switch print KeyV' }, { val: 'и', class: 'switch print KeyB' }, { val: 'т', class: 'switch print KeyN' }, { val: 'ь', class: 'switch print KeyM' }, { val: 'б', class: 'switch print Comma' }, { val: 'ю', class: 'switch print Period' }, { val: '.', class: 'switch symb print Slash' }, { val: '&#9650;', class: 'def arrow-up ArrowUp' }, { val: 'Shift', class: 'def shift ShiftRight' }],
  [{ val: 'Ctrl', class: 'def ctrl ControlLeft' }, { val: 'Win', class: 'def win MetaLeft' }, { val: 'Alt', class: 'def alt AltLeft' }, { val: '', class: 'def space Space' }, { val: 'Alt', class: 'def alt AltRight' }, { val: '&#9668;', class: 'def arrow-left ArrowLeft' }, { val: '&#9660;', class: 'def arrow-down ArrowDown' }, { val: '&#9658;', class: 'def arrow-right ArrowRight' }, { val: 'Ctrl', class: 'def ctrl ControlRight' }],
];

export default class Controller {
  constructor() {
    this.keybordModel = new Model(keysDefault);
    this.textArea = document.querySelector('.textarea');
    this.set = new Set();
  }

  lesteners() {
    const model = this.keybordModel;
    model.keybordInit();

    const keybord = document.querySelector('.keybord-wrap');
    let repeatLetterTimer = null;
    let repeatLetterInterval = null;

    const input = this.textArea;
    keybord.addEventListener('mousedown', (e) => {
      if (e.target.matches('.row')) return 0;
      Model.animation(e);

      if (e.target.matches('.shift')) model.shift();
      model.keyDown(e);

      if (!e.target.matches('.shift') && !e.target.matches('.caps')) {
        repeatLetterTimer = setTimeout(() => {
          repeatLetterInterval = setInterval(() => model.keyDown(e), 50);
        }, 800);
      }

      e.target.addEventListener('selectstart', (evt) => {
        evt.preventDefault();
      });
      return 1;
    });

    keybord.addEventListener('mouseup', (e) => {
      clearTimeout(repeatLetterTimer);
      clearInterval(repeatLetterInterval);

      if (e.target.matches('.shift')) model.shift();
      model.keyUp(e);
    });

    input.addEventListener('click', model.inputClick.bind(model));

    document.body.addEventListener('keydown', (e) => {
      const key = document.querySelector(`.${e.code}`);

      if (key && !e.repeat) Model.animation(key);

      if (e.repeat && (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'CapsLock')) {
        return false;
      }

      if (key) {
        if (key.matches('.shift')) {
          this.set.add(key);
          model.shift(this.set.size);
        }
        if (key.matches('.alt')) this.set.add(key);
        model.keyDown(key);
      }

      if (this.set.size === 2) model.changeLang();
      return true;
    });

    document.body.addEventListener('keyup', (e) => {
      const key = document.querySelector(`.${e.code}`);
      if (key) {
        model.keyUp(key);
        if (key.matches('.shift')) {
          model.shift();
          model.switch = false;
        }
        this.set.clear();
      }
    });
  }
}
