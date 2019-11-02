import '../scss/style.css';

export default class View {
  constructor() {
    this.keysWrap = null;
  }

  static textAreaInit() {
    const form = document.createElement('form');
    form.innerHTML = '<textarea class="textarea"></textarea>';
    document.body.append(form);
  }

  keybordInit(keysArr) {
    let keybordWrap = this.keysWrap;
    keybordWrap = document.createElement('div');
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

  pastKey(keysArr) {
    const keybord = this.keysWrap;
    console.log('keybord', keybord);
    console.log('keysArr', keysArr);
  }

  // capsLock() {
  //   let keybordWrap = this.keysWrap;
  //   const upper = keysArr[1].join(',').toUpperCase().split(',');
  //   console.log(upper);
  // }
}
