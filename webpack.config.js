


module.exports = {
  mode: 'development',
  entry: {
    main: './js/main.js',
    form: './js/form.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/build",
  },
  module:  {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },

  watch: true

}
