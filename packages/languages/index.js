const {writeFileSync, readdirSync, unlinkSync} = require('node:fs')
const {resolve} = require('node:path')
const {log} = require('node:console')
/** 转换项目依赖的 zh-CN 包 */
// const zhCN = require('../../src/i18n/modules/zh-CN.json')
/** 仅转换 translate.entry.json  */
const zhCN = require('./translate.entry.json')

const rootPath = resolve(__dirname, './') // 项目根目录
const translateEntryJsonPath = `${rootPath}/translate.entry.json`
const languagesLocalesPath = `${rootPath}/locales`

let zhCNObj = {
  ...zhCN,
}
Object.entries(zhCN).forEach(([key, value]) => {
  const match = String(value).match(/\{.*?\}/g)
  let value_ = String(value)
  if (!match) return
  match.forEach((item) => {
    value_ = value_.replace(item, `{{${item.slice(1, -1)}}}`)
  })
  log(`${key}: value-->`, value_)
  zhCNObj[key] = value_
  log('-'.repeat(60))
})

// 把 zhCN 的 内容复制到 languages/translate.entry.json 中
writeFileSync(translateEntryJsonPath, JSON.stringify(zhCNObj))

// 删除 ./languages/locales 下所有文件
readdirSync(languagesLocalesPath).forEach((file) => {
  unlinkSync(`${languagesLocalesPath}/${file}`)
})
