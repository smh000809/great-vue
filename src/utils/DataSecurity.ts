// 数据加解密方案
import CryptoJSAES from 'crypto-js/aes'
import CryptoJSENCUTF8 from 'crypto-js/enc-utf8'
import type {StateTree} from 'pinia'

/**
 * @example 使用示例:
 * import { DataSecurity } from '@/utils';
 * // 实例化
 * const useDataSecurity = new DataSecurity(); // 默认密钥为'dpex-web-background'
 * // 加密
 * const encrypt = useDataSecurity.encryptData({
 *  string: 'string',
 *  number: 250,
 *  boolean: true,
 *  boolean2: false,
 *  null: null,
 * });
 * console.log(encrypt); // U2FsdGVkX18439r69XLX9yQeVSO5a2YA1cGSe7bfhyNpKEjmRJTbJOJ8LOYjbY+GbJJ7DuV2NJlzFJ3TfbPoMEqcrfoLAD43DWLq4+kGdnuWnnMG6GkicoSpnuC+KaIT
 * // 解密的到原数据
 * console.log(useDataSecurity.decryptData(encrypt)); // {string: "string", number: 250, boolean: true, boolean2: false, null: null}
 */
export default class DataSecurity {
  key: string
  constructor(key: string = '__GREATE_VUE__') {
    this.key = key
  }
  encryptData(data: any) {
    const _data = JSON.stringify(data)
    return CryptoJSAES.encrypt(_data, this.key).toString()
  }

  decryptData(data: string) {
    let decrypted = CryptoJSAES.decrypt(data, this.key).toString(CryptoJSENCUTF8)
    return decrypted ? JSON.parse(decrypted) : decrypted
  }
}

export const serializer = () => {
  const useDataSecurity = new DataSecurity()
  return {
    serialize: (value: StateTree) => useDataSecurity.encryptData(value),
    deserialize: (value: string) => useDataSecurity.decryptData(value),
  }
}
