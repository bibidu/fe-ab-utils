import {
  glAddModal7_24,
} from './utils/grayLevel'

// 当匹配该灰度版本时 isShowModal的值为true，否则isShowModal的值为false
const isShowModal = glAddModal7_24.match(true).not(false)

// match、not均支持传入函数，当传入函数时，会在 匹配/不匹配 灰度版本时 返回对应的函数返回值
const containerStyle = glAddModal7_24.match(() => ({ background: '#ccc' })).not({})
