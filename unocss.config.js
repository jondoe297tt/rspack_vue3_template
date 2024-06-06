const { defineConfig, presetAttributify, presetUno ,presetIcons} = require("unocss");
module.exports = defineConfig({
  /** 预设 */
  presets: [
    /** 属性化模式 & 无值的属性模式 */
    presetAttributify(),
    /** 默认预设 */
    presetUno(),
    presetIcons({
      collections: {
        "my-icons":{
          plus:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17v-3H3v-2h3V9h2v3h3v2H8v3zm9.75 2V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z"/></svg>`,
          div:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10 14H3v-2h7zm5.75 5V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z"/></svg>`
        }
      },
    }),
  ],
  /** 自定义规则 */
  rules: [],
  /** 自定义快捷方式 */
  shortcuts: {
    "uno-wh-full": "w-full h-full",
    "uno-flex-center": "flex justify-center items-center",
    "uno-flex-x-center": "flex justify-center",
    "uno-flex-y-center": "flex items-center",
  },
  content: {
    pipeline: {
      include: [/\.(vue|[jt]sx|html)($|\?)/],
    },
  },
});
