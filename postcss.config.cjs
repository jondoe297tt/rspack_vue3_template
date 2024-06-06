const UnoCSS = require("@unocss/postcss");
const autoprefixer = require("autoprefixer");

module.exports= {
  plugins: [UnoCSS(),autoprefixer(),],
};
