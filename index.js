(function () {
  const letters = {
    ' ': '       ',
    A: 'Ýß313ßÝ',
    B: 'ààiiiàV',
    C: '^àÄaaÄB',
    D: 'ààaaÄ^<',
    E: 'ààiiiia',
    F: 'àà))))!',
    G: '^àÄaiÚÚ',
    H: 'àà(((àà',
    I: 'aaààaa ',
    J: 'PÑ```à_',
    K: 'àà((<ØÄ',
    L: 'àà```` ',
    M: 'àß,8,ßà',
    N: 'àà.<Xàà',
    O: '^àaaaà^',
    P: 'àà111?.',
    Q: '^àaÂAà~',
    R: 'àà1QÚÐf',
    S: 'FÐiikÛP',
    T: '!!àà!! ',
    U: '_à```à_',
    V: '/?XÑX?/',
    W: 'à_8,8_à',
    X: 'ÄØ<(<ØÄ',
    Y: '\'/ÙÙ/\' ',
    Z: 'ÂÒÚ}ogc',
    0: '<^Âac^<',
    1: '`bàà`` ',
    2: 'ÃÔqyiof',
    3: '@ÂeeoÜQ',
    4: '8<62àà0',
    5: 'GÈeeeÞY',
    6: '^àeeeÞX',
    7: '##ÒÚ-\'#',
    8: 'VàiiiàV',
    9: '.Àqqqà^'
  };

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  function draw(string, size) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    string.split('').forEach((char, pos) => {
      const letter = letters[char];
      for(l=55;X=l&7,Y=l>>3,l>=0;l--) {
        if (X < 7) {
          const charCode = letter.charCodeAt(Y) - 32;
          if ((charCode > 126 ? charCode - 65 : charCode) >> X & 1) {
            context.fillRect(Y * size + pos * size * 8, X * size, size, size);
          }
        }
      }
    });
  }

  draw(Object.keys(letters).join(''), 2);
})();