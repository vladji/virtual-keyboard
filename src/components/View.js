import '../scss/style.css';

const symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '\\', ','];
const engLang = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

export default class View {
  constructor() {
    this.upperCase = false;
    this.defaultSymb = [];
    this.ruLang = [];
  }

  static textAreaInit() {
    const form = document.createElement('form');
    form.innerHTML = '<textarea class="textarea"></textarea>';
    document.body.append(form);
  }

  static keybordInit(keysArr) {
    const keybordWrap = document.createElement('div');
    keybordWrap.classList = 'keybord-wrap';

    for (let i = 0; i < 5; i += 1) {
      const row = document.createElement('div');
      row.classList = 'row';
      keybordWrap.append(row);
    }

    document.body.append(keybordWrap);
    const keysRow = keybordWrap.querySelectorAll('.row');

    for (let k = 0; k < keysArr.length && k < keysRow.length; k += 1) {
      for (let i = 0; i < keysArr[k].length; i += 1) {
        const keyDiv = document.createElement('div');
        keyDiv.innerHTML = `${keysArr[k][i].val}`;
        keyDiv.classList = `${keysArr[k][i].class}`;
        keysRow[k].append(keyDiv);
      }
    }

    const info = document.createElement('p');
    info.classList = 'info';
    info.innerHTML = '<span>Alt + Shift</span>: to switch language';
    document.body.append(info);
  }

  transform(caps) {
    const switchKeys = document.querySelectorAll('.switch');

    if (!caps) {
      for (let i = 0; i < switchKeys.length; i += 1) {
        let letter = switchKeys[i].innerHTML;
        letter = letter.toLowerCase();
        switchKeys[i].innerHTML = letter;
      }
      this.upperCase = false;
    } else {
      for (let i = 0; i < switchKeys.length; i += 1) {
        let letter = switchKeys[i].innerHTML;
        letter = letter.toUpperCase();
        switchKeys[i].innerHTML = letter;
      }
      this.upperCase = true;
    }
  }

  changeSymb() {
    const keys = document.querySelectorAll('.symb');

    if (this.defaultSymb.length === 0) {
      for (let s = 0; s < keys.length;) {
        this.defaultSymb.push(keys[s].innerHTML);
        keys[s].innerHTML = symbols[s];
        s += 1;
      }
    } else {
      for (let s = 0; s < keys.length;) {
        keys[s].innerHTML = this.defaultSymb[s];
        s += 1;
      }
      this.defaultSymb.length = 0;
    }
  }

  switchLang(lang) {
    const letters = document.querySelectorAll('.switch');

    if (lang === 'en') {
      for (let k = 0; k < engLang.length;) {
        this.ruLang.push(letters[k].innerHTML);
        letters[k].innerHTML = engLang[k];
        k += 1;
      }
    } else {
      for (let k = 0; k < this.ruLang.length;) {
        letters[k].innerHTML = this.ruLang[k];
        k += 1;
      }
      this.ruLang.length = 0;
    }
    this.transform(this.upperCase);
  }
}
