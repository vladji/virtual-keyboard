import Model from './Model';

const keysDefault = [
  [{ val: 'ё', class: 'switch print Backquote' }, { val: '1', class: 'def print Digit1' }, { val: '2', class: 'def print Digit2' }, { val: '3', class: 'def print Digit3' }, { val: '4', class: 'def print Digit4' }, { val: '5', class: 'def print Digit5' }, { val: '6', class: 'def print Digit6' }, { val: '7', class: 'def print Digit7' }, { val: '8', class: 'def print Digit8' }, { val: '9', class: 'def print Digit9' }, { val: '0', class: 'def print Digit0' }, { val: '-', class: 'def print Minus' }, { val: '=', class: 'def print Equal' }, { val: 'Backspace', class: 'def backspace Backspace' }],
  [{ val: 'Tab', class: 'def tab Tab' }, { val: 'й', class: 'switch print KeyQ' }, { val: 'ц', class: 'switch print KeyW' }, { val: 'у', class: 'switch print KeyE' }, { val: 'к', class: 'switch print KeyR' }, { val: 'е', class: 'switch print KeyT' }, { val: 'н', class: 'switch print KeyY' }, { val: 'г', class: 'switch print KeyU' }, { val: 'ш', class: 'switch print KeyI' }, { val: 'щ', class: 'switch print KeyO' }, { val: 'з', class: 'switch print KeyP' }, { val: 'х', class: 'switch print BracketLeft' }, { val: 'ъ', class: 'switch print BracketRight' }, { val: '/', class: 'def print Backslash' }, { val: 'DEL', class: 'def del Delete' }],
  [{ val: 'CapsLock', class: 'def caps CapsLock' }, { val: 'ф', class: 'switch print KeyA' }, { val: 'ы', class: 'switch print KeyS' }, { val: 'в', class: 'switch print KeyD' }, { val: 'а', class: 'switch print KeyF' }, { val: 'п', class: 'switch print KeyG' }, { val: 'р', class: 'switch print KeyH' }, { val: 'о', class: 'switch print KeyJ' }, { val: 'л', class: 'switch print KeyK' }, { val: 'д', class: 'switch print KeyL' }, { val: 'ж', class: 'switch print Semicolon' }, { val: 'э', class: 'switch print Quote' }, { val: 'ENTER', class: 'def enter Enter' }],
  [{ val: 'Shift', class: 'def shift ShiftLeft' }, { val: 'я', class: 'switch print KeyZ' }, { val: 'ч', class: 'switch print KeyX' }, { val: 'с', class: 'switch print KeyC' }, { val: 'м', class: 'switch print KeyV' }, { val: 'и', class: 'switch print KeyB' }, { val: 'т', class: 'switch print KeyN' }, { val: 'ь', class: 'switch print KeyM' }, { val: 'б', class: 'switch print Comma' }, { val: 'ю', class: 'switch print Period' }, { val: '.', class: 'def print Slash' }, { val: '&#9650;', class: 'def arrow-up' }, { val: 'Shift', class: 'def shift ShiftRight' }],
  [{ val: 'Ctrl', class: 'def ctrl ControlLeft' }, { val: 'Win', class: 'def win MetaLeft' }, { val: 'Alt', class: 'def alt AltLeft' }, { val: '', class: 'def space Space' }, { val: 'Alt', class: 'def alt AltRight' }, { val: '&#9668;', class: 'def arrow-left' }, { val: '&#9660;', class: 'def arrow-down' }, { val: '&#9658;', class: 'def arrow-right' }, { val: 'Ctrl', class: 'def ctrl ControlRight' }],
];

export default class Controller {
  constructor() {
    this.keybordModel = new Model(keysDefault);
    this.textArea = document.querySelector('.textarea');
  }

  lesteners() {
    const model = this.keybordModel;
    model.keybordInit();

    const keybord = document.querySelector('.keybord-wrap');
    let repeatLetterTimer = null;
    let repeatLetterInterval = null;

    keybord.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('row')) return 0;
      Model.animation(e);
      model.mouseDown(e);
      repeatLetterTimer = setTimeout(() => {
        repeatLetterInterval = setInterval(() => model.mouseDown(e), 50);
      }, 800);
      return 1;
    });

    keybord.addEventListener('mouseup', (e) => {
      clearTimeout(repeatLetterTimer);
      clearInterval(repeatLetterInterval);
      Model.keyUp(e);
    });

    const input = this.textArea;
    input.addEventListener('click', model.inputClick.bind(model));

    document.body.addEventListener('keydown', Model.keyDown);

    document.body.addEventListener('keyup', (e) => {
      const keyUp = document.querySelector(`.${e.code}`);
      if (keyUp) Model.keyUp(null, keyUp);
    });
  }
}
