{ context: '/Users/mlaroy/Sites/cascadia',
  entry: { app: '/Users/mlaroy/Sites/cascadia/.cache/production-app' },
  output: 
   { filename: '[name]-[contenthash].js',
     chunkFilename: '[name]-[contenthash].js',
     path: '/Users/mlaroy/Sites/cascadia/public',
     publicPath: '/' },
  module: 
   { rules: 
      [ { test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto' },
        { test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: 
           [ { options: {},
               loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/utils/babel-loader.js' } ] },
        { test: /\.ya?ml/,
          use: 
           [ { options: {},
               loader: '/Users/mlaroy/Sites/cascadia/node_modules/json-loader/index.js' },
             { options: {},
               loader: '/Users/mlaroy/Sites/cascadia/node_modules/yaml-loader/index.js' } ] },
        { use: 
           [ { loader: '/Users/mlaroy/Sites/cascadia/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/ },
        { use: 
           [ { loader: '/Users/mlaroy/Sites/cascadia/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/ },
        { use: 
           [ { loader: '/Users/mlaroy/Sites/cascadia/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(mp4|webm|wav|mp3|m4a|aac|oga|flac)$/ },
        { use: 
           [ { loader: '/Users/mlaroy/Sites/cascadia/node_modules/file-loader/dist/cjs.js',
               options: { name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.pdf$/ },
        { oneOf: 
           [ { test: /\.module\.css$/,
               use: 
                [ { options: { hmr: false },
                    loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1,
                       modules: true } },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/postcss-loader/src/index.js',
                    options: { sourceMap: false } } ] },
             { test: /\.css$/,
               use: 
                [ { options: {},
                    loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1 } },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/postcss-loader/src/index.js',
                    options: { sourceMap: false } } ] },
             { use: 
                [ { options: { hmr: false },
                    loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 1 } },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/node_modules/postcss-loader/lib/index.js',
                    options: 
                     { ident: 'postcss-1',
                       sourceMap: false,
                       plugins: [Function: plugins] } } ],
               test: /\.module\.css$/ },
             { use: 
                [ { options: { hmr: true },
                    loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                    options: 
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1 } },
                  { loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/node_modules/postcss-loader/lib/index.js',
                    options: 
                     { ident: 'postcss-2',
                       sourceMap: false,
                       plugins: [Function: plugins] } } ],
               test: /\.css$/ } ] },
        { test: /\.css$/,
          use: 
           [ { loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-purgecss/loader.js',
               options: 
                { content: 
                   [ '/Users/mlaroy/Sites/cascadia/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                  rejected: true,
                  printRejected: true,
                  printAll: false,
                  debug: true,
                  ignore: [],
                  tailwind: true,
                  develop: true,
                  whitelist: [ 'html', 'body', '.article-body .gatsby-resp-image-wrapper' ] } } ] } ] },
  plugins: 
   [ IgnorePlugin {
       options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
       checkIgnore: [Function: bound checkIgnore] },
     DefinePlugin {
       definitions: 
        { 'process.env': '{}',
          'process.env.NODE_ENV': '"production"',
          'process.env.PUBLIC_DIR': '"/Users/mlaroy/Sites/cascadia/public"',
          'process.env.BUILD_STAGE': '"build-javascript"',
          'process.env.CYPRESS_SUPPORT': undefined,
          'process.env.GATSBY_BUILD_STAGE': '"build-javascript"',
          __PATH_PREFIX__: '""' } },
     MiniCssExtractPlugin {
       options: 
        { filename: '[name].[contenthash].css',
          chunkFilename: '[name].[contenthash].css' } },
     GatsbyWebpackStatsExtractor { plugin: { name: 'GatsbyWebpackStatsExtractor' }, options: {} } ],
  target: 'web',
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader: 
   { modules: 
      [ '/Users/mlaroy/Sites/cascadia/node_modules',
        '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/loaders',
        'node_modules' ] },
  resolve: 
   { extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ],
     alias: 
      { 'gatsby$': '/Users/mlaroy/Sites/cascadia/.cache/gatsby-browser-entry.js',
        '@babel/runtime': '/Users/mlaroy/Sites/cascadia/node_modules/@babel/runtime',
        'core-js': '/Users/mlaroy/Sites/cascadia/node_modules/core-js',
        'react-hot-loader': '/Users/mlaroy/Sites/cascadia/node_modules/react-hot-loader',
        'react-lifecycles-compat': '/Users/mlaroy/Sites/cascadia/.cache/react-lifecycles-compat.js',
        'create-react-context': '/Users/mlaroy/Sites/cascadia/.cache/create-react-context.js' } },
  node: { __filename: true },
  optimization: 
   { runtimeChunk: { name: 'webpack-runtime' },
     splitChunks: 
      { name: false,
        cacheGroups: 
         { styles: 
            { name: 'styles',
              test: /\.(css|scss|sass|less|styl)$/,
              chunks: 'all',
              enforce: true } } },
     minimizer: 
      [ TerserPlugin {
          options: 
           { test: /\.m?js(\?.*)?$/i,
             chunkFilter: [Function: chunkFilter],
             warningsFilter: [Function: warningsFilter],
             extractComments: false,
             sourceMap: true,
             cache: true,
             cacheKeys: [Function: cacheKeys],
             parallel: true,
             include: undefined,
             exclude: /\.min\.js/,
             minify: undefined,
             terserOptions: 
              { output: { ecma: 5 },
                ie8: false,
                mangle: { safari10: true },
                parse: { ecma: 8 },
                compress: { ecma: 5 } } } },
        OptimizeCssAssetsWebpackPlugin {
          pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
          options: 
           { assetProcessors: 
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css$/g,
                  processor: [Function: processor] } ],
             canPrint: undefined,
             assetNameRegExp: /\.css$/g,
             cssProcessor: { [Function: creator] process: [Function] },
             cssProcessorOptions: {},
             cssProcessorPluginOptions: {} },
          phaseAssetProcessors: 
           { 'compilation.optimize-chunk-assets': 
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css$/g,
                  processor: [Function: processor] } ],
             'compilation.optimize-assets': [],
             emit: [] },
          deleteAssetsMap: {} } ] } }