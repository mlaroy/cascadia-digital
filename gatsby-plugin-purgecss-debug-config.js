{
  context: '/Users/mlaroy/Sites/cascadia',
  entry: {
    polyfill: '/Users/mlaroy/Sites/cascadia/.cache/polyfill-entry',
    app: '/Users/mlaroy/Sites/cascadia/.cache/production-app'
  },
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].js',
    path: '/Users/mlaroy/Sites/cascadia/public',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        include: [Function: include],
        type: 'javascript/auto',
        use: [
          {
            options: {
              stage: 'build-javascript',
              reactRuntime: 'classic',
              cacheDirectory: '/Users/mlaroy/Sites/cascadia/.cache/webpack/babel',
              configFile: true,
              compact: true,
              rootDir: '/Users/mlaroy/Sites/cascadia'
            },
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/utils/babel-loader.js'
          }
        ]
      },
      {
        test: /\.ya?ml$/,
        use: [
          {
            options: {},
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/json-loader/index.js'
          },
          {
            options: {},
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/yaml-loader/index.js'
          }
        ]
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name]-[hash].[ext]',
              fallback: '/Users/mlaroy/Sites/cascadia/node_modules/file-loader/dist/cjs.js'
            }
          }
        ],
        test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name]-[hash].[ext]',
              fallback: '/Users/mlaroy/Sites/cascadia/node_modules/file-loader/dist/cjs.js'
            }
          }
        ],
        test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name]-[hash].[ext]',
              fallback: '/Users/mlaroy/Sites/cascadia/node_modules/file-loader/dist/cjs.js'
            }
          }
        ],
        test: /\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/file-loader/dist/cjs.js',
            options: { name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.pdf$/
      },
      {
        test: '/Users/mlaroy/Sites/cascadia/node_modules/@reach/router/es/index.js',
        type: 'javascript/auto',
        use: [
          {
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/utils/reach-router-add-basecontext-export-loader.js'
          }
        ]
      },
      {
        test: /\.(js|mjs)$/,
        exclude: [Function: exclude],
        type: 'javascript/auto',
        use: [
          {
            options: {
              cacheDirectory: '/Users/mlaroy/Sites/cascadia/.cache/webpack/babel',
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  '/Users/mlaroy/Sites/cascadia/node_modules/babel-preset-gatsby/dependencies.js',
                  { stage: 'build-javascript' }
                ]
              ],
              sourceMaps: false,
              cacheIdentifier: '{"browerslist":[">0.25%","not dead"],"gatsbyPreset":"0.6.0"}'
            },
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  importLoaders: 1,
                  modules: true
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-purgecss/loader.js',
                options: {
                  content: [
                    '/Users/mlaroy/Sites/cascadia/src/**/!(*.d).{ts,js,jsx,tsx}'
                  ],
                  rejected: true,
                  printRejected: true,
                  printAll: false,
                  debug: true,
                  develop: false,
                  tailwind: true,
                  ignore: [],
                  purgeOnly: [],
                  extractors: [],
                  whitelist: [
                    'html',
                    'body',
                    '.article-body .gatsby-resp-image-wrapper'
                  ],
                  defaultExtractor: [Function (anonymous)]
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/dist/cjs.js',
                options: { sourceMap: false, postcssOptions: {} }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                options: {},
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  importLoaders: 1
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-purgecss/loader.js',
                options: {
                  content: [
                    '/Users/mlaroy/Sites/cascadia/src/**/!(*.d).{ts,js,jsx,tsx}'
                  ],
                  rejected: true,
                  printRejected: true,
                  printAll: false,
                  debug: true,
                  develop: false,
                  tailwind: true,
                  ignore: [],
                  purgeOnly: [],
                  extractors: [],
                  whitelist: [
                    'html',
                    'body',
                    '.article-body .gatsby-resp-image-wrapper'
                  ],
                  defaultExtractor: [Function (anonymous)]
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/dist/cjs.js',
                options: { sourceMap: false, postcssOptions: {} }
              }
            ]
          },
          {
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  modules: true,
                  importLoaders: 1
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-purgecss/loader.js',
                options: {
                  content: [
                    '/Users/mlaroy/Sites/cascadia/src/**/!(*.d).{ts,js,jsx,tsx}'
                  ],
                  rejected: true,
                  printRejected: true,
                  printAll: false,
                  debug: true,
                  develop: false,
                  tailwind: true,
                  ignore: [],
                  purgeOnly: [],
                  extractors: [],
                  whitelist: [
                    'html',
                    'body',
                    '.article-body .gatsby-resp-image-wrapper'
                  ],
                  defaultExtractor: [Function (anonymous)]
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/postcss-loader/src/index.js',
                options: {
                  ident: 'postcss-1',
                  sourceMap: false,
                  plugins: [Function: plugins],
                  browsers: undefined
                }
              }
            ],
            test: /\.module\.css$/
          },
          {
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  importLoaders: 1
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-purgecss/loader.js',
                options: {
                  content: [
                    '/Users/mlaroy/Sites/cascadia/src/**/!(*.d).{ts,js,jsx,tsx}'
                  ],
                  rejected: true,
                  printRejected: true,
                  printAll: false,
                  debug: true,
                  develop: false,
                  tailwind: true,
                  ignore: [],
                  purgeOnly: [],
                  extractors: [],
                  whitelist: [
                    'html',
                    'body',
                    '.article-body .gatsby-resp-image-wrapper'
                  ],
                  defaultExtractor: [Function (anonymous)]
                }
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/postcss-loader/src/index.js',
                options: {
                  ident: 'postcss-2',
                  sourceMap: false,
                  plugins: [Function: plugins],
                  browsers: undefined
                }
              }
            ],
            test: /\.css$/
          }
        ]
      }
    ]
  },
  plugins: [
    IgnorePlugin {
      options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
      checkIgnore: [Function: bound checkIgnore]
    },
    DefinePlugin {
      definitions: {
        'process.env': '({})',
        'process.env.NODE_ENV': '"production"',
        'process.env.PUBLIC_DIR': '"/Users/mlaroy/Sites/cascadia/public"',
        'process.env.BUILD_STAGE': '"build-javascript"',
        'process.env.CYPRESS_SUPPORT': undefined,
        'process.env.GATSBY_LOGGER': '"yurnalist"',
        'process.env.GATSBY_BUILD_STAGE': '"build-javascript"',
        __BASE_PATH__: '""',
        __PATH_PREFIX__: '""',
        __ASSET_PREFIX__: '""'
      }
    },
    GatsbyWebpackVirtualModules {},
    MiniCssExtractPlugin {
      options: {
        filename: '[name].[contenthash].css',
        moduleFilename: [Function: moduleFilename],
        ignoreOrder: false,
        chunkFilename: '[name].[contenthash].css'
      }
    },
    GatsbyWebpackStatsExtractor {
      plugin: { name: 'GatsbyWebpackStatsExtractor' }
    },
    DefinePlugin {
      definitions: { __MANIFEST_PLUGIN_HAS_LOCALISATION__: undefined }
    }
  ],
  target: 'web',
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader: {
    modules: [
      '/Users/mlaroy/Sites/cascadia/node_modules',
      '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/loaders',
      'node_modules'
    ],
    plugins: [ { apply: [Function: nothing] } ]
  },
  resolve: {
    extensions: [
      '.mjs',  '.js',
      '.jsx',  '.wasm',
      '.json', '.ts',
      '.tsx'
    ],
    alias: {
      '@reach/router': '/Users/mlaroy/Sites/cascadia/node_modules/@reach/router/es',
      'gatsby$': '/Users/mlaroy/Sites/cascadia/.cache/gatsby-browser-entry.js',
      '@babel/runtime': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/node_modules/@babel/runtime',
      'react-hot-loader': '/Users/mlaroy/Sites/cascadia/node_modules/react-hot-loader',
      'react-lifecycles-compat': '/Users/mlaroy/Sites/cascadia/.cache/react-lifecycles-compat.js',
      'create-react-context': '/Users/mlaroy/Sites/cascadia/.cache/create-react-context.js',
      '@pmmmwh/react-refresh-webpack-plugin': '/Users/mlaroy/Sites/cascadia/node_modules/@pmmmwh/react-refresh-webpack-plugin',
      'socket.io-client': '/Users/mlaroy/Sites/cascadia/node_modules/socket.io-client',
      '$virtual': '/Users/mlaroy/Sites/cascadia/.cache/_this_is_virtual_fs_path_/$virtual',
      'object.assign': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js',
      'object-assign$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js',
      '@babel/runtime/helpers/extends.js$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js',
      'unfetch$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/fetch.js',
      'unfetch/polyfill$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/no-op.js',
      'isomorphic-unfetch$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/fetch.js',
      'whatwg-fetch$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/whatwg-fetch.js',
      'url-polyfill$': '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/no-op.js'
    },
    plugins: [
      { apply: [Function: nothing] },
      { apply: [Function: nothing] },
      {
        apply: [Function: nothing],
        makePlugin: [Function (anonymous)],
        moduleLoader: [Function (anonymous)],
        topLevelLoader: { apply: [Function: nothing] },
        bind: [Function (anonymous)],
        tsLoaderOptions: [Function (anonymous)],
        forkTsCheckerOptions: [Function (anonymous)]
      },
      CoreJSResolver {
        _coreJSNodeModulesPath: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/node_modules'
      },
      GatsbyThemeComponentShadowingResolverPlugin {
        cache: {},
        themes: [
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/dev-404-page',
            themeName: 'dev-404-page'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/load-babel-config',
            themeName: 'load-babel-config'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/internal-data-bridge',
            themeName: 'internal-data-bridge'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/prod-404',
            themeName: 'prod-404'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing',
            themeName: 'webpack-theme-component-shadowing'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/internal-plugins/bundle-optimisations',
            themeName: 'bundle-optimisations'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-postcss',
            themeName: 'gatsby-plugin-postcss'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-react-helmet',
            themeName: 'gatsby-plugin-react-helmet'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-manifest',
            themeName: 'gatsby-plugin-manifest'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-offline',
            themeName: 'gatsby-plugin-offline'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-transformer-remark',
            themeName: 'gatsby-transformer-remark'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-source-filesystem',
            themeName: 'gatsby-source-filesystem'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-source-filesystem',
            themeName: 'gatsby-source-filesystem'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-source-filesystem',
            themeName: 'gatsby-source-filesystem'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-google-analytics',
            themeName: 'gatsby-plugin-google-analytics'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-purgecss',
            themeName: 'gatsby-plugin-purgecss'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-sitemap',
            themeName: 'gatsby-plugin-sitemap'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-netlify',
            themeName: 'gatsby-plugin-netlify'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-typescript',
            themeName: 'gatsby-plugin-typescript'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia',
            themeName: 'default-site-plugin'
          },
          {
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          }
        ],
        projectRoot: '/Users/mlaroy/Sites/cascadia',
        extensions: [
          '.mjs',  '.js',
          '.jsx',  '.wasm',
          '.json', '.ts',
          '.tsx'
        ]
      }
    ]
  },
  node: { __filename: true },
  optimization: {
    runtimeChunk: { name: 'webpack-runtime' },
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          chunks: 'all',
          name: 'framework',
          test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
          priority: 40,
          enforce: true
        },
        lib: {
          test: [Function: test],
          name: [Function: name],
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true
        },
        commons: { name: 'commons', minChunks: 8, priority: 20 },
        shared: {
          test: [Function: test],
          name: [Function: name],
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true
        },
        styles: {
          test: [Function: test],
          name: 'styles',
          priority: 40,
          enforce: true
        }
      },
      maxAsyncRequests: Infinity,
      maxInitialRequests: 25,
      minSize: 20000
    },
    minimizer: [
      TerserPlugin {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: [Function: chunkFilter],
          warningsFilter: [Function: warningsFilter],
          extractComments: true,
          sourceMap: true,
          cache: '/Users/mlaroy/Sites/cascadia/.cache/webpack/terser',
          cacheKeys: [Function: cacheKeys],
          parallel: true,
          include: undefined,
          exclude: /\.min\.js/,
          minify: undefined,
          terserOptions: {
            ie8: false,
            mangle: { safari10: true },
            parse: { ecma: 8 },
            compress: { ecma: 5 },
            output: { ecma: 5 }
          }
        }
      },
      OptimizeCssAssetsWebpackPlugin {
        pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
        options: {
          assetProcessors: [
            {
              phase: 'compilation.optimize-chunk-assets',
              regExp: /\.css(\?.*)?$/i,
              processor: [Function: processor]
            }
          ],
          canPrint: undefined,
          assetNameRegExp: /\.css(\?.*)?$/i,
          cssProcessor: [Function: creator] { process: [Function (anonymous)] },
          cssProcessorOptions: {},
          cssProcessorPluginOptions: {
            preset: [
              'default',
              {
                svgo: {
                  full: true,
                  plugins: [
                    {
                      removeUselessDefs: true,
                      addAttributesToSVGElement: true,
                      addClassesToSVGElement: true,
                      cleanupAttrs: true,
                      cleanupEnableBackground: true,
                      cleanupIDs: true,
                      cleanupListOfValues: true,
                      cleanupNumericValues: true,
                      collapseGroups: true,
                      convertColors: true,
                      convertPathData: true,
                      convertStyleToAttrs: true,
                      convertTransform: true,
                      inlineStyles: true,
                      mergePaths: true,
                      minifyStyles: true,
                      moveElemsAttrsToGroup: true,
                      moveGroupAttrsToElems: true,
                      prefixIds: true,
                      removeAttributesBySelector: true,
                      removeAttrs: true,
                      removeComments: true,
                      removeDesc: true,
                      removeDimensions: true,
                      removeDoctype: true,
                      removeEditorsNSData: true,
                      removeElementsByAttr: true,
                      removeEmptyAttrs: true,
                      removeEmptyContainers: true,
                      removeEmptyText: true,
                      removeHiddenElems: true,
                      removeMetadata: true,
                      removeNonInheritableGroupAttrs: true,
                      removeOffCanvasPaths: true,
                      removeRasterImages: true,
                      removeScriptElement: true,
                      removeStyleElement: true,
                      removeTitle: true,
                      removeUnknownsAndDefaults: true,
                      removeUnusedNS: true,
                      removeUselessStrokeAndFill: true,
                      removeXMLNS: true,
                      removeXMLProcInst: true,
                      reusePaths: true,
                      sortAttrs: true
                    }
                  ]
                }
              }
            ]
          }
        },
        phaseAssetProcessors: {
          'compilation.optimize-chunk-assets': [
            {
              phase: 'compilation.optimize-chunk-assets',
              regExp: /\.css(\?.*)?$/i,
              processor: [Function: processor]
            }
          ],
          'compilation.optimize-assets': [],
          emit: []
        },
        deleteAssetsMap: {}
      }
    ]
  }
}