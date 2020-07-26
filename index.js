// 已注册的GP
const registedGrayLevel = {}

class GrayLevel {
  constructor(key, matched) {
    this.key = key
    this.matched = matched
    this.results = {}
  }

  match(strOrFn) {
    this.results.match = strOrFn

    return this
  }

  not(strOrFn) {
    this.results.not = strOrFn
    const realStrOrFn = this.matched ? this.results.match : this.results.not
    const result = typeof realStrOrFn === 'function' ? realStrOrFn() : realStrOrFn

    return result
  }
}

export function init(key, matched) {
  if (!registedGrayLevel[key]) {
    return (registedGrayLevel[key] = new GrayLevel(key, matched))
  }
  return registedGrayLevel[key]
}
