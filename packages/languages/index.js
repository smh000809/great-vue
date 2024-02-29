import { writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { log } from 'node:console'

// const jsonPath = resolve('../../src/i18n/modules/zh-CN.json')
const jsonPath = resolve('./translate.entry.json')
const zhCN = JSON.parse(readFileSync(jsonPath, 'utf-8'))

const translateEntryJsonPath = resolve('./translate.entry.json')
const languagesLocalesPath = resolve('./locales')
log(translateEntryJsonPath)
log(languagesLocalesPath)

let zhCNObj = {
  ...zhCN,
}
Object.entries(zhCN).forEach(([key, value]) => {
  const match = String(value).match(/\{.*?\}/g)
  let value_ = String(value)
  if (!match) return
  match.forEach(item => {
    value_ = value_.replace(item, `{{${item.slice(1, -1)}}}`)
  })
  log(`${key}: value-->`, value_)
  zhCNObj[key] = value_
  log('-'.repeat(60))
})
// 把 zhCN 的 内容复制到 languages/translate.entry.json 中
writeFileSync(translateEntryJsonPath, JSON.stringify(zhCNObj))

// 删除 ./languages/locales 下所有文件
existsSync(languagesLocalesPath) && rmSync(languagesLocalesPath, { recursive: true })
