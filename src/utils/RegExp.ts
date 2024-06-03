/** @description 快捷正则表达式 */
const RegExp = Object.freeze({
  // 火车车次
  train_number: /^[GCDZTSPKXLY1-9]\d{1,4}$/,
  // 户口薄
  household_register: /^[a-zA-Z0-9]{3,21}$/,
  // 域名（非网址，不包含协议）
  domain_name_no_url_protocol: /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/,
  // 网址
  url: /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?.)+[a-z]{2,6}\/?/,
  // 正整数, 不包含0
  positive_integer: /^\+?[1-9]\d*$/,
  // 负整数，不包含0
  negative_integer: /^-[1-9]\d*$/,
  // 整数
  integer: /^(?:0|(?:-?[1-9]\d*))$/,
  // 浮点数
  float: /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/,
  // 严格浮点数
  float_strict: /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/,
  // 中国邮政编码
  postal_code_china: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
  // 中文或者汉字
  chinese_characters:
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
  // 必须带端口号的网址（或ip）
  url_with_port_number_required: /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,
  // 统一社会信用代码
  unify_social_credit_code: /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,
  // 统一社会信用代码（宽松匹配）（15位/18位/20位数字/字母）
  unify_social_credit_code_loose_matching: /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/,
  // md5 32位
  md5_32: /^[a-fA-F0-9]{32}$/,
  // guid/uuid
  guid_uuid: /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i,
  // 版本号 x.y.z
  version_x_y_z: /^\d+(?:\.\d+){2}$/,
  // 24小时制时间 (HH:mm:ss)
  time_24: /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
  // 12小时制时间 (hh:mm:ss)
  time_12: /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,
  // base64格式
  base64: /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,
  // 中文姓名
  cn_name: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
  // 英文姓名
  en_name: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
  // 只能包含数字
  only_number: /^\d+$/,
  // 非负浮点数
  non_negative_floating_point_number: /^\d+(\.\d+)?$/,
  // 负浮点数
  negative_floating_point_number: /^(-((\d+\.\d*[1-9]\d*)|(\d*[1-9]\d*\.\d+)|(\d*[1-9]\d*)))$/,
  // 手机号
  phone: /^1[3456789]\d{9}$/,
  // 支持短信功能的号码（手机卡 + 上网卡）
  phoneNetwork: /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4[579]\d{2})\d{6}$/g,
  // 邮箱
  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/,
  // 中文邮箱
  emailCN: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g,
  // IP地址白名单
  ipWhiteList: /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,
  // 中国大陆手机号
})

export default RegExp
