# 前端灰度
前端开发中会有一些类似ABTest或者灰度相关的需求。在传统的开发中，会通过类似 `if-else` 的形式去组织代码。但是当灰度版本变多、灰度代码涉及的文件较多时，会使代码变得 `丑陋`。所以我们希望有一种更 `优雅` 的方式去处理前端灰度相关需求。

## 传统 `丑陋` 的灰度代码
```javascript
const isMatchGray = Boolean(Math.random() > 0.5)

function App() {

  const title = isMatchGray ? 'title' : 'newTitle'
  const containerStyle = isMatchGray ? { background: '#ccc' } : { background: '#eee' }

  return (
    <div style={containerStyle}>
      <div>{title}</div>
    </div>
  )
}
```

此时，当有一个新的灰度需求出现，我们需要调整代码：
```javascript
const isMatchGrayOfA = Boolean(Math.random() > 0.5)
const isMatchGrayOfB = Boolean(Math.random() > 0.5)

function App() {

  const title = isMatchGrayOfA ? 'title' : 'newTitle'
  const containerStyle = isMatchGrayOfB ? { background: '#ccc' } : { background: '#eee' }

  return (
    <div style={containerStyle}>
      <div>{title}</div>
    </div>
  )
}
```

## 设计更有 语义化 的灰度api
```javascript
// 1. 传入字符串
GrayVersion.match('return when matched').not('return when matched')

// 2. 传入函数
GrayVersion
  .match(() => {
    msg: 'return a function will perform when matched'
  })
  .not(() => {
    msg: 'return a function will perform when not matched'
  })
```
## 最终的灰度代码
```javascript
import GL from 'gray-level'

const isMatchGrayOfA = Boolean(Math.random() > 0.5)
const isMatchGrayOfB = Boolean(Math.random() > 0.5)
const GrayOfA = GL.init('A', isMatchGrayOfA)
const GrayOfB = GL.init('B', isMatchGrayOfB)

function App() {

  const title = GrayOfA.match('title').not('newTitle')
  const containerStyle = GrayOfB.match({ background: '#ccc' }).not({ background: '#eee' })

  return (
    <div style={containerStyle}>
      <div>{title}</div>
    </div>
  )
}
```