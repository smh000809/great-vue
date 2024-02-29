import { warn } from 'node:console'
import { rmSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

export function clearFolder(FileOrFolderPath) {
  const rootPath = resolve(import.meta.dirname, '../../') // 项目根目录
  const path = resolve(rootPath, FileOrFolderPath)
  if (!existsSync(path)) return warn(`未检测到${path}，已跳过任务。`)
  existsSync(path) && rmSync(path, { recursive: true })
}
