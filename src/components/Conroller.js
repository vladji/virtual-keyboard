import Model from './Model';

const keysDefault = [
  [{ val: 'ё', class: 'switch' }, { val: '1', class: 'def' }, { val: '2', class: 'def' }, { val: '3', class: 'def' }, { val: '4', class: 'def' }, { val: '5', class: 'def' }, { val: '6', class: 'def' }, { val: '7', class: 'def' }, { val: '8', class: 'def' }, { val: '9', class: 'def' }, { val: '0', class: 'def' }, { val: '-', class: 'def' }, { val: '=', class: 'def' }, { val: 'Backspace', class: 'def backspace' }],
  [{ val: 'Tab', class: 'def tab' }, { val: 'й', class: 'switch' }, { val: 'ц', class: 'switch' }, { val: 'у', class: 'switch' }, { val: 'к', class: 'switch' }, { val: 'е', class: 'switch' }, { val: 'н', class: 'switch' }, { val: 'г', class: 'switch' }, { val: 'ш', class: 'switch' }, { val: 'щ', class: 'switch' }, { val: 'з', class: 'switch' }, { val: 'х', class: 'switch' }, { val: 'ъ', class: 'switch' }, { val: '/', class: 'def' }, { val: 'DEL', class: 'def del' }],
  [{ val: 'CapsLock', class: 'def caps' }, { val: 'ф', class: 'switch' }, { val: 'ы', class: 'switch' }, { val: 'в', class: 'switch' }, { val: 'а', class: 'switch' }, { val: 'п', class: 'switch' }, { val: 'р', class: 'switch' }, { val: 'о', class: 'switch' }, { val: 'л', class: 'switch' }, { val: 'д', class: 'switch' }, { val: 'ж', class: 'switch' }, { val: 'э', class: 'switch' }, { val: 'ENTER', class: 'def enter' }],
  [{ val: 'Shift', class: 'def shift-l' }, { val: 'я', class: 'switch' }, { val: 'ч', class: 'switch' }, { val: 'с', class: 'switch' }, { val: 'м', class: 'switch' }, { val: 'и', class: 'switch' }, { val: 'т', class: 'switch' }, { val: 'ь', class: 'switch' }, { val: 'б', class: 'switch' }, { val: 'ю', class: 'switch' }, { val: '.', class: 'def' }, { val: '&#9650;', class: 'def arrow-up' }, { val: 'Shift', class: 'def shift-r' }],
  [{ val: 'Ctrl', class: 'def ctrl' }, { val: 'Win', class: 'def win' }, { val: 'Alt', class: 'def alt' }, { val: '', class: 'def space' }, { val: 'Alt', class: 'def alt' }, { val: '&#9668;', class: 'def arrow-left' }, { val: '&#9660;', class: 'def arrow-down' }, { val: '&#9658;', class: 'def arrow-right' }, { val: 'Ctrl', class: 'def ctrl' }],
];

export default class Controller {
  constructor() {
    this.keybordModel = new Model(keysDefault);
  }

  keyTouch() {
    const model = this.keybordModel;
    model.keybordInit();
    console.log(model);
  }
}
