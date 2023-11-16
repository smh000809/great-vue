import {Lang} from 'language-translate/types'
import {defineConfig} from 'language-translate/utils'

export default defineConfig({
  proxy: {
    host: '127.0.0.1',
    port: 7890,
  },
  fromLang: Lang['zh-CN'],
  fromPath: './translate.entry.json',
  translateRuntimeMergeEnabled: false,
  translate: [
    {
      label: '翻译后的文件在 ./locales 目录下',
      targetConfig: [
        // {
        //   targetLang: Lang['zh-CN'], // Chinese(Simplified) / 中文(简体)
        //   outPath: './locales/zh-CN.json',
        // },
        {
          targetLang: Lang['zh-TW'], // Chinese(Traditional) / 中文(繁體)
          outPath: './locales/zh-TW.json',
        },
        {
          targetLang: Lang.en, // English / 英语
          outPath: './locales/en.json',
        },
        // {
        //   targetLang: Lang.af, // Afrikaans / 南非荷兰语
        //   outPath: './locales/af.json',
        // },
        // {
        //   targetLang: Lang.sq, // Albanian / 阿尔巴尼亚语
        //   outPath: './locales/sq.json',
        // },
        // {
        //   targetLang: Lang.am, // Amharic / 阿姆哈拉语
        //   outPath: './locales/am.json',
        // },
        // {
        //   targetLang: Lang.ar, // Arabic / 阿拉伯语
        //   outPath: './locales/ar.json',
        // },
        // {
        //   targetLang: Lang.hy, // Armenian / 亚美尼亚语
        //   outPath: './locales/hy.json',
        // },
        // {
        //   targetLang: Lang.az, // Azerbaijani / 阿塞拜疆语
        //   outPath: './locales/az.json',
        // },
        // {
        //   targetLang: Lang.eu, // Basque / 巴斯克语
        //   outPath: './locales/eu.json',
        // },
        {
          targetLang: Lang.be, // Belarusian / 白俄罗斯语
          outPath: './locales/be.json',
        },
        // {
        //   targetLang: Lang.bn, // Bengali / 孟加拉语
        //   outPath: './locales/bn.json',
        // },
        // {
        //   targetLang: Lang.bs, // Bosnian / 波斯尼亚语
        //   outPath: './locales/bs.json',
        // },
        // {
        //   targetLang: Lang.bg, // Bulgarian / 保加利亚语
        //   outPath: './locales/bg.json',
        // },
        // {
        //   targetLang: Lang.ca, // Catalan / 加泰罗尼亚语
        //   outPath: './locales/ca.json',
        // },
        // {
        //   targetLang: Lang.ceb, // Cebuano / 宿雾语
        //   outPath: './locales/ceb.json',
        // },
        // {
        //   targetLang: Lang.ny, // Chichewa / 齐切瓦语
        //   outPath: './locales/ny.json',
        // },
        // {
        //   targetLang: Lang.co, // Corsican / 科西嘉语
        //   outPath: './locales/co.json',
        // },
        // {
        //   targetLang: Lang.hr, // Croatian / 克罗地亚语
        //   outPath: './locales/hr.json',
        // },
        // {
        //   targetLang: Lang.cs, // Czech / 捷克语
        //   outPath: './locales/cs.json',
        // },
        // {
        //   targetLang: Lang.da, // Danish / 丹麦语
        //   outPath: './locales/da.json',
        // },
        // {
        //   targetLang: Lang.nl, // Dutch / 荷兰语
        //   outPath: './locales/nl.json',
        // },
        // {
        //   targetLang: Lang.eo, // Esperanto / 世界语
        //   outPath: './locales/eo.json',
        // },
        // {
        //   targetLang: Lang.et, // Estonian / 爱沙尼亚语
        //   outPath: './locales/et.json',
        // },
        // {
        //   targetLang: Lang.tl, // Filipino / 菲律宾语
        //   outPath: './locales/tl.json',
        // },
        // {
        //   targetLang: Lang.fi, // Finnish / 芬兰语
        //   outPath: './locales/fi.json',
        // },
        // {
        //   targetLang: Lang.fr, // French / 法语
        //   outPath: './locales/fr.json',
        // },
        // {
        //   targetLang: Lang.fy, // Frisian / 弗里斯兰语
        //   outPath: './locales/fy.json',
        // },
        // {
        //   targetLang: Lang.gl, // Galician / 加利西亚语
        //   outPath: './locales/gl.json',
        // },
        // {
        //   targetLang: Lang.ka, // Georgian / 格鲁吉亚语
        //   outPath: './locales/ka.json',
        // },
        // {
        //   targetLang: Lang.de, // German / 德语
        //   outPath: './locales/de.json',
        // },
        // {
        //   targetLang: Lang.el, // Greek / 希腊语
        //   outPath: './locales/el.json',
        // },
        // {
        //   targetLang: Lang.gu, // Gujarati / 古吉拉特语
        //   outPath: './locales/gu.json',
        // },
        // {
        //   targetLang: Lang.ht, // Haitian Creole / 海地克里奥尔语
        //   outPath: './locales/ht.json',
        // },
        // {
        //   targetLang: Lang.haw, // Hausa / 夏威夷语
        //   outPath: './locales/haw.json',
        // },
        // {
        //   targetLang: Lang.iw, // Hebrew / 希伯来语
        //   outPath: './locales/iw.json',
        // },
        // {
        //   targetLang: Lang.hi, // Hindi / 印地语
        //   outPath: './locales/hi.json',
        // },
        // {
        //   targetLang: Lang.hmn, // Hmong / 苗语
        //   outPath: './locales/hmn.json',
        // },
        // {
        //   targetLang: Lang.hu, // Hungarian / 匈牙利语
        //   outPath: './locales/hu.json',
        // },
        // {
        //   targetLang: Lang.is, // Icelandic / 冰岛语
        //   outPath: './locales/is.json',
        // },
        // {
        //   targetLang: Lang.ig, // Igbo / 伊博语
        //   outPath: './locales/ig.json',
        // },
        // {
        //   targetLang: Lang.id, // Indonesian / 印度尼西亚语
        //   outPath: './locales/id.json',
        // },
        // {
        //   targetLang: Lang.ga, // Irish / 爱尔兰语
        //   outPath: './locales/ga.json',
        // },
        // {
        //   targetLang: Lang.it, // Italian / 意大利语
        //   outPath: './locales/it.json',
        // },
        // {
        //   targetLang: Lang.ja, // Japanese / 日语
        //   outPath: './locales/ja.json',
        // },
        // {
        //   targetLang: Lang.jw, // Javanese / 爪哇语
        //   outPath: './locales/jw.json',
        // },
        // {
        //   targetLang: Lang.kn, // Kannada / 卡纳达语
        //   outPath: './locales/kn.json',
        // },
        // {
        //   targetLang: Lang.kk, // Kazakh / 哈萨克语
        //   outPath: './locales/kk.json',
        // },
        // {
        //   targetLang: Lang.km, // Khmer / 高棉语
        //   outPath: './locales/km.json',
        // },
        // {
        //   targetLang: Lang.ko, // Korean / 韩语
        //   outPath: './locales/ko.json',
        // },
        // {
        //   targetLang: Lang.ku, // Kurdish (Kurmanji) / 库尔德语(库尔曼吉)
        //   outPath: './locales/ku.json',
        // },
        // {
        //   targetLang: Lang.ky, // Kyrgyz / 吉尔吉斯语
        //   outPath: './locales/ky.json',
        // },
        // {
        //   targetLang: Lang.lo, // Lao / 老挝语
        //   outPath: './locales/lo.json',
        // },
        // {
        //   targetLang: Lang.la, // Latin / 拉丁语
        //   outPath: './locales/la.json',
        // },
        // {
        //   targetLang: Lang.lv, // Latvian / 拉脱维亚语
        //   outPath: './locales/lv.json',
        // },
        // {
        //   targetLang: Lang.lt, // Lithuanian / 立陶宛语
        //   outPath: './locales/lt.json',
        // },
        // {
        //   targetLang: Lang.lb, // Luxembourgish / 卢森堡语
        //   outPath: './locales/lb.json',
        // },
        // {
        //   targetLang: Lang.mk, // Macedonian / 马其顿语
        //   outPath: './locales/mk.json',
        // },
        // {
        //   targetLang: Lang.mg, // Malagasy / 马达加斯加语
        //   outPath: './locales/mg.json',
        // },
        // {
        //   targetLang: Lang.ms, // Malay / 马来语
        //   outPath: './locales/ms.json',
        // },
        // {
        //   targetLang: Lang.ml, // Malayalam / 马拉雅拉姆语
        //   outPath: './locales/ml.json',
        // },
        // {
        //   targetLang: Lang.mt, // Maltese / 马耳他语
        //   outPath: './locales/mt.json',
        // },
        // {
        //   targetLang: Lang.mi, // Maori / 毛利语
        //   outPath: './locales/mi.json',
        // },
        // {
        //   targetLang: Lang.mr, // Marathi / 马拉地语
        //   outPath: './locales/mr.json',
        // },
        // {
        //   targetLang: Lang.mn, // Mongolian / 蒙古语
        //   outPath: './locales/mn.json',
        // },
        // {
        //   targetLang: Lang.my, // Myanmar (Burmese) / 缅甸语(缅甸语)
        //   outPath: './locales/my.json',
        // },
        // {
        //   targetLang: Lang.ne, // Nepali / 尼泊尔语
        //   outPath: './locales/ne.json',
        // },
        // {
        //   targetLang: Lang.no, // Norwegian / 挪威语
        //   outPath: './locales/no.json',
        // },
        // {
        //   targetLang: Lang.ps, // Pashto / 普什图语
        //   outPath: './locales/ps.json',
        // },
        // {
        //   targetLang: Lang.fa, // Persian / 波斯语
        //   outPath: './locales/fa.json',
        // },
        // {
        //   targetLang: Lang.pl, // Polish / 波兰语
        //   outPath: './locales/pl.json',
        // },
        // {
        //   targetLang: Lang.pt, // Portuguese / 葡萄牙语
        //   outPath: './locales/pt.json',
        // },
        // {
        //   targetLang: Lang.pa, // Punjabi / 旁遮普语
        //   outPath: './locales/pa.json',
        // },
        // {
        //   targetLang: Lang.ro, // Romanian / 罗马尼亚语
        //   outPath: './locales/ro.json',
        // },
        // {
        //   targetLang: Lang.ru, // Russian / 俄语
        //   outPath: './locales/ru.json',
        // },
        // {
        //   targetLang: Lang.sm, // Samoan / 萨摩亚语
        //   outPath: './locales/sm.json',
        // },
        // {
        //   targetLang: Lang.gd, // Scots Gaelic / 苏格兰盖尔语
        //   outPath: './locales/gd.json',
        // },
        // {
        //   targetLang: Lang.sr, // Serbian / 塞尔维亚语
        //   outPath: './locales/sr.json',
        // },
        // {
        //   targetLang: Lang.st, // Sesotho / 塞索托语
        //   outPath: './locales/st.json',
        // },
        // {
        //   targetLang: Lang.sn, // Shona / 绍纳语
        //   outPath: './locales/sn.json',
        // },
        // {
        //   targetLang: Lang.sd, // Sindhi / 信德语
        //   outPath: './locales/sd.json',
        // },
        // {
        //   targetLang: Lang.si, // Sinhala / 僧伽罗语
        //   outPath: './locales/si.json',
        // },
        // {
        //   targetLang: Lang.sk, // Slovak / 斯洛伐克语
        //   outPath: './locales/sk.json',
        // },
        // {
        //   targetLang: Lang.sl, // Slovenian / 斯洛文尼亚语
        //   outPath: './locales/sl.json',
        // },
        // {
        //   targetLang: Lang.so, // Somali / 索马里语
        //   outPath: './locales/so.json',
        // },
        // {
        //   targetLang: Lang.es, // Spanish / 西班牙语
        //   outPath: './locales/es.json',
        // },
        // {
        //   targetLang: Lang.su, // Sundanese / 巽他语
        //   outPath: './locales/su.json',
        // },
        // {
        //   targetLang: Lang.sw, // Swahili / 斯瓦希里语
        //   outPath: './locales/sw.json',
        // },
        // {
        //   targetLang: Lang.sv, // Swedish / 瑞典语
        //   outPath: './locales/sv.json',
        // },
        // {
        //   targetLang: Lang.tg, // Tajik / 塔吉克语
        //   outPath: './locales/tg.json',
        // },
        // {
        //   targetLang: Lang.ta, // Tamil / 泰米尔语
        //   outPath: './locales/ta.json',
        // },
        // {
        //   targetLang: Lang.te, // Telugu / 泰卢固语
        //   outPath: './locales/te.json',
        // },
        // {
        //   targetLang: Lang.th, // Thai / 泰语
        //   outPath: './locales/th.json',
        // },
        // {
        //   targetLang: Lang.tr, // Turkish / 土耳其语
        //   outPath: './locales/tr.json',
        // },
        // {
        //   targetLang: Lang.uk, // Ukrainian / 乌克兰语
        //   outPath: './locales/uk.json',
        // },
        // {
        //   targetLang: Lang.ur, // Urdu / 乌尔都语
        //   outPath: './locales/ur.json',
        // },
        // {
        //   targetLang: Lang.uz, // Uzbek / 乌兹别克语
        //   outPath: './locales/uz.json',
        // },
        // {
        //   targetLang: Lang.vi, // Vietnamese / 越南语
        //   outPath: './locales/vi.json',
        // },
        // {
        //   targetLang: Lang.cy, // Welsh / 威尔士语
        //   outPath: './locales/cy.json',
        // },
        // {
        //   targetLang: Lang.xh, // Xhosa / 科萨语
        //   outPath: './locales/xh.json',
        // },
        // {
        //   targetLang: Lang.yi, // Yiddish / 依地语
        //   outPath: './locales/yi.json',
        // },
        // {
        //   targetLang: Lang.yo, // Yoruba / 约鲁巴语
        //   outPath: './locales/yo.json',
        // },
        // {
        //   targetLang: Lang.zu, // Zulu / 祖鲁语
        //   outPath: './locales/zu.json',
        // },
      ],
    },
  ],
})
