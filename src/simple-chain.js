const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( ' + String(value) + ' )');

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || isNaN(position) || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    const chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
