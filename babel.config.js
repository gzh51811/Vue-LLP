module.exports = {
//   dev:{
//    // assetsSubDirectory:'static',
//    // assetxPublicPath:'/',
//     proxyTable:{
//         '/order_list':{
//             target:'http://localhost:1811'
//         }
//     }
// },
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}





