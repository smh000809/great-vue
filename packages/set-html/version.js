// 把 package.json -> version 插入 index.html 的元信息 version 中
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { warn, log } from 'node:console'

const rootPath = resolve(import.meta.dirname, '../../') // 项目根目录
const fileParh = `${rootPath}/index.html`
let PackageJSON = readFileSync(`${rootPath}/package.json`, 'utf-8')
PackageJSON = JSON.parse(PackageJSON)
// 读取 index.html 文件内容
const indexHtml = readFileSync(fileParh, 'utf-8')
// 替换 meta 标签中的版本信息
const version = PackageJSON.version
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
