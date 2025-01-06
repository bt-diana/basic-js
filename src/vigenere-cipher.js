const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  MAX_LATIN_CHAR_CODE = 'Z'.charCodeAt(0);
  MIN_LATIN_CHAR_CODE = 'A'.charCodeAt(0);
  direct = true;

  constructor(direct) {
    this.direct = direct ?? true;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error('Incorrect arguments!');
    }

    const keyNumers = key
      .toUpperCase()
      .split('')
      .map((char) => (char.charCodeAt(0) - this.MIN_LATIN_CHAR_CODE));
    let index = 0;

    const encryptedMessage = message.toUpperCase().split('').map((char) => {
      const code = char.charCodeAt(0);
      
      if (code >= this.MIN_LATIN_CHAR_CODE && code <= this.MAX_LATIN_CHAR_CODE) {
        return String.fromCharCode(
          this.MIN_LATIN_CHAR_CODE 
          + (code - this.MIN_LATIN_CHAR_CODE + keyNumers.at(index++ % keyNumers.length)) 
          % (this.MAX_LATIN_CHAR_CODE - this.MIN_LATIN_CHAR_CODE + 1)
        );
      }

      return char;
    });

    return this.direct ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw Error('Incorrect arguments!');
    }

    const keyNumers = key
      .toUpperCase()
      .split('')
      .map((char) => (char.charCodeAt(0) - this.MIN_LATIN_CHAR_CODE));
    let index = 0;

    const message = encryptedMessage.toUpperCase().split('').map((char) => {
      const code = char.charCodeAt(0);

      if (code >= this.MIN_LATIN_CHAR_CODE && code <= this.MAX_LATIN_CHAR_CODE) {
        return String.fromCharCode(
          this.MIN_LATIN_CHAR_CODE 
          + (this.MAX_LATIN_CHAR_CODE - this.MIN_LATIN_CHAR_CODE + 1 + code - this.MIN_LATIN_CHAR_CODE - keyNumers.at(index++ % keyNumers.length)) 
          % (this.MAX_LATIN_CHAR_CODE - this.MIN_LATIN_CHAR_CODE + 1)
        );
      }

      return char;
    });

    return this.direct ? message.join('') : message.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
