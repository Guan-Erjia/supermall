module.exports = {
  plugins: {
    autoprefixer: {},

    
      unitToConvert: 'px',
      viewportWidth: 320,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    
    // 'postcss-px-to-viewport': {
    //   unitToConvert: 'px',
    //   viewportWidth: 375,
    //   viewportHeight: 667,
    //   unitPrecision: 5,//最小位数
    //   viewportUnit: 'vw',
    //   selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
    //   minPixelValue: 1, //小于1不转换
    //   mediaQuery: false //允许在媒体查询中转换‘px’
    // }
  }
}