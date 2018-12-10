const base = {
  mode: 'development',

  entry: './entry/index.js',

  output: { filename: 'index.js' },

  resolve: { extensions: ['.js'] },

  devServer: {
    disableHostCheck: true,
    contentBase: './entry',
    port: 8000,
    host: '0.0.0.0',
    stats: 'minimal',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // modules: true,
              // localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',
}

if (process.env.NODE_ENV === 'prod') {
  base.entry = './entry/umd.js'
  base.mode = 'production'
  base.output = {
    library: 'Owl',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: `${__dirname}/build`,
  }
  base.externals = { react: 'react' }
  base.devtool = 'source-map'

  base.module.rules[1].use.forEach((loader) => {
    loader.options = { sourceMap: false } // eslint-disable-line no-param-reassign
  })
}

module.exports = base
