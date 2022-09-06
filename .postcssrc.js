// module.exports = {
//     plugins: {
//       // postcss-pxtorem 插件的版本需要 >= 5.0.0
//       'postcss-pxtorem': {
//         rootValue({ file }) {
//           return file.indexOf('vant') !== -1 ? 37.5 : 75;
//         },
//         propList: ['*'],
//       },
//     },
//   };
const pxToRem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    pxToRem({
      rootValue: ({ file }) => (/vant/.test(file) ? 37.5 : 75),
      propList: ['*']
    })
  ]
}
