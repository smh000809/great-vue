// json 文件排序
const {log, error} = require('node:console')
const {readFile, writeFile, readdirSync} = require('node:fs')
const {resolve} = require('node:path')
const {exec} = require('node:child_process')
const {promisify} = require('node:util')

const $exec = promisify(exec)

const $dirname = resolve(__dirname, '../../')

log(`基于目录：${$dirname}`)

// 读取 JSON 文件并排序，输出到指定目录
const loadJson = async ({jsonPath, outputPath, fileName, relativePath}) => {
  const readFilePath = resolve($dirname, jsonPath)
  const outputFilePath = resolve($dirname, outputPath) || readFilePath.replace(/.json$/, '.sort.json')
  readFile(readFilePath, 'utf8', (err, data) => {
    if (err) {
      error(err)
      return
    }

    try {
      // 解析 JSON 数据
      const jsonData = Object.entries(JSON.parse(data))

      // 对 JSON 数据进行排序
      const sortedData = jsonData.sort()

      const sortedJson = {}
      for (const [key, value] of sortedData) {
        sortedJson[key] = value
      }

      // 将排序后的数据转换回 JSON 格式
      const _sortedJson = JSON.stringify(sortedJson, null, 2)

      // 将排序后的数据写入文件
      writeFile(outputFilePath, _sortedJson, 'utf8', (err) => {
        if (err) {
          error(err)
          return
        }
        log(
          `${fileName} -> 排序完成，${jsonData.length === Object.keys(sortedJson).length ? '数据完整' : '数据不完整'}`,
        )
      })
    } catch (err) {
      error('无法解析 JSON 数据:', err)
    }
  })
}

const startLoad = async (relativePath = '/src/i18n/modules') => {
  log(`寻找目录：${relativePath}`)
  // 获取 src/i18n/modules 目录下的所有文件
  const languagesFinder = resolve($dirname, `./${relativePath}`)
  const languages = readdirSync(languagesFinder).filter((v) => v.endsWith('.json'))
  log(`找到${languages.length}个 JSON 文件`)
  log('开始排序...'.repeat(2))
  log('*'.repeat(30))
  const allLanguages = languages.map((language) => {
    return {
      jsonPath: `${languagesFinder}/${language}`,
      outputPath: `${languagesFinder}/${language}`,
      fileName: language,
      relativePath,
    }
  })
  await Promise.all(
    allLanguages.map(async (language) => {
      await loadJson({
        jsonPath: language.jsonPath,
        outputPath: language.outputPath,
        fileName: language.fileName,
        relativePath: language.relativePath,
      })
    }),
  )
  const {stdout, stderr} = await $exec('pnpm run format:json')
  log('*'.repeat(30))
  log('='.repeat(30))
  log('开始格式化...'.repeat(2))
  log(stdout)
  stderr && error(stderr)
  log('Done.')
}

startLoad('/src/i18n/modules') // 把 src/i18n/modules 路径下的 json 文件排序后，输入到原文件
