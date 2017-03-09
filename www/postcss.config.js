module.exports = {
  plugins: {
  	'postcss-flexibility':{},
    'postcss-cssnext': {
      browsers: ['last 5 versions', '> 2%'],
      warnForDuplicates: false
    },
    'cssnano':{}
  }
};