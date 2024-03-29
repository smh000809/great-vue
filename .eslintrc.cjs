// @ts-check
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting', '@unocss'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@unocss/blocklist': 'warn', // 禁止特定的类选择器[可选]
    '@unocss/order-attributify': 'warn', // 对属性选择器强制执行特定顺序
    '@unocss/order': 'warn', // 对属性选择器强制执行特定顺序

    /** @see https://zh-hans.eslint.org/docs/latest/rules/ */
    /** @see https://eslint.org/docs/latest/rules/ */
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
    'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    eqeqeq: 'error', // 要求使用 === 和 !==
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-empty': 'off', // 禁止出现空语句块
    'no-undef': 'off', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    // 'import/export': 'off', // 禁止使用一些指定的通过 import 加载的文件
    'no-unreachable': 'warn', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'prefer-template': 'warn', // 优先使用模板字面量而不是字符串连接
    curly: ['warn', 'multi-line'], // 要求使用一致的括号风格
    'no-undef-init': 'off', // 禁止将变量初始化为 undefined
    'no-unneeded-ternary': 'warn', // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-useless-concat': 'warn', // 禁止使用不必要的字符串连接

    /** @see https://typescript-eslint.io/rules */
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-unused-vars': 'off', // 禁止空接口
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/no-this-alias': 'off', // 禁止将 this 赋值给局部变量
    '@typescript-eslint/triple-slash-reference': 'off', // 要求或禁止使用三斜杠引入类型定义文件

    /** @see https://eslint.vuejs.org/rules */
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 'off',
  },
})
