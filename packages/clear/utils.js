const {rmSync, existsSync} = require('node:fs')
const {resolve} = require('node:path')

module.exports.clearFolder = function (FileOrFolderPath) {
  const rootPath = resolve(__dirname, '../../') // 项目根目录
  const path = resolve(rootPath, FileOrFolderPath)
  existsSync(path) && rmSync(path, {recursive: true})
  console.log('***** This task is completed. *****')
}
