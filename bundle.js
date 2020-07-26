(function (exports) {
  'use strict';

  // 已注册的GP
  const registedGrayLevel = {};

  class GrayLevel {
    constructor(key, matched) {
      this.key = key;
      this.matched = matched;
      this.results = {};
    }

    match(strOrFn) {
      this.results.match = strOrFn;

      return this
    }

    not(strOrFn) {
      this.results.not = strOrFn;
      const realStrOrFn = this.matched ? this.results.match : this.results.not;
      const result = typeof realStrOrFn === 'function' ? realStrOrFn() : realStrOrFn;

      return result
    }
  }

  function init(key, matched) {
    if (!registedGrayLevel[key]) {
      return (registedGrayLevel[key] = new GrayLevel(key, matched))
    }
    return registedGrayLevel[key]
  }


  const matched = false;
  const headUI = init('head_ui', matched);
  headUI.match(() => {
    console.log('match');
  }).not(() => {
    console.log('not match');
  });

  exports.init = init;

  return exports;

}({}));
