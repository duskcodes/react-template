const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const output = {
  filename: 'scripts/[name].[contenthash].js',
  chunkFilename: 'scripts/[id].[contenthash].js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '',
};

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html'),
    inject: 'body',
    scriptLoading: 'defer',
  }),
  new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: 'styles/[id].[contenthash].css',
  }),
];

const loaders = {
  extractCss: {
    loader: MiniCssExtractPlugin.loader,
    options: { publicPath: '/static/' },
  },
  resolveCss: {
    loader: 'css-loader',
    options: { modules: true },
  },
};

const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin({ extractComments: false })],
};

const developmentServer = {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: '',
  hot: true,
  watchContentBase: true,
  historyApiFallback: true,

  /**
   * Workaround hack for WSL 2 file changes not being picked up by
   * webpack-dev-server, so we poll the file system instead.
   *
   * Reference: https://github.com/microsoft/WSL/issues/4739
   */
  watchOptions: { poll: 500 },
};

module.exports = (_, webpackArguments) => {
  const rules = [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.s(a|c)ss$/,
      use: [
        webpackArguments.mode === 'development'
          ? 'style-loader'
          : loaders.extractCss,
        loaders.resolveCss,
        'postcss-loader',
        'sass-loader',
      ],
      exclude: /node_modules/,
    },
  ];

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output,
    plugins,
    module: { rules },
    optimization,
    devServer: developmentServer,
  };
};
