const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Webpack = require('webpack');

const PUBLIC_CONFIG = require('./src/config/public');

const GOOGLE_ANALYTICS_URL = 'https://www.google-analytics.com';

function composePlugins(isProduction) {
  return [
    new Webpack.DefinePlugin({
      IS_PRODUCTION: isProduction,
    }),

    // TODO: Pass customised html-minifier-terser options to minify inline JS.
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, 'src/index.html'),
      title: PUBLIC_CONFIG.TITLE,
      description: PUBLIC_CONFIG.DESCRIPTION,
      googleAnalyticsPropertyId: PUBLIC_CONFIG.GOOGLE_ANALYTICS_PROPERTY_ID,
      isProduction,
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new CspHtmlWebpackPlugin(
      {
        'connect-src': [GOOGLE_ANALYTICS_URL],
        'default-src': ["'none'"],
        'font-src': ['https://fonts.gstatic.com'],
        'img-src': ["'self'", GOOGLE_ANALYTICS_URL],
        'manifest-src': ["'self'"],
        'object-src': ["'none'"],
        'script-src': [
          "'self'",
          'https://www.googletagmanager.com',
          GOOGLE_ANALYTICS_URL,
          'https://ssl.google-analytics.com',
        ],
        'style-src': ["'self'", 'https://fonts.googleapis.com'],
      },
      { enabled: isProduction }
    ),
    new FaviconsWebpackPlugin({
      logo: Path.resolve(__dirname, 'src/assets/favicons/favicon.png'),
      cache: true,
      prefix: 'assets/favicons/',
      inject: true,
      favicons: {
        version: null,
        lang: 'en',
        background: '#000000',
        theme_color: '#000000',
        appleStatusBarStyle: 'black',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css',
      chunkFilename: 'assets/styles/[id].[contenthash].css',
    }),
  ];
}

function composeModule(isProduction) {
  const extractCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: { publicPath: '/' },
  };

  const resolveCssLoader = {
    loader: 'css-loader',
    options: { modules: true },
  };

  return {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          isProduction ? extractCssLoader : 'style-loader',
          resolveCssLoader,
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        exclude: /node_modules/,
      },
    ],
  };
}

function composeOptimisation(isProduction) {
  return {
    minimize: isProduction,
    minimizer: [new TerserPlugin({ extractComments: false })],
  };
}

const entry = {
  polyfills: Path.resolve(__dirname, 'src/polyfills.js'),
  index: Path.resolve(__dirname, 'src/index.js'),
};

const output = {
  filename: 'assets/scripts/[name].[contenthash].js',
  chunkFilename: 'assets/scripts/[id].[contenthash].js',
  assetModuleFilename: 'assets/images/[name].[contenthash][ext][query]',
  path: Path.resolve(__dirname, 'dist'),
  publicPath: '/',
};

const developmentServer = {
  contentBase: Path.resolve(__dirname, 'dist'),
  publicPath: '/',
  hot: true,
  watchContentBase: true,
  historyApiFallback: true,

  /**
   * Workaround hack for WSL 2 file changes not being picked up by
   * webpack-dev-server, so we poll the file system instead.
   *
   * Reference: https://github.com/microsoft/WSL/issues/4739
   */
  watchOptions: {
    poll: 500,
    ignored: /node_modules/,
  },
};

module.exports = (_, webpackArguments) => {
  const isProduction = webpackArguments.mode === 'production';

  return {
    entry,
    output,
    plugins: composePlugins(isProduction),
    module: composeModule(isProduction),
    optimization: composeOptimisation(isProduction),
    devServer: developmentServer,
  };
};
