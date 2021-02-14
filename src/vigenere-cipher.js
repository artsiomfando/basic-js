const CustomError = require("../extensions/custom-error");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class VigenereCipheringMachine {
  constructor(modeReverse = true) {
    this.modeReverse = modeReverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    } else {
      let encMessage = [];
      const arrMessage = message.toUpperCase().split("");

      while (
        key.length <= arrMessage.filter((el) => alphabet.includes(el)).length
      ) {
        key += key;
      }

      const arrKey = key
        .toUpperCase()
        .split("")
        .slice(0, arrMessage.filter((el) => alphabet.includes(el)).length);

      for (let i = 0; i < arrMessage.length; i++) {
        if (!alphabet.includes(arrMessage[i]))
          arrKey.splice(i, 0, arrMessage[i]);
      }

      for (let i = 0; i < arrMessage.length; i++) {
        if (alphabet.includes(arrMessage[i])) {
          const ind =
            alphabet.indexOf(arrMessage[i]) + alphabet.indexOf(arrKey[i]) < 26
              ? alphabet.indexOf(arrMessage[i]) + alphabet.indexOf(arrKey[i])
              : alphabet.indexOf(arrMessage[i]) +
                alphabet.indexOf(arrKey[i]) -
                26;

          encMessage.push(alphabet[ind]);
        } else {
          encMessage.push(arrMessage[i]);
        }
      }
      return this.modeReverse
        ? encMessage.join("")
        : encMessage.reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    } else {
      let decMessage = [];
      const arrMessage = encryptedMessage.toUpperCase().split("");

      while (
        key.length <= arrMessage.filter((el) => alphabet.includes(el)).length
      ) {
        key += key;
      }

      const arrKey = key
        .toUpperCase()
        .split("")
        .slice(0, arrMessage.filter((el) => alphabet.includes(el)).length);

      for (let i = 0; i < arrMessage.length; i++) {
        if (!alphabet.includes(arrMessage[i]))
          arrKey.splice(i, 0, arrMessage[i]);
      }

      for (let i = 0; i < arrMessage.length; i++) {
        if (alphabet.includes(arrMessage[i])) {
          const ind =
            alphabet.indexOf(arrMessage[i]) - alphabet.indexOf(arrKey[i]) < 0
              ? alphabet.indexOf(arrMessage[i]) +
                26 -
                alphabet.indexOf(arrKey[i])
              : alphabet.indexOf(arrMessage[i]) - alphabet.indexOf(arrKey[i]);

          decMessage.push(alphabet[ind]);
        } else {
          decMessage.push(arrMessage[i]);
        }
      }
      return this.modeReverse
        ? decMessage.join("")
        : decMessage.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
