import '../scss/style.css';

export default class View {
  constructor() {
    this.upperCase = false;
  }

  static textAreaInit() {
    const form = document.createElement('form');
    form.innerHTML = '<textarea class="textarea"></textarea>';
    document.body.append(form);
  }

  static keybordInit(keysArr) {
    const keybordWrap = document.createElement('div');
    keybordWrap.classList = 'keybord-wrap';

    for (let i = 0; i < 5;) {
      const row = document.createElement('div');
      row.classList = 'row';
      keybordWrap.append(row);
      i += 1;
    }

    document.body.append(keybordWrap);
    const keysRow = keybordWrap.querySelectorAll('.row');

    for (let k = 0; k < keysArr.length && k < keysRow.length;) {
      for (let i = 0; i < keysArr[k].length;) {
        const keyDiv = document.createElement('div');
        keyDiv.innerHTML = `${keysArr[k][i].val}`;
        keyDiv.classList = `${keysArr[k][i].class}`;
        keysRow[k].append(keyDiv);
        i += 1;
      }
      k += 1;
    }
  }

  capsLock() {
    const switchKeys = document.querySelectorAll('.switch');

    if (this.upperCase) {
      for (let i = 0; i < switchKeys.length;) {
        let letter = switchKeys[i].innerHTML;
        letter = letter.toLowerCase();
        switchKeys[i].innerHTML = letter;
        i += 1;
      }
      this.upperCase = false;
    } else {
      for (let i = 0; i < switchKeys.length;) {
        let letter = switchKeys[i].innerHTML;
        letter = letter.toUpperCase();
        switchKeys[i].innerHTML = letter;
        i += 1;
      }
      this.upperCase = true;
    }
  }
}
