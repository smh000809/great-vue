// 把 package.json -> version 插入 index.html 的元信息 version 中
const {readFileSync, writeFileSync} = require('node:fs')
const {resolve} = require('node:path')
const {warn, log} = require('node:console')
const pageage = require('../../package.json')

const rootPath = resolve(__dirname, '../../') // 项目根目录
const fileParh = `${rootPath}/index.html`
// 读取 index.html 文件内容
const indexHtml = readFileSync(fileParh, 'utf-8')
// 替换 meta 标签中的版本信息
const version = pageage.version
if (version) {
  const searchValue = /<meta name="version" content=".*" \/>/
  const replaceValue = `<meta name="version" content="${version}" />`
  const updatedIndexHtml = indexHtml.replace(searchValue, replaceValue)

  // 将更新后的内容写入 index.html 文件
  writeFileSync(fileParh, updatedIndexHtml, 'utf-8')
  log(`文件 /index.html 版本号设置成功: ${version}`)
  log(`${replaceValue} -> 已插入 /index.html`)
} else {
  warn('获取版本信息失败')
}
