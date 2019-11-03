import Model from './Model';

const keysDefault = [
  [{ val: 'ё', class: 'switch print' }, { val: '1', class: 'def print' }, { val: '2', class: 'def print' }, { val: '3', class: 'def print' }, { val: '4', class: 'def print' }, { val: '5', class: 'def print' }, { val: '6', class: 'def print' }, { val: '7', class: 'def print' }, { val: '8', class: 'def print' }, { val: '9', class: 'def print' }, { val: '0', class: 'def print' }, { val: '-', class: 'def print' }, { val: '=', class: 'def print' }, { val: 'Backspace', class: 'def backspace' }],
  [{ val: 'Tab', class: 'def tab' }, { val: 'й', class: 'switch print' }, { val: 'ц', class: 'switch print' }, { val: 'у', class: 'switch print' }, { val: 'к', class: 'switch print' }, { val: 'е', class: 'switch print' }, { val: 'н', class: 'switch print' }, { val: 'г', class: 'switch print' }, { val: 'ш', class: 'switch print' }, { val: 'щ', class: 'switch print' }, { val: 'з', class: 'switch print' }, { val: 'х', class: 'switch print' }, { val: 'ъ', class: 'switch print' }, { val: '/', class: 'def print' }, { val: 'DEL', class: 'def del' }],
  [{ val: 'CapsLock', class: 'def caps' }, { val: 'ф', class: 'switch print' }, { val: 'ы', class: 'switch print' }, { val: 'в', class: 'switch print' }, { val: 'а', class: 'switch print' }, { val: 'п', class: 'switch print' }, { val: 'р', class: 'switch print' }, { val: 'о', class: 'switch print' }, { val: 'л', class: 'switch print' }, { val: 'д', class: 'switch print' }, { val: 'ж', class: 'switch print' }, { val: 'э', class: 'switch print' }, { val: 'ENTER', class: 'def enter' }],
  [{ val: 'Shift', class: 'def shift' }, { val: 'я', class: 'switch print' }, { val: 'ч', class: 'switch print' }, { val: 'с', class: 'switch print' }, { val: 'м', class: 'switch print' }, { val: 'и', class: 'switch print' }, { val: 'т', class: 'switch print' }, { val: 'ь', class: 'switch print' }, { val: 'б', class: 'switch print' }, { val: 'ю', class: 'switch print' }, { val: '.', class: 'def print' }, { val: '&#9650;', class: 'def arrow-up' }, { val: 'Shift', class: 'def shift' }],
  [{ val: 'Ctrl', class: 'def ctrl' }, { val: 'Win', class: 'def win' }, { val: 'Alt', class: 'def alt' }, { val: '', class: 'def space' }, { val: 'Alt', class: 'def alt' }, { val: '&#9668;', class: 'def arrow-left' }, { val: '&#9660;', class: 'def arrow-down' }, { val: '&#9658;', class: 'def arrow-right' }, { val: 'Ctrl', class: 'def ctrl' }],
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
    keybord.addEventListener('click', model.mouseClick.bind(model));

    const input = this.textArea;
    input.addEventListener('click', model.inputClick.bind(model));

    const shift = document.querySelector('.shift');
    shift.addEventListener('mousedown', Model.shift);
  }
}
