{
  context: '/Users/mlaroy/Sites/cascadia',
  entry: {
    polyfill: '/Users/mlaroy/Sites/cascadia/.cache/polyfill-entry',
    commons: [
      '/Users/mlaroy/Sites/cascadia/node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&reload=true&overlay=false',
      '/Users/mlaroy/Sites/cascadia/.cache/app'
    ]
  },
  output: {
    path: '/Users/mlaroy/Sites/cascadia',
    filename: '[name].js',
    pathinfo: true,
    publicPath: '/',
    devtoolModuleFilenameTemplate: [Function: devtoolModuleFilenameTemplate],
    crossOriginLoading: 'anonymous'
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
              stage: 'develop',
              reactRuntime: 'classic',
              cacheDirectory: '/Users/mlaroy/Sites/cascadia/.cache/webpack/babel',
              configFile: true,
              compact: false,
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
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: [Function: exclude],
        use: [
          {
            options: {
              useEslintrc: false,
              resolvePluginsRelativeTo: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/utils',
              baseConfig: {
                globals: {
                  graphql: true,
                  __PATH_PREFIX__: true,
                  __BASE_PATH__: true
                },
                extends: [
                  '/Users/mlaroy/Sites/cascadia/node_modules/eslint-config-react-app/index.js'
                ],
                plugins: [ 'graphql' ],
                rules: {
                  'react/react-in-jsx-scope': 'error',
                  'import/no-webpack-loader-syntax': [ 0 ],
                  'graphql/template-strings': [
                    'error',
                    {
                      env: 'relay',
                      schemaString: '# Provides default value for input field.\n' +
                        'directive @default(value: JSON!) on INPUT_FIELD_DEFINITION\n' +
                        '\n' +
                        '# Add date formatting options.\n' +
                        'directive @dateformat(formatString: String, locale: String, fromNow: Boolean, difference: String) on FIELD_DEFINITION\n' +
                        '\n' +
                        '# Link to node by foreign-key relation.\n' +
                        'directive @link(by: String! = "id", from: String, on: String) on FIELD_DEFINITION\n' +
                        '\n' +
                        '# Link to File node by relative path.\n' +
                        'directive @fileByRelativePath(from: String) on FIELD_DEFINITION\n' +
                        '\n' +
                        '# Proxy resolver from another field.\n' +
                        'directive @proxy(from: String!, fromNode: Boolean! = false) on FIELD_DEFINITION\n' +
                        '\n' +
                        '# Infer field types from field values.\n' +
                        'directive @infer(\n' +
                        "  # Don't add default resolvers to defined fields.\n" +
                        '  noDefaultResolvers: Boolean\n' +
                        ') on OBJECT\n' +
                        '\n' +
                        '# Do not infer field types from field values.\n' +
                        'directive @dontInfer(\n' +
                        "  # Don't add default resolvers to defined fields.\n" +
                        '  noDefaultResolvers: Boolean\n' +
                        ') on OBJECT\n' +
                        '\n' +
                        '# Define the mime-types handled by this type.\n' +
                        'directive @mimeTypes(\n' +
                        '  # The mime-types handled by this type.\n' +
                        '  types: [String!]! = []\n' +
                        ') on OBJECT\n' +
                        '\n' +
                        '# Define parent-child relations between types. This is used to add `child*` or\n' +
                        '# `children*` convenience fields like `childImageSharp`.\n' +
                        'directive @childOf(\n' +
                        '  # A list of mime-types this type is a child of. Usually these are the mime-types handled by a transformer plugin.\n' +
                        '  mimeTypes: [String!]! = []\n' +
                        '\n' +
                        '  # A list of types this type is a child of. Usually these are the types handled by a transformer plugin.\n' +
                        '  types: [String!]! = []\n' +
                        '\n' +
                        '  # Specifies whether a parent can have multiple children of this type or not.\n' +
                        '  many: Boolean! = false\n' +
                        ') on OBJECT\n' +
                        '\n' +
                        '# Adds root query fields for an interface. All implementing types must also implement the Node interface.\n' +
                        'directive @nodeInterface on INTERFACE\n' +
                        '\n' +
                        'input BooleanQueryOperatorInput {\n' +
                        '  eq: Boolean\n' +
                        '  ne: Boolean\n' +
                        '  in: [Boolean]\n' +
                        '  nin: [Boolean]\n' +
                        '}\n' +
                        '\n' +
                        '# A date string, such as 2007-12-03, compliant with the ISO 8601 standard for\n' +
                        '# representation of dates and times using the Gregorian calendar.\n' +
                        'scalar Date\n' +
                        '\n' +
                        'input DateQueryOperatorInput {\n' +
                        '  eq: Date\n' +
                        '  ne: Date\n' +
                        '  gt: Date\n' +
                        '  gte: Date\n' +
                        '  lt: Date\n' +
                        '  lte: Date\n' +
                        '  in: [Date]\n' +
                        '  nin: [Date]\n' +
                        '}\n' +
                        '\n' +
                        'type Directory implements Node {\n' +
                        '  sourceInstanceName: String!\n' +
                        '  absolutePath: String!\n' +
                        '  relativePath: String!\n' +
                        '  extension: String!\n' +
                        '  size: Int!\n' +
                        '  prettySize: String!\n' +
                        '  modifiedTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  accessTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  changeTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  birthTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  root: String!\n' +
                        '  dir: String!\n' +
                        '  base: String!\n' +
                        '  ext: String!\n' +
                        '  name: String!\n' +
                        '  relativeDirectory: String!\n' +
                        '  dev: Int!\n' +
                        '  mode: Int!\n' +
                        '  nlink: Int!\n' +
                        '  uid: Int!\n' +
                        '  gid: Int!\n' +
                        '  rdev: Int!\n' +
                        '  ino: Float!\n' +
                        '  atimeMs: Float!\n' +
                        '  mtimeMs: Float!\n' +
                        '  ctimeMs: Float!\n' +
                        '  atime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  mtime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  ctime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  birthtime: Date @deprecated(reason: "Use `birthTime` instead")\n' +
                        '  birthtimeMs: Float @deprecated(reason: "Use `birthTime` instead")\n' +
                        '  blksize: Int\n' +
                        '  blocks: Int\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '}\n' +
                        '\n' +
                        'type DirectoryConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [DirectoryEdge!]!\n' +
                        '  nodes: [Directory!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: DirectoryFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: DirectoryFieldsEnum!): [DirectoryGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type DirectoryEdge {\n' +
                        '  next: Directory\n' +
                        '  node: Directory!\n' +
                        '  previous: Directory\n' +
                        '}\n' +
                        '\n' +
                        'enum DirectoryFieldsEnum {\n' +
                        '  sourceInstanceName\n' +
                        '  absolutePath\n' +
                        '  relativePath\n' +
                        '  extension\n' +
                        '  size\n' +
                        '  prettySize\n' +
                        '  modifiedTime\n' +
                        '  accessTime\n' +
                        '  changeTime\n' +
                        '  birthTime\n' +
                        '  root\n' +
                        '  dir\n' +
                        '  base\n' +
                        '  ext\n' +
                        '  name\n' +
                        '  relativeDirectory\n' +
                        '  dev\n' +
                        '  mode\n' +
                        '  nlink\n' +
                        '  uid\n' +
                        '  gid\n' +
                        '  rdev\n' +
                        '  ino\n' +
                        '  atimeMs\n' +
                        '  mtimeMs\n' +
                        '  ctimeMs\n' +
                        '  atime\n' +
                        '  mtime\n' +
                        '  ctime\n' +
                        '  birthtime\n' +
                        '  birthtimeMs\n' +
                        '  blksize\n' +
                        '  blocks\n' +
                        '  id\n' +
                        '  parent___id\n' +
                        '  parent___parent___id\n' +
                        '  parent___parent___parent___id\n' +
                        '  parent___parent___parent___children\n' +
                        '  parent___parent___children\n' +
                        '  parent___parent___children___id\n' +
                        '  parent___parent___children___children\n' +
                        '  parent___parent___internal___content\n' +
                        '  parent___parent___internal___contentDigest\n' +
                        '  parent___parent___internal___description\n' +
                        '  parent___parent___internal___fieldOwners\n' +
                        '  parent___parent___internal___ignoreType\n' +
                        '  parent___parent___internal___mediaType\n' +
                        '  parent___parent___internal___owner\n' +
                        '  parent___parent___internal___type\n' +
                        '  parent___children\n' +
                        '  parent___children___id\n' +
                        '  parent___children___parent___id\n' +
                        '  parent___children___parent___children\n' +
                        '  parent___children___children\n' +
                        '  parent___children___children___id\n' +
                        '  parent___children___children___children\n' +
                        '  parent___children___internal___content\n' +
                        '  parent___children___internal___contentDigest\n' +
                        '  parent___children___internal___description\n' +
                        '  parent___children___internal___fieldOwners\n' +
                        '  parent___children___internal___ignoreType\n' +
                        '  parent___children___internal___mediaType\n' +
                        '  parent___children___internal___owner\n' +
                        '  parent___children___internal___type\n' +
                        '  parent___internal___content\n' +
                        '  parent___internal___contentDigest\n' +
                        '  parent___internal___description\n' +
                        '  parent___internal___fieldOwners\n' +
                        '  parent___internal___ignoreType\n' +
                        '  parent___internal___mediaType\n' +
                        '  parent___internal___owner\n' +
                        '  parent___internal___type\n' +
                        '  children\n' +
                        '  children___id\n' +
                        '  children___parent___id\n' +
                        '  children___parent___parent___id\n' +
                        '  children___parent___parent___children\n' +
                        '  children___parent___children\n' +
                        '  children___parent___children___id\n' +
                        '  children___parent___children___children\n' +
                        '  children___parent___internal___content\n' +
                        '  children___parent___internal___contentDigest\n' +
                        '  children___parent___internal___description\n' +
                        '  children___parent___internal___fieldOwners\n' +
                        '  children___parent___internal___ignoreType\n' +
                        '  children___parent___internal___mediaType\n' +
                        '  children___parent___internal___owner\n' +
                        '  children___parent___internal___type\n' +
                        '  children___children\n' +
                        '  children___children___id\n' +
                        '  children___children___parent___id\n' +
                        '  children___children___parent___children\n' +
                        '  children___children___children\n' +
                        '  children___children___children___id\n' +
                        '  children___children___children___children\n' +
                        '  children___children___internal___content\n' +
                        '  children___children___internal___contentDigest\n' +
                        '  children___children___internal___description\n' +
                        '  children___children___internal___fieldOwners\n' +
                        '  children___children___internal___ignoreType\n' +
                        '  children___children___internal___mediaType\n' +
                        '  children___children___internal___owner\n' +
                        '  children___children___internal___type\n' +
                        '  children___internal___content\n' +
                        '  children___internal___contentDigest\n' +
                        '  children___internal___description\n' +
                        '  children___internal___fieldOwners\n' +
                        '  children___internal___ignoreType\n' +
                        '  children___internal___mediaType\n' +
                        '  children___internal___owner\n' +
                        '  children___internal___type\n' +
                        '  internal___content\n' +
                        '  internal___contentDigest\n' +
                        '  internal___description\n' +
                        '  internal___fieldOwners\n' +
                        '  internal___ignoreType\n' +
                        '  internal___mediaType\n' +
                        '  internal___owner\n' +
                        '  internal___type\n' +
                        '}\n' +
                        '\n' +
                        'input DirectoryFilterInput {\n' +
                        '  sourceInstanceName: StringQueryOperatorInput\n' +
                        '  absolutePath: StringQueryOperatorInput\n' +
                        '  relativePath: StringQueryOperatorInput\n' +
                        '  extension: StringQueryOperatorInput\n' +
                        '  size: IntQueryOperatorInput\n' +
                        '  prettySize: StringQueryOperatorInput\n' +
                        '  modifiedTime: DateQueryOperatorInput\n' +
                        '  accessTime: DateQueryOperatorInput\n' +
                        '  changeTime: DateQueryOperatorInput\n' +
                        '  birthTime: DateQueryOperatorInput\n' +
                        '  root: StringQueryOperatorInput\n' +
                        '  dir: StringQueryOperatorInput\n' +
                        '  base: StringQueryOperatorInput\n' +
                        '  ext: StringQueryOperatorInput\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  relativeDirectory: StringQueryOperatorInput\n' +
                        '  dev: IntQueryOperatorInput\n' +
                        '  mode: IntQueryOperatorInput\n' +
                        '  nlink: IntQueryOperatorInput\n' +
                        '  uid: IntQueryOperatorInput\n' +
                        '  gid: IntQueryOperatorInput\n' +
                        '  rdev: IntQueryOperatorInput\n' +
                        '  ino: FloatQueryOperatorInput\n' +
                        '  atimeMs: FloatQueryOperatorInput\n' +
                        '  mtimeMs: FloatQueryOperatorInput\n' +
                        '  ctimeMs: FloatQueryOperatorInput\n' +
                        '  atime: DateQueryOperatorInput\n' +
                        '  mtime: DateQueryOperatorInput\n' +
                        '  ctime: DateQueryOperatorInput\n' +
                        '  birthtime: DateQueryOperatorInput\n' +
                        '  birthtimeMs: FloatQueryOperatorInput\n' +
                        '  blksize: IntQueryOperatorInput\n' +
                        '  blocks: IntQueryOperatorInput\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type DirectoryGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [DirectoryEdge!]!\n' +
                        '  nodes: [Directory!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'input DirectorySortInput {\n' +
                        '  fields: [DirectoryFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'type File implements Node {\n' +
                        '  sourceInstanceName: String!\n' +
                        '  absolutePath: String!\n' +
                        '  relativePath: String!\n' +
                        '  extension: String!\n' +
                        '  size: Int!\n' +
                        '  prettySize: String!\n' +
                        '  modifiedTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  accessTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  changeTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  birthTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  root: String!\n' +
                        '  dir: String!\n' +
                        '  base: String!\n' +
                        '  ext: String!\n' +
                        '  name: String!\n' +
                        '  relativeDirectory: String!\n' +
                        '  dev: Int!\n' +
                        '  mode: Int!\n' +
                        '  nlink: Int!\n' +
                        '  uid: Int!\n' +
                        '  gid: Int!\n' +
                        '  rdev: Int!\n' +
                        '  ino: Float!\n' +
                        '  atimeMs: Float!\n' +
                        '  mtimeMs: Float!\n' +
                        '  ctimeMs: Float!\n' +
                        '  atime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  mtime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  ctime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date!\n' +
                        '  birthtime: Date @deprecated(reason: "Use `birthTime` instead")\n' +
                        '  birthtimeMs: Float @deprecated(reason: "Use `birthTime` instead")\n' +
                        '  blksize: Int\n' +
                        '  blocks: Int\n' +
                        '\n' +
                        '  # Copy file to static directory and return public url to it\n' +
                        '  publicURL: String\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '  childMarkdownRemark: MarkdownRemark\n' +
                        '}\n' +
                        '\n' +
                        'type FileConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [FileEdge!]!\n' +
                        '  nodes: [File!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: FileFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: FileFieldsEnum!): [FileGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type FileEdge {\n' +
                        '  next: File\n' +
                        '  node: File!\n' +
                        '  previous: File\n' +
                        '}\n' +
                        '\n' +
                        'enum FileFieldsEnum {\n' +
                        '  sourceInstanceName\n' +
                        '  absolutePath\n' +
                        '  relativePath\n' +
                        '  extension\n' +
                        '  size\n' +
                        '  prettySize\n' +
                        '  modifiedTime\n' +
                        '  accessTime\n' +
                        '  changeTime\n' +
                        '  birthTime\n' +
                        '  root\n' +
                        '  dir\n' +
                        '  base\n' +
                        '  ext\n' +
                        '  name\n' +
                        '  relativeDirectory\n' +
                        '  dev\n' +
                        '  mode\n' +
                        '  nlink\n' +
                        '  uid\n' +
                        '  gid\n' +
                        '  rdev\n' +
                        '  ino\n' +
                        '  atimeMs\n' +
                        '  mtimeMs\n' +
                        '  ctimeMs\n' +
                        '  atime\n' +
                        '  mtime\n' +
                        '  ctime\n' +
                        '  birthtime\n' +
                        '  birthtimeMs\n' +
                        '  blksize\n' +
                        '  blocks\n' +
                        '  publicURL\n' +
                        '  id\n' +
                        '  parent___id\n' +
                        '  parent___parent___id\n' +
                        '  parent___parent___parent___id\n' +
                        '  parent___parent___parent___children\n' +
                        '  parent___parent___children\n' +
                        '  parent___parent___children___id\n' +
                        '  parent___parent___children___children\n' +
                        '  parent___parent___internal___content\n' +
                        '  parent___parent___internal___contentDigest\n' +
                        '  parent___parent___internal___description\n' +
                        '  parent___parent___internal___fieldOwners\n' +
                        '  parent___parent___internal___ignoreType\n' +
                        '  parent___parent___internal___mediaType\n' +
                        '  parent___parent___internal___owner\n' +
                        '  parent___parent___internal___type\n' +
                        '  parent___children\n' +
                        '  parent___children___id\n' +
                        '  parent___children___parent___id\n' +
                        '  parent___children___parent___children\n' +
                        '  parent___children___children\n' +
                        '  parent___children___children___id\n' +
                        '  parent___children___children___children\n' +
                        '  parent___children___internal___content\n' +
                        '  parent___children___internal___contentDigest\n' +
                        '  parent___children___internal___description\n' +
                        '  parent___children___internal___fieldOwners\n' +
                        '  parent___children___internal___ignoreType\n' +
                        '  parent___children___internal___mediaType\n' +
                        '  parent___children___internal___owner\n' +
                        '  parent___children___internal___type\n' +
                        '  parent___internal___content\n' +
                        '  parent___internal___contentDigest\n' +
                        '  parent___internal___description\n' +
                        '  parent___internal___fieldOwners\n' +
                        '  parent___internal___ignoreType\n' +
                        '  parent___internal___mediaType\n' +
                        '  parent___internal___owner\n' +
                        '  parent___internal___type\n' +
                        '  children\n' +
                        '  children___id\n' +
                        '  children___parent___id\n' +
                        '  children___parent___parent___id\n' +
                        '  children___parent___parent___children\n' +
                        '  children___parent___children\n' +
                        '  children___parent___children___id\n' +
                        '  children___parent___children___children\n' +
                        '  children___parent___internal___content\n' +
                        '  children___parent___internal___contentDigest\n' +
                        '  children___parent___internal___description\n' +
                        '  children___parent___internal___fieldOwners\n' +
                        '  children___parent___internal___ignoreType\n' +
                        '  children___parent___internal___mediaType\n' +
                        '  children___parent___internal___owner\n' +
                        '  children___parent___internal___type\n' +
                        '  children___children\n' +
                        '  children___children___id\n' +
                        '  children___children___parent___id\n' +
                        '  children___children___parent___children\n' +
                        '  children___children___children\n' +
                        '  children___children___children___id\n' +
                        '  children___children___children___children\n' +
                        '  children___children___internal___content\n' +
                        '  children___children___internal___contentDigest\n' +
                        '  children___children___internal___description\n' +
                        '  children___children___internal___fieldOwners\n' +
                        '  children___children___internal___ignoreType\n' +
                        '  children___children___internal___mediaType\n' +
                        '  children___children___internal___owner\n' +
                        '  children___children___internal___type\n' +
                        '  children___internal___content\n' +
                        '  children___internal___contentDigest\n' +
                        '  children___internal___description\n' +
                        '  children___internal___fieldOwners\n' +
                        '  children___internal___ignoreType\n' +
                        '  children___internal___mediaType\n' +
                        '  children___internal___owner\n' +
                        '  children___internal___type\n' +
                        '  internal___content\n' +
                        '  internal___contentDigest\n' +
                        '  internal___description\n' +
                        '  internal___fieldOwners\n' +
                        '  internal___ignoreType\n' +
                        '  internal___mediaType\n' +
                        '  internal___owner\n' +
                        '  internal___type\n' +
                        '  childMarkdownRemark___id\n' +
                        '  childMarkdownRemark___frontmatter___title\n' +
                        '  childMarkdownRemark___frontmatter___slug\n' +
                        '  childMarkdownRemark___frontmatter___image___sourceInstanceName\n' +
                        '  childMarkdownRemark___frontmatter___image___absolutePath\n' +
                        '  childMarkdownRemark___frontmatter___image___relativePath\n' +
                        '  childMarkdownRemark___frontmatter___image___extension\n' +
                        '  childMarkdownRemark___frontmatter___image___size\n' +
                        '  childMarkdownRemark___frontmatter___image___prettySize\n' +
                        '  childMarkdownRemark___frontmatter___image___modifiedTime\n' +
                        '  childMarkdownRemark___frontmatter___image___accessTime\n' +
                        '  childMarkdownRemark___frontmatter___image___changeTime\n' +
                        '  childMarkdownRemark___frontmatter___image___birthTime\n' +
                        '  childMarkdownRemark___frontmatter___image___root\n' +
                        '  childMarkdownRemark___frontmatter___image___dir\n' +
                        '  childMarkdownRemark___frontmatter___image___base\n' +
                        '  childMarkdownRemark___frontmatter___image___ext\n' +
                        '  childMarkdownRemark___frontmatter___image___name\n' +
                        '  childMarkdownRemark___frontmatter___image___relativeDirectory\n' +
                        '  childMarkdownRemark___frontmatter___image___dev\n' +
                        '  childMarkdownRemark___frontmatter___image___mode\n' +
                        '  childMarkdownRemark___frontmatter___image___nlink\n' +
                        '  childMarkdownRemark___frontmatter___image___uid\n' +
                        '  childMarkdownRemark___frontmatter___image___gid\n' +
                        '  childMarkdownRemark___frontmatter___image___rdev\n' +
                        '  childMarkdownRemark___frontmatter___image___ino\n' +
                        '  childMarkdownRemark___frontmatter___image___atimeMs\n' +
                        '  childMarkdownRemark___frontmatter___image___mtimeMs\n' +
                        '  childMarkdownRemark___frontmatter___image___ctimeMs\n' +
                        '  childMarkdownRemark___frontmatter___image___atime\n' +
                        '  childMarkdownRemark___frontmatter___image___mtime\n' +
                        '  childMarkdownRemark___frontmatter___image___ctime\n' +
                        '  childMarkdownRemark___frontmatter___image___birthtime\n' +
                        '  childMarkdownRemark___frontmatter___image___birthtimeMs\n' +
                        '  childMarkdownRemark___frontmatter___image___blksize\n' +
                        '  childMarkdownRemark___frontmatter___image___blocks\n' +
                        '  childMarkdownRemark___frontmatter___image___publicURL\n' +
                        '  childMarkdownRemark___frontmatter___image___id\n' +
                        '  childMarkdownRemark___frontmatter___image___children\n' +
                        '  childMarkdownRemark___frontmatter___type\n' +
                        '  childMarkdownRemark___frontmatter___order\n' +
                        '  childMarkdownRemark___frontmatter___description\n' +
                        '  childMarkdownRemark___frontmatter___img\n' +
                        '  childMarkdownRemark___frontmatter___published\n' +
                        '  childMarkdownRemark___excerpt @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___rawMarkdownBody @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___fileAbsolutePath @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___html @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___htmlAst @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___excerptAst @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___headings @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___headings___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___headings___value @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___headings___depth @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___timeToRead @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___tableOfContents @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___wordCount___paragraphs @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___wordCount___sentences @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___wordCount___words @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___parent___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___children___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  childMarkdownRemark___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '}\n' +
                        '\n' +
                        'input FileFilterInput {\n' +
                        '  sourceInstanceName: StringQueryOperatorInput\n' +
                        '  absolutePath: StringQueryOperatorInput\n' +
                        '  relativePath: StringQueryOperatorInput\n' +
                        '  extension: StringQueryOperatorInput\n' +
                        '  size: IntQueryOperatorInput\n' +
                        '  prettySize: StringQueryOperatorInput\n' +
                        '  modifiedTime: DateQueryOperatorInput\n' +
                        '  accessTime: DateQueryOperatorInput\n' +
                        '  changeTime: DateQueryOperatorInput\n' +
                        '  birthTime: DateQueryOperatorInput\n' +
                        '  root: StringQueryOperatorInput\n' +
                        '  dir: StringQueryOperatorInput\n' +
                        '  base: StringQueryOperatorInput\n' +
                        '  ext: StringQueryOperatorInput\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  relativeDirectory: StringQueryOperatorInput\n' +
                        '  dev: IntQueryOperatorInput\n' +
                        '  mode: IntQueryOperatorInput\n' +
                        '  nlink: IntQueryOperatorInput\n' +
                        '  uid: IntQueryOperatorInput\n' +
                        '  gid: IntQueryOperatorInput\n' +
                        '  rdev: IntQueryOperatorInput\n' +
                        '  ino: FloatQueryOperatorInput\n' +
                        '  atimeMs: FloatQueryOperatorInput\n' +
                        '  mtimeMs: FloatQueryOperatorInput\n' +
                        '  ctimeMs: FloatQueryOperatorInput\n' +
                        '  atime: DateQueryOperatorInput\n' +
                        '  mtime: DateQueryOperatorInput\n' +
                        '  ctime: DateQueryOperatorInput\n' +
                        '  birthtime: DateQueryOperatorInput\n' +
                        '  birthtimeMs: FloatQueryOperatorInput\n' +
                        '  blksize: IntQueryOperatorInput\n' +
                        '  blocks: IntQueryOperatorInput\n' +
                        '  publicURL: StringQueryOperatorInput\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '  childMarkdownRemark: MarkdownRemarkFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type FileGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [FileEdge!]!\n' +
                        '  nodes: [File!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'input FileSortInput {\n' +
                        '  fields: [FileFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'input FloatQueryOperatorInput {\n' +
                        '  eq: Float\n' +
                        '  ne: Float\n' +
                        '  gt: Float\n' +
                        '  gte: Float\n' +
                        '  lt: Float\n' +
                        '  lte: Float\n' +
                        '  in: [Float]\n' +
                        '  nin: [Float]\n' +
                        '}\n' +
                        '\n' +
                        'type Internal {\n' +
                        '  content: String\n' +
                        '  contentDigest: String!\n' +
                        '  description: String\n' +
                        '  fieldOwners: [String]\n' +
                        '  ignoreType: Boolean\n' +
                        '  mediaType: String\n' +
                        '  owner: String!\n' +
                        '  type: String!\n' +
                        '}\n' +
                        '\n' +
                        'input InternalFilterInput {\n' +
                        '  content: StringQueryOperatorInput\n' +
                        '  contentDigest: StringQueryOperatorInput\n' +
                        '  description: StringQueryOperatorInput\n' +
                        '  fieldOwners: StringQueryOperatorInput\n' +
                        '  ignoreType: BooleanQueryOperatorInput\n' +
                        '  mediaType: StringQueryOperatorInput\n' +
                        '  owner: StringQueryOperatorInput\n' +
                        '  type: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input IntQueryOperatorInput {\n' +
                        '  eq: Int\n' +
                        '  ne: Int\n' +
                        '  gt: Int\n' +
                        '  gte: Int\n' +
                        '  lt: Int\n' +
                        '  lte: Int\n' +
                        '  in: [Int]\n' +
                        '  nin: [Int]\n' +
                        '}\n' +
                        '\n' +
                        '# The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).\n' +
                        'scalar JSON\n' +
                        '\n' +
                        'input JSONQueryOperatorInput {\n' +
                        '  eq: JSON\n' +
                        '  ne: JSON\n' +
                        '  in: [JSON]\n' +
                        '  nin: [JSON]\n' +
                        '  regex: JSON\n' +
                        '  glob: JSON\n' +
                        '}\n' +
                        '\n' +
                        'enum MarkdownExcerptFormats {\n' +
                        '  PLAIN\n' +
                        '  HTML\n' +
                        '  MARKDOWN\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownHeading {\n' +
                        '  id: String\n' +
                        '  value: String\n' +
                        '  depth: Int\n' +
                        '}\n' +
                        '\n' +
                        'input MarkdownHeadingFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  value: StringQueryOperatorInput\n' +
                        '  depth: IntQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input MarkdownHeadingFilterListInput {\n' +
                        '  elemMatch: MarkdownHeadingFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'enum MarkdownHeadingLevels {\n' +
                        '  h1\n' +
                        '  h2\n' +
                        '  h3\n' +
                        '  h4\n' +
                        '  h5\n' +
                        '  h6\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownRemark implements Node {\n' +
                        '  id: ID!\n' +
                        '  frontmatter: MarkdownRemarkFrontmatter\n' +
                        '  excerpt(pruneLength: Int = 140, truncate: Boolean = false, format: MarkdownExcerptFormats = PLAIN): String\n' +
                        '  rawMarkdownBody: String\n' +
                        '  fileAbsolutePath: String\n' +
                        '  html: String\n' +
                        '  htmlAst: JSON\n' +
                        '  excerptAst(pruneLength: Int = 140, truncate: Boolean = false): JSON\n' +
                        '  headings(depth: MarkdownHeadingLevels): [MarkdownHeading]\n' +
                        '  timeToRead: Int\n' +
                        '  tableOfContents(absolute: Boolean = true, pathToSlugField: String = "fields.slug", maxDepth: Int, heading: String): String\n' +
                        '  wordCount: MarkdownWordCount\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownRemarkConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [MarkdownRemarkEdge!]!\n' +
                        '  nodes: [MarkdownRemark!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: MarkdownRemarkFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: MarkdownRemarkFieldsEnum!): [MarkdownRemarkGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownRemarkEdge {\n' +
                        '  next: MarkdownRemark\n' +
                        '  node: MarkdownRemark!\n' +
                        '  previous: MarkdownRemark\n' +
                        '}\n' +
                        '\n' +
                        'enum MarkdownRemarkFieldsEnum {\n' +
                        '  id\n' +
                        '  frontmatter___title\n' +
                        '  frontmatter___slug\n' +
                        '  frontmatter___image___sourceInstanceName\n' +
                        '  frontmatter___image___absolutePath\n' +
                        '  frontmatter___image___relativePath\n' +
                        '  frontmatter___image___extension\n' +
                        '  frontmatter___image___size\n' +
                        '  frontmatter___image___prettySize\n' +
                        '  frontmatter___image___modifiedTime\n' +
                        '  frontmatter___image___accessTime\n' +
                        '  frontmatter___image___changeTime\n' +
                        '  frontmatter___image___birthTime\n' +
                        '  frontmatter___image___root\n' +
                        '  frontmatter___image___dir\n' +
                        '  frontmatter___image___base\n' +
                        '  frontmatter___image___ext\n' +
                        '  frontmatter___image___name\n' +
                        '  frontmatter___image___relativeDirectory\n' +
                        '  frontmatter___image___dev\n' +
                        '  frontmatter___image___mode\n' +
                        '  frontmatter___image___nlink\n' +
                        '  frontmatter___image___uid\n' +
                        '  frontmatter___image___gid\n' +
                        '  frontmatter___image___rdev\n' +
                        '  frontmatter___image___ino\n' +
                        '  frontmatter___image___atimeMs\n' +
                        '  frontmatter___image___mtimeMs\n' +
                        '  frontmatter___image___ctimeMs\n' +
                        '  frontmatter___image___atime\n' +
                        '  frontmatter___image___mtime\n' +
                        '  frontmatter___image___ctime\n' +
                        '  frontmatter___image___birthtime\n' +
                        '  frontmatter___image___birthtimeMs\n' +
                        '  frontmatter___image___blksize\n' +
                        '  frontmatter___image___blocks\n' +
                        '  frontmatter___image___publicURL\n' +
                        '  frontmatter___image___id\n' +
                        '  frontmatter___image___parent___id\n' +
                        '  frontmatter___image___parent___children\n' +
                        '  frontmatter___image___children\n' +
                        '  frontmatter___image___children___id\n' +
                        '  frontmatter___image___children___children\n' +
                        '  frontmatter___image___internal___content\n' +
                        '  frontmatter___image___internal___contentDigest\n' +
                        '  frontmatter___image___internal___description\n' +
                        '  frontmatter___image___internal___fieldOwners\n' +
                        '  frontmatter___image___internal___ignoreType\n' +
                        '  frontmatter___image___internal___mediaType\n' +
                        '  frontmatter___image___internal___owner\n' +
                        '  frontmatter___image___internal___type\n' +
                        '  frontmatter___image___childMarkdownRemark___id\n' +
                        '  frontmatter___image___childMarkdownRemark___excerpt @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___rawMarkdownBody @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___fileAbsolutePath @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___html @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___htmlAst @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___excerptAst @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___headings @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___timeToRead @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___tableOfContents @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___image___childMarkdownRemark___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  frontmatter___type\n' +
                        '  frontmatter___order\n' +
                        '  frontmatter___description\n' +
                        '  frontmatter___img\n' +
                        '  frontmatter___published\n' +
                        '  excerpt @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  rawMarkdownBody @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  fileAbsolutePath @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  html @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  htmlAst @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  excerptAst @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  headings @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  headings___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  headings___value @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  headings___depth @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  timeToRead @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  tableOfContents @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  wordCount___paragraphs @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  wordCount___sentences @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  wordCount___words @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___parent___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___children___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  parent___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___parent___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___parent___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___parent___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___children___id @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___children___children @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___children___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  children___internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___content @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___contentDigest @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___description @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___fieldOwners @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___ignoreType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___mediaType @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___owner @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '  internal___type @deprecated(reason: "Sorting on fields that need arguments to resolve is deprecated.")\n' +
                        '}\n' +
                        '\n' +
                        'input MarkdownRemarkFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  frontmatter: MarkdownRemarkFrontmatterFilterInput\n' +
                        '  excerpt: StringQueryOperatorInput\n' +
                        '  rawMarkdownBody: StringQueryOperatorInput\n' +
                        '  fileAbsolutePath: StringQueryOperatorInput\n' +
                        '  html: StringQueryOperatorInput\n' +
                        '  htmlAst: JSONQueryOperatorInput\n' +
                        '  excerptAst: JSONQueryOperatorInput\n' +
                        '  headings: MarkdownHeadingFilterListInput\n' +
                        '  timeToRead: IntQueryOperatorInput\n' +
                        '  tableOfContents: StringQueryOperatorInput\n' +
                        '  wordCount: MarkdownWordCountFilterInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownRemarkFrontmatter {\n' +
                        '  title: String\n' +
                        '  slug: String\n' +
                        '  image: File\n' +
                        '  type: String\n' +
                        '  order: Int\n' +
                        '  description: String\n' +
                        '  img: String\n' +
                        '  published: Boolean\n' +
                        '}\n' +
                        '\n' +
                        'input MarkdownRemarkFrontmatterFilterInput {\n' +
                        '  title: StringQueryOperatorInput\n' +
                        '  slug: StringQueryOperatorInput\n' +
                        '  image: FileFilterInput\n' +
                        '  type: StringQueryOperatorInput\n' +
                        '  order: IntQueryOperatorInput\n' +
                        '  description: StringQueryOperatorInput\n' +
                        '  img: StringQueryOperatorInput\n' +
                        '  published: BooleanQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownRemarkGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [MarkdownRemarkEdge!]!\n' +
                        '  nodes: [MarkdownRemark!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'input MarkdownRemarkSortInput {\n' +
                        '  fields: [MarkdownRemarkFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'type MarkdownWordCount {\n' +
                        '  paragraphs: Int\n' +
                        '  sentences: Int\n' +
                        '  words: Int\n' +
                        '}\n' +
                        '\n' +
                        'input MarkdownWordCountFilterInput {\n' +
                        '  paragraphs: IntQueryOperatorInput\n' +
                        '  sentences: IntQueryOperatorInput\n' +
                        '  words: IntQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        '# Node Interface\n' +
                        'interface Node {\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '}\n' +
                        '\n' +
                        'input NodeFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'input NodeFilterListInput {\n' +
                        '  elemMatch: NodeFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type PageInfo {\n' +
                        '  currentPage: Int!\n' +
                        '  hasPreviousPage: Boolean!\n' +
                        '  hasNextPage: Boolean!\n' +
                        '  itemCount: Int!\n' +
                        '  pageCount: Int!\n' +
                        '  perPage: Int\n' +
                        '  totalCount: Int!\n' +
                        '}\n' +
                        '\n' +
                        'type Query {\n' +
                        '  file(sourceInstanceName: StringQueryOperatorInput, absolutePath: StringQueryOperatorInput, relativePath: StringQueryOperatorInput, extension: StringQueryOperatorInput, size: IntQueryOperatorInput, prettySize: StringQueryOperatorInput, modifiedTime: DateQueryOperatorInput, accessTime: DateQueryOperatorInput, changeTime: DateQueryOperatorInput, birthTime: DateQueryOperatorInput, root: StringQueryOperatorInput, dir: StringQueryOperatorInput, base: StringQueryOperatorInput, ext: StringQueryOperatorInput, name: StringQueryOperatorInput, relativeDirectory: StringQueryOperatorInput, dev: IntQueryOperatorInput, mode: IntQueryOperatorInput, nlink: IntQueryOperatorInput, uid: IntQueryOperatorInput, gid: IntQueryOperatorInput, rdev: IntQueryOperatorInput, ino: FloatQueryOperatorInput, atimeMs: FloatQueryOperatorInput, mtimeMs: FloatQueryOperatorInput, ctimeMs: FloatQueryOperatorInput, atime: DateQueryOperatorInput, mtime: DateQueryOperatorInput, ctime: DateQueryOperatorInput, birthtime: DateQueryOperatorInput, birthtimeMs: FloatQueryOperatorInput, blksize: IntQueryOperatorInput, blocks: IntQueryOperatorInput, publicURL: StringQueryOperatorInput, id: StringQueryOperatorInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput, childMarkdownRemark: MarkdownRemarkFilterInput): File\n' +
                        '  allFile(filter: FileFilterInput, sort: FileSortInput, skip: Int, limit: Int): FileConnection!\n' +
                        '  directory(sourceInstanceName: StringQueryOperatorInput, absolutePath: StringQueryOperatorInput, relativePath: StringQueryOperatorInput, extension: StringQueryOperatorInput, size: IntQueryOperatorInput, prettySize: StringQueryOperatorInput, modifiedTime: DateQueryOperatorInput, accessTime: DateQueryOperatorInput, changeTime: DateQueryOperatorInput, birthTime: DateQueryOperatorInput, root: StringQueryOperatorInput, dir: StringQueryOperatorInput, base: StringQueryOperatorInput, ext: StringQueryOperatorInput, name: StringQueryOperatorInput, relativeDirectory: StringQueryOperatorInput, dev: IntQueryOperatorInput, mode: IntQueryOperatorInput, nlink: IntQueryOperatorInput, uid: IntQueryOperatorInput, gid: IntQueryOperatorInput, rdev: IntQueryOperatorInput, ino: FloatQueryOperatorInput, atimeMs: FloatQueryOperatorInput, mtimeMs: FloatQueryOperatorInput, ctimeMs: FloatQueryOperatorInput, atime: DateQueryOperatorInput, mtime: DateQueryOperatorInput, ctime: DateQueryOperatorInput, birthtime: DateQueryOperatorInput, birthtimeMs: FloatQueryOperatorInput, blksize: IntQueryOperatorInput, blocks: IntQueryOperatorInput, id: StringQueryOperatorInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput): Directory\n' +
                        '  allDirectory(filter: DirectoryFilterInput, sort: DirectorySortInput, skip: Int, limit: Int): DirectoryConnection!\n' +
                        '  site(buildTime: DateQueryOperatorInput, siteMetadata: SiteSiteMetadataFilterInput, port: IntQueryOperatorInput, host: StringQueryOperatorInput, polyfill: BooleanQueryOperatorInput, pathPrefix: StringQueryOperatorInput, id: StringQueryOperatorInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput): Site\n' +
                        '  allSite(filter: SiteFilterInput, sort: SiteSortInput, skip: Int, limit: Int): SiteConnection!\n' +
                        '  sitePage(path: StringQueryOperatorInput, component: StringQueryOperatorInput, internalComponentName: StringQueryOperatorInput, componentChunkName: StringQueryOperatorInput, matchPath: StringQueryOperatorInput, id: StringQueryOperatorInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput, isCreatedByStatefulCreatePages: BooleanQueryOperatorInput, context: SitePageContextFilterInput, pluginCreator: SitePluginFilterInput, pluginCreatorId: StringQueryOperatorInput, componentPath: StringQueryOperatorInput): SitePage\n' +
                        '  allSitePage(filter: SitePageFilterInput, sort: SitePageSortInput, skip: Int, limit: Int): SitePageConnection!\n' +
                        '  markdownRemark(id: StringQueryOperatorInput, frontmatter: MarkdownRemarkFrontmatterFilterInput, excerpt: StringQueryOperatorInput, rawMarkdownBody: StringQueryOperatorInput, fileAbsolutePath: StringQueryOperatorInput, html: StringQueryOperatorInput, htmlAst: JSONQueryOperatorInput, excerptAst: JSONQueryOperatorInput, headings: MarkdownHeadingFilterListInput, timeToRead: IntQueryOperatorInput, tableOfContents: StringQueryOperatorInput, wordCount: MarkdownWordCountFilterInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput): MarkdownRemark\n' +
                        '  allMarkdownRemark(filter: MarkdownRemarkFilterInput, sort: MarkdownRemarkSortInput, skip: Int, limit: Int): MarkdownRemarkConnection!\n' +
                        '  siteBuildMetadata(id: StringQueryOperatorInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput, buildTime: DateQueryOperatorInput): SiteBuildMetadata\n' +
                        '  allSiteBuildMetadata(filter: SiteBuildMetadataFilterInput, sort: SiteBuildMetadataSortInput, skip: Int, limit: Int): SiteBuildMetadataConnection!\n' +
                        '  sitePlugin(id: StringQueryOperatorInput, parent: NodeFilterInput, children: NodeFilterListInput, internal: InternalFilterInput, resolve: StringQueryOperatorInput, name: StringQueryOperatorInput, version: StringQueryOperatorInput, pluginOptions: SitePluginPluginOptionsFilterInput, nodeAPIs: StringQueryOperatorInput, browserAPIs: StringQueryOperatorInput, ssrAPIs: StringQueryOperatorInput, pluginFilepath: StringQueryOperatorInput, packageJson: SitePluginPackageJsonFilterInput): SitePlugin\n' +
                        '  allSitePlugin(filter: SitePluginFilterInput, sort: SitePluginSortInput, skip: Int, limit: Int): SitePluginConnection!\n' +
                        '}\n' +
                        '\n' +
                        'type Site implements Node {\n' +
                        '  buildTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date\n' +
                        '  siteMetadata: SiteSiteMetadata\n' +
                        '  port: Int\n' +
                        '  host: String\n' +
                        '  polyfill: Boolean\n' +
                        '  pathPrefix: String\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '}\n' +
                        '\n' +
                        'type SiteBuildMetadata implements Node {\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '  buildTime(\n' +
                        '    # Format the date using Moment.js\' date tokens, e.g. `date(formatString: "YYYY\n' +
                        '    # MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for\n' +
                        '    # documentation for different tokens.\n' +
                        '    formatString: String\n' +
                        '\n' +
                        "    # Returns a string generated with Moment.js' `fromNow` function\n" +
                        '    fromNow: Boolean\n' +
                        '\n' +
                        '    # Returns the difference between this date and the current time. Defaults to\n' +
                        '    # "milliseconds" but you can also pass in as the measurement "years",\n' +
                        '    # "months", "weeks", "days", "hours", "minutes", and "seconds".\n' +
                        '    difference: String\n' +
                        '\n' +
                        '    # Configures the locale Moment.js will use to format the date.\n' +
                        '    locale: String\n' +
                        '  ): Date\n' +
                        '}\n' +
                        '\n' +
                        'type SiteBuildMetadataConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SiteBuildMetadataEdge!]!\n' +
                        '  nodes: [SiteBuildMetadata!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: SiteBuildMetadataFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: SiteBuildMetadataFieldsEnum!): [SiteBuildMetadataGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type SiteBuildMetadataEdge {\n' +
                        '  next: SiteBuildMetadata\n' +
                        '  node: SiteBuildMetadata!\n' +
                        '  previous: SiteBuildMetadata\n' +
                        '}\n' +
                        '\n' +
                        'enum SiteBuildMetadataFieldsEnum {\n' +
                        '  id\n' +
                        '  parent___id\n' +
                        '  parent___parent___id\n' +
                        '  parent___parent___parent___id\n' +
                        '  parent___parent___parent___children\n' +
                        '  parent___parent___children\n' +
                        '  parent___parent___children___id\n' +
                        '  parent___parent___children___children\n' +
                        '  parent___parent___internal___content\n' +
                        '  parent___parent___internal___contentDigest\n' +
                        '  parent___parent___internal___description\n' +
                        '  parent___parent___internal___fieldOwners\n' +
                        '  parent___parent___internal___ignoreType\n' +
                        '  parent___parent___internal___mediaType\n' +
                        '  parent___parent___internal___owner\n' +
                        '  parent___parent___internal___type\n' +
                        '  parent___children\n' +
                        '  parent___children___id\n' +
                        '  parent___children___parent___id\n' +
                        '  parent___children___parent___children\n' +
                        '  parent___children___children\n' +
                        '  parent___children___children___id\n' +
                        '  parent___children___children___children\n' +
                        '  parent___children___internal___content\n' +
                        '  parent___children___internal___contentDigest\n' +
                        '  parent___children___internal___description\n' +
                        '  parent___children___internal___fieldOwners\n' +
                        '  parent___children___internal___ignoreType\n' +
                        '  parent___children___internal___mediaType\n' +
                        '  parent___children___internal___owner\n' +
                        '  parent___children___internal___type\n' +
                        '  parent___internal___content\n' +
                        '  parent___internal___contentDigest\n' +
                        '  parent___internal___description\n' +
                        '  parent___internal___fieldOwners\n' +
                        '  parent___internal___ignoreType\n' +
                        '  parent___internal___mediaType\n' +
                        '  parent___internal___owner\n' +
                        '  parent___internal___type\n' +
                        '  children\n' +
                        '  children___id\n' +
                        '  children___parent___id\n' +
                        '  children___parent___parent___id\n' +
                        '  children___parent___parent___children\n' +
                        '  children___parent___children\n' +
                        '  children___parent___children___id\n' +
                        '  children___parent___children___children\n' +
                        '  children___parent___internal___content\n' +
                        '  children___parent___internal___contentDigest\n' +
                        '  children___parent___internal___description\n' +
                        '  children___parent___internal___fieldOwners\n' +
                        '  children___parent___internal___ignoreType\n' +
                        '  children___parent___internal___mediaType\n' +
                        '  children___parent___internal___owner\n' +
                        '  children___parent___internal___type\n' +
                        '  children___children\n' +
                        '  children___children___id\n' +
                        '  children___children___parent___id\n' +
                        '  children___children___parent___children\n' +
                        '  children___children___children\n' +
                        '  children___children___children___id\n' +
                        '  children___children___children___children\n' +
                        '  children___children___internal___content\n' +
                        '  children___children___internal___contentDigest\n' +
                        '  children___children___internal___description\n' +
                        '  children___children___internal___fieldOwners\n' +
                        '  children___children___internal___ignoreType\n' +
                        '  children___children___internal___mediaType\n' +
                        '  children___children___internal___owner\n' +
                        '  children___children___internal___type\n' +
                        '  children___internal___content\n' +
                        '  children___internal___contentDigest\n' +
                        '  children___internal___description\n' +
                        '  children___internal___fieldOwners\n' +
                        '  children___internal___ignoreType\n' +
                        '  children___internal___mediaType\n' +
                        '  children___internal___owner\n' +
                        '  children___internal___type\n' +
                        '  internal___content\n' +
                        '  internal___contentDigest\n' +
                        '  internal___description\n' +
                        '  internal___fieldOwners\n' +
                        '  internal___ignoreType\n' +
                        '  internal___mediaType\n' +
                        '  internal___owner\n' +
                        '  internal___type\n' +
                        '  buildTime\n' +
                        '}\n' +
                        '\n' +
                        'input SiteBuildMetadataFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '  buildTime: DateQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'type SiteBuildMetadataGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SiteBuildMetadataEdge!]!\n' +
                        '  nodes: [SiteBuildMetadata!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'input SiteBuildMetadataSortInput {\n' +
                        '  fields: [SiteBuildMetadataFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'type SiteConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SiteEdge!]!\n' +
                        '  nodes: [Site!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: SiteFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: SiteFieldsEnum!): [SiteGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type SiteEdge {\n' +
                        '  next: Site\n' +
                        '  node: Site!\n' +
                        '  previous: Site\n' +
                        '}\n' +
                        '\n' +
                        'enum SiteFieldsEnum {\n' +
                        '  buildTime\n' +
                        '  siteMetadata___title\n' +
                        '  siteMetadata___description\n' +
                        '  siteMetadata___footerTitle\n' +
                        '  siteMetadata___siteUrl\n' +
                        '  siteMetadata___twitter\n' +
                        '  siteMetadata___instagram\n' +
                        '  siteMetadata___metaImage\n' +
                        '  port\n' +
                        '  host\n' +
                        '  polyfill\n' +
                        '  pathPrefix\n' +
                        '  id\n' +
                        '  parent___id\n' +
                        '  parent___parent___id\n' +
                        '  parent___parent___parent___id\n' +
                        '  parent___parent___parent___children\n' +
                        '  parent___parent___children\n' +
                        '  parent___parent___children___id\n' +
                        '  parent___parent___children___children\n' +
                        '  parent___parent___internal___content\n' +
                        '  parent___parent___internal___contentDigest\n' +
                        '  parent___parent___internal___description\n' +
                        '  parent___parent___internal___fieldOwners\n' +
                        '  parent___parent___internal___ignoreType\n' +
                        '  parent___parent___internal___mediaType\n' +
                        '  parent___parent___internal___owner\n' +
                        '  parent___parent___internal___type\n' +
                        '  parent___children\n' +
                        '  parent___children___id\n' +
                        '  parent___children___parent___id\n' +
                        '  parent___children___parent___children\n' +
                        '  parent___children___children\n' +
                        '  parent___children___children___id\n' +
                        '  parent___children___children___children\n' +
                        '  parent___children___internal___content\n' +
                        '  parent___children___internal___contentDigest\n' +
                        '  parent___children___internal___description\n' +
                        '  parent___children___internal___fieldOwners\n' +
                        '  parent___children___internal___ignoreType\n' +
                        '  parent___children___internal___mediaType\n' +
                        '  parent___children___internal___owner\n' +
                        '  parent___children___internal___type\n' +
                        '  parent___internal___content\n' +
                        '  parent___internal___contentDigest\n' +
                        '  parent___internal___description\n' +
                        '  parent___internal___fieldOwners\n' +
                        '  parent___internal___ignoreType\n' +
                        '  parent___internal___mediaType\n' +
                        '  parent___internal___owner\n' +
                        '  parent___internal___type\n' +
                        '  children\n' +
                        '  children___id\n' +
                        '  children___parent___id\n' +
                        '  children___parent___parent___id\n' +
                        '  children___parent___parent___children\n' +
                        '  children___parent___children\n' +
                        '  children___parent___children___id\n' +
                        '  children___parent___children___children\n' +
                        '  children___parent___internal___content\n' +
                        '  children___parent___internal___contentDigest\n' +
                        '  children___parent___internal___description\n' +
                        '  children___parent___internal___fieldOwners\n' +
                        '  children___parent___internal___ignoreType\n' +
                        '  children___parent___internal___mediaType\n' +
                        '  children___parent___internal___owner\n' +
                        '  children___parent___internal___type\n' +
                        '  children___children\n' +
                        '  children___children___id\n' +
                        '  children___children___parent___id\n' +
                        '  children___children___parent___children\n' +
                        '  children___children___children\n' +
                        '  children___children___children___id\n' +
                        '  children___children___children___children\n' +
                        '  children___children___internal___content\n' +
                        '  children___children___internal___contentDigest\n' +
                        '  children___children___internal___description\n' +
                        '  children___children___internal___fieldOwners\n' +
                        '  children___children___internal___ignoreType\n' +
                        '  children___children___internal___mediaType\n' +
                        '  children___children___internal___owner\n' +
                        '  children___children___internal___type\n' +
                        '  children___internal___content\n' +
                        '  children___internal___contentDigest\n' +
                        '  children___internal___description\n' +
                        '  children___internal___fieldOwners\n' +
                        '  children___internal___ignoreType\n' +
                        '  children___internal___mediaType\n' +
                        '  children___internal___owner\n' +
                        '  children___internal___type\n' +
                        '  internal___content\n' +
                        '  internal___contentDigest\n' +
                        '  internal___description\n' +
                        '  internal___fieldOwners\n' +
                        '  internal___ignoreType\n' +
                        '  internal___mediaType\n' +
                        '  internal___owner\n' +
                        '  internal___type\n' +
                        '}\n' +
                        '\n' +
                        'input SiteFilterInput {\n' +
                        '  buildTime: DateQueryOperatorInput\n' +
                        '  siteMetadata: SiteSiteMetadataFilterInput\n' +
                        '  port: IntQueryOperatorInput\n' +
                        '  host: StringQueryOperatorInput\n' +
                        '  polyfill: BooleanQueryOperatorInput\n' +
                        '  pathPrefix: StringQueryOperatorInput\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type SiteGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SiteEdge!]!\n' +
                        '  nodes: [Site!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'type SitePage implements Node {\n' +
                        '  path: String!\n' +
                        '  component: String!\n' +
                        '  internalComponentName: String!\n' +
                        '  componentChunkName: String!\n' +
                        '  matchPath: String\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '  isCreatedByStatefulCreatePages: Boolean\n' +
                        '  context: SitePageContext\n' +
                        '  pluginCreator: SitePlugin\n' +
                        '  pluginCreatorId: String\n' +
                        '  componentPath: String\n' +
                        '}\n' +
                        '\n' +
                        'type SitePageConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SitePageEdge!]!\n' +
                        '  nodes: [SitePage!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: SitePageFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: SitePageFieldsEnum!): [SitePageGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type SitePageContext {\n' +
                        '  id: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePageContextFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePageEdge {\n' +
                        '  next: SitePage\n' +
                        '  node: SitePage!\n' +
                        '  previous: SitePage\n' +
                        '}\n' +
                        '\n' +
                        'enum SitePageFieldsEnum {\n' +
                        '  path\n' +
                        '  component\n' +
                        '  internalComponentName\n' +
                        '  componentChunkName\n' +
                        '  matchPath\n' +
                        '  id\n' +
                        '  parent___id\n' +
                        '  parent___parent___id\n' +
                        '  parent___parent___parent___id\n' +
                        '  parent___parent___parent___children\n' +
                        '  parent___parent___children\n' +
                        '  parent___parent___children___id\n' +
                        '  parent___parent___children___children\n' +
                        '  parent___parent___internal___content\n' +
                        '  parent___parent___internal___contentDigest\n' +
                        '  parent___parent___internal___description\n' +
                        '  parent___parent___internal___fieldOwners\n' +
                        '  parent___parent___internal___ignoreType\n' +
                        '  parent___parent___internal___mediaType\n' +
                        '  parent___parent___internal___owner\n' +
                        '  parent___parent___internal___type\n' +
                        '  parent___children\n' +
                        '  parent___children___id\n' +
                        '  parent___children___parent___id\n' +
                        '  parent___children___parent___children\n' +
                        '  parent___children___children\n' +
                        '  parent___children___children___id\n' +
                        '  parent___children___children___children\n' +
                        '  parent___children___internal___content\n' +
                        '  parent___children___internal___contentDigest\n' +
                        '  parent___children___internal___description\n' +
                        '  parent___children___internal___fieldOwners\n' +
                        '  parent___children___internal___ignoreType\n' +
                        '  parent___children___internal___mediaType\n' +
                        '  parent___children___internal___owner\n' +
                        '  parent___children___internal___type\n' +
                        '  parent___internal___content\n' +
                        '  parent___internal___contentDigest\n' +
                        '  parent___internal___description\n' +
                        '  parent___internal___fieldOwners\n' +
                        '  parent___internal___ignoreType\n' +
                        '  parent___internal___mediaType\n' +
                        '  parent___internal___owner\n' +
                        '  parent___internal___type\n' +
                        '  children\n' +
                        '  children___id\n' +
                        '  children___parent___id\n' +
                        '  children___parent___parent___id\n' +
                        '  children___parent___parent___children\n' +
                        '  children___parent___children\n' +
                        '  children___parent___children___id\n' +
                        '  children___parent___children___children\n' +
                        '  children___parent___internal___content\n' +
                        '  children___parent___internal___contentDigest\n' +
                        '  children___parent___internal___description\n' +
                        '  children___parent___internal___fieldOwners\n' +
                        '  children___parent___internal___ignoreType\n' +
                        '  children___parent___internal___mediaType\n' +
                        '  children___parent___internal___owner\n' +
                        '  children___parent___internal___type\n' +
                        '  children___children\n' +
                        '  children___children___id\n' +
                        '  children___children___parent___id\n' +
                        '  children___children___parent___children\n' +
                        '  children___children___children\n' +
                        '  children___children___children___id\n' +
                        '  children___children___children___children\n' +
                        '  children___children___internal___content\n' +
                        '  children___children___internal___contentDigest\n' +
                        '  children___children___internal___description\n' +
                        '  children___children___internal___fieldOwners\n' +
                        '  children___children___internal___ignoreType\n' +
                        '  children___children___internal___mediaType\n' +
                        '  children___children___internal___owner\n' +
                        '  children___children___internal___type\n' +
                        '  children___internal___content\n' +
                        '  children___internal___contentDigest\n' +
                        '  children___internal___description\n' +
                        '  children___internal___fieldOwners\n' +
                        '  children___internal___ignoreType\n' +
                        '  children___internal___mediaType\n' +
                        '  children___internal___owner\n' +
                        '  children___internal___type\n' +
                        '  internal___content\n' +
                        '  internal___contentDigest\n' +
                        '  internal___description\n' +
                        '  internal___fieldOwners\n' +
                        '  internal___ignoreType\n' +
                        '  internal___mediaType\n' +
                        '  internal___owner\n' +
                        '  internal___type\n' +
                        '  isCreatedByStatefulCreatePages\n' +
                        '  context___id\n' +
                        '  pluginCreator___id\n' +
                        '  pluginCreator___parent___id\n' +
                        '  pluginCreator___parent___parent___id\n' +
                        '  pluginCreator___parent___parent___children\n' +
                        '  pluginCreator___parent___children\n' +
                        '  pluginCreator___parent___children___id\n' +
                        '  pluginCreator___parent___children___children\n' +
                        '  pluginCreator___parent___internal___content\n' +
                        '  pluginCreator___parent___internal___contentDigest\n' +
                        '  pluginCreator___parent___internal___description\n' +
                        '  pluginCreator___parent___internal___fieldOwners\n' +
                        '  pluginCreator___parent___internal___ignoreType\n' +
                        '  pluginCreator___parent___internal___mediaType\n' +
                        '  pluginCreator___parent___internal___owner\n' +
                        '  pluginCreator___parent___internal___type\n' +
                        '  pluginCreator___children\n' +
                        '  pluginCreator___children___id\n' +
                        '  pluginCreator___children___parent___id\n' +
                        '  pluginCreator___children___parent___children\n' +
                        '  pluginCreator___children___children\n' +
                        '  pluginCreator___children___children___id\n' +
                        '  pluginCreator___children___children___children\n' +
                        '  pluginCreator___children___internal___content\n' +
                        '  pluginCreator___children___internal___contentDigest\n' +
                        '  pluginCreator___children___internal___description\n' +
                        '  pluginCreator___children___internal___fieldOwners\n' +
                        '  pluginCreator___children___internal___ignoreType\n' +
                        '  pluginCreator___children___internal___mediaType\n' +
                        '  pluginCreator___children___internal___owner\n' +
                        '  pluginCreator___children___internal___type\n' +
                        '  pluginCreator___internal___content\n' +
                        '  pluginCreator___internal___contentDigest\n' +
                        '  pluginCreator___internal___description\n' +
                        '  pluginCreator___internal___fieldOwners\n' +
                        '  pluginCreator___internal___ignoreType\n' +
                        '  pluginCreator___internal___mediaType\n' +
                        '  pluginCreator___internal___owner\n' +
                        '  pluginCreator___internal___type\n' +
                        '  pluginCreator___resolve\n' +
                        '  pluginCreator___name\n' +
                        '  pluginCreator___version\n' +
                        '  pluginCreator___pluginOptions___typekit___id\n' +
                        '  pluginCreator___pluginOptions___name\n' +
                        '  pluginCreator___pluginOptions___short_name\n' +
                        '  pluginCreator___pluginOptions___start_url\n' +
                        '  pluginCreator___pluginOptions___background_color\n' +
                        '  pluginCreator___pluginOptions___theme_color\n' +
                        '  pluginCreator___pluginOptions___display\n' +
                        '  pluginCreator___pluginOptions___icon\n' +
                        '  pluginCreator___pluginOptions___cache_busting_mode\n' +
                        '  pluginCreator___pluginOptions___include_favicon\n' +
                        '  pluginCreator___pluginOptions___legacy\n' +
                        '  pluginCreator___pluginOptions___theme_color_in_head\n' +
                        '  pluginCreator___pluginOptions___cacheDigest\n' +
                        '  pluginCreator___pluginOptions___path\n' +
                        '  pluginCreator___pluginOptions___trackingId\n' +
                        '  pluginCreator___pluginOptions___cookieDomain\n' +
                        '  pluginCreator___pluginOptions___head\n' +
                        '  pluginCreator___pluginOptions___anonymize\n' +
                        '  pluginCreator___pluginOptions___respectDNT\n' +
                        '  pluginCreator___pluginOptions___pageTransitionDelay\n' +
                        '  pluginCreator___pluginOptions___printRejected\n' +
                        '  pluginCreator___pluginOptions___tailwind\n' +
                        '  pluginCreator___pluginOptions___develop\n' +
                        '  pluginCreator___pluginOptions___debug\n' +
                        '  pluginCreator___pluginOptions___content\n' +
                        '  pluginCreator___pluginOptions___whitelist\n' +
                        '  pluginCreator___pluginOptions___output\n' +
                        '  pluginCreator___pluginOptions___createLinkInHead\n' +
                        '  pluginCreator___pluginOptions___pathCheck\n' +
                        '  pluginCreator___pluginOptions___allExtensions\n' +
                        '  pluginCreator___pluginOptions___isTSX\n' +
                        '  pluginCreator___pluginOptions___jsxPragma\n' +
                        '  pluginCreator___nodeAPIs\n' +
                        '  pluginCreator___browserAPIs\n' +
                        '  pluginCreator___ssrAPIs\n' +
                        '  pluginCreator___pluginFilepath\n' +
                        '  pluginCreator___packageJson___name\n' +
                        '  pluginCreator___packageJson___description\n' +
                        '  pluginCreator___packageJson___version\n' +
                        '  pluginCreator___packageJson___main\n' +
                        '  pluginCreator___packageJson___license\n' +
                        '  pluginCreator___packageJson___dependencies\n' +
                        '  pluginCreator___packageJson___dependencies___name\n' +
                        '  pluginCreator___packageJson___dependencies___version\n' +
                        '  pluginCreator___packageJson___devDependencies\n' +
                        '  pluginCreator___packageJson___devDependencies___name\n' +
                        '  pluginCreator___packageJson___devDependencies___version\n' +
                        '  pluginCreator___packageJson___peerDependencies\n' +
                        '  pluginCreator___packageJson___peerDependencies___name\n' +
                        '  pluginCreator___packageJson___peerDependencies___version\n' +
                        '  pluginCreator___packageJson___keywords\n' +
                        '  pluginCreatorId\n' +
                        '  componentPath\n' +
                        '}\n' +
                        '\n' +
                        'input SitePageFilterInput {\n' +
                        '  path: StringQueryOperatorInput\n' +
                        '  component: StringQueryOperatorInput\n' +
                        '  internalComponentName: StringQueryOperatorInput\n' +
                        '  componentChunkName: StringQueryOperatorInput\n' +
                        '  matchPath: StringQueryOperatorInput\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '  isCreatedByStatefulCreatePages: BooleanQueryOperatorInput\n' +
                        '  context: SitePageContextFilterInput\n' +
                        '  pluginCreator: SitePluginFilterInput\n' +
                        '  pluginCreatorId: StringQueryOperatorInput\n' +
                        '  componentPath: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePageGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SitePageEdge!]!\n' +
                        '  nodes: [SitePage!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePageSortInput {\n' +
                        '  fields: [SitePageFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'type SitePlugin implements Node {\n' +
                        '  id: ID!\n' +
                        '  parent: Node\n' +
                        '  children: [Node!]!\n' +
                        '  internal: Internal!\n' +
                        '  resolve: String\n' +
                        '  name: String\n' +
                        '  version: String\n' +
                        '  pluginOptions: SitePluginPluginOptions\n' +
                        '  nodeAPIs: [String]\n' +
                        '  browserAPIs: [String]\n' +
                        '  ssrAPIs: [String]\n' +
                        '  pluginFilepath: String\n' +
                        '  packageJson: SitePluginPackageJson\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SitePluginEdge!]!\n' +
                        '  nodes: [SitePlugin!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  distinct(field: SitePluginFieldsEnum!): [String!]!\n' +
                        '  group(skip: Int, limit: Int, field: SitePluginFieldsEnum!): [SitePluginGroupConnection!]!\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginEdge {\n' +
                        '  next: SitePlugin\n' +
                        '  node: SitePlugin!\n' +
                        '  previous: SitePlugin\n' +
                        '}\n' +
                        '\n' +
                        'enum SitePluginFieldsEnum {\n' +
                        '  id\n' +
                        '  parent___id\n' +
                        '  parent___parent___id\n' +
                        '  parent___parent___parent___id\n' +
                        '  parent___parent___parent___children\n' +
                        '  parent___parent___children\n' +
                        '  parent___parent___children___id\n' +
                        '  parent___parent___children___children\n' +
                        '  parent___parent___internal___content\n' +
                        '  parent___parent___internal___contentDigest\n' +
                        '  parent___parent___internal___description\n' +
                        '  parent___parent___internal___fieldOwners\n' +
                        '  parent___parent___internal___ignoreType\n' +
                        '  parent___parent___internal___mediaType\n' +
                        '  parent___parent___internal___owner\n' +
                        '  parent___parent___internal___type\n' +
                        '  parent___children\n' +
                        '  parent___children___id\n' +
                        '  parent___children___parent___id\n' +
                        '  parent___children___parent___children\n' +
                        '  parent___children___children\n' +
                        '  parent___children___children___id\n' +
                        '  parent___children___children___children\n' +
                        '  parent___children___internal___content\n' +
                        '  parent___children___internal___contentDigest\n' +
                        '  parent___children___internal___description\n' +
                        '  parent___children___internal___fieldOwners\n' +
                        '  parent___children___internal___ignoreType\n' +
                        '  parent___children___internal___mediaType\n' +
                        '  parent___children___internal___owner\n' +
                        '  parent___children___internal___type\n' +
                        '  parent___internal___content\n' +
                        '  parent___internal___contentDigest\n' +
                        '  parent___internal___description\n' +
                        '  parent___internal___fieldOwners\n' +
                        '  parent___internal___ignoreType\n' +
                        '  parent___internal___mediaType\n' +
                        '  parent___internal___owner\n' +
                        '  parent___internal___type\n' +
                        '  children\n' +
                        '  children___id\n' +
                        '  children___parent___id\n' +
                        '  children___parent___parent___id\n' +
                        '  children___parent___parent___children\n' +
                        '  children___parent___children\n' +
                        '  children___parent___children___id\n' +
                        '  children___parent___children___children\n' +
                        '  children___parent___internal___content\n' +
                        '  children___parent___internal___contentDigest\n' +
                        '  children___parent___internal___description\n' +
                        '  children___parent___internal___fieldOwners\n' +
                        '  children___parent___internal___ignoreType\n' +
                        '  children___parent___internal___mediaType\n' +
                        '  children___parent___internal___owner\n' +
                        '  children___parent___internal___type\n' +
                        '  children___children\n' +
                        '  children___children___id\n' +
                        '  children___children___parent___id\n' +
                        '  children___children___parent___children\n' +
                        '  children___children___children\n' +
                        '  children___children___children___id\n' +
                        '  children___children___children___children\n' +
                        '  children___children___internal___content\n' +
                        '  children___children___internal___contentDigest\n' +
                        '  children___children___internal___description\n' +
                        '  children___children___internal___fieldOwners\n' +
                        '  children___children___internal___ignoreType\n' +
                        '  children___children___internal___mediaType\n' +
                        '  children___children___internal___owner\n' +
                        '  children___children___internal___type\n' +
                        '  children___internal___content\n' +
                        '  children___internal___contentDigest\n' +
                        '  children___internal___description\n' +
                        '  children___internal___fieldOwners\n' +
                        '  children___internal___ignoreType\n' +
                        '  children___internal___mediaType\n' +
                        '  children___internal___owner\n' +
                        '  children___internal___type\n' +
                        '  internal___content\n' +
                        '  internal___contentDigest\n' +
                        '  internal___description\n' +
                        '  internal___fieldOwners\n' +
                        '  internal___ignoreType\n' +
                        '  internal___mediaType\n' +
                        '  internal___owner\n' +
                        '  internal___type\n' +
                        '  resolve\n' +
                        '  name\n' +
                        '  version\n' +
                        '  pluginOptions___typekit___id\n' +
                        '  pluginOptions___name\n' +
                        '  pluginOptions___short_name\n' +
                        '  pluginOptions___start_url\n' +
                        '  pluginOptions___background_color\n' +
                        '  pluginOptions___theme_color\n' +
                        '  pluginOptions___display\n' +
                        '  pluginOptions___icon\n' +
                        '  pluginOptions___cache_busting_mode\n' +
                        '  pluginOptions___include_favicon\n' +
                        '  pluginOptions___legacy\n' +
                        '  pluginOptions___theme_color_in_head\n' +
                        '  pluginOptions___cacheDigest\n' +
                        '  pluginOptions___path\n' +
                        '  pluginOptions___trackingId\n' +
                        '  pluginOptions___cookieDomain\n' +
                        '  pluginOptions___head\n' +
                        '  pluginOptions___anonymize\n' +
                        '  pluginOptions___respectDNT\n' +
                        '  pluginOptions___pageTransitionDelay\n' +
                        '  pluginOptions___printRejected\n' +
                        '  pluginOptions___tailwind\n' +
                        '  pluginOptions___develop\n' +
                        '  pluginOptions___debug\n' +
                        '  pluginOptions___content\n' +
                        '  pluginOptions___whitelist\n' +
                        '  pluginOptions___output\n' +
                        '  pluginOptions___createLinkInHead\n' +
                        '  pluginOptions___pathCheck\n' +
                        '  pluginOptions___allExtensions\n' +
                        '  pluginOptions___isTSX\n' +
                        '  pluginOptions___jsxPragma\n' +
                        '  nodeAPIs\n' +
                        '  browserAPIs\n' +
                        '  ssrAPIs\n' +
                        '  pluginFilepath\n' +
                        '  packageJson___name\n' +
                        '  packageJson___description\n' +
                        '  packageJson___version\n' +
                        '  packageJson___main\n' +
                        '  packageJson___license\n' +
                        '  packageJson___dependencies\n' +
                        '  packageJson___dependencies___name\n' +
                        '  packageJson___dependencies___version\n' +
                        '  packageJson___devDependencies\n' +
                        '  packageJson___devDependencies___name\n' +
                        '  packageJson___devDependencies___version\n' +
                        '  packageJson___peerDependencies\n' +
                        '  packageJson___peerDependencies___name\n' +
                        '  packageJson___peerDependencies___version\n' +
                        '  packageJson___keywords\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '  parent: NodeFilterInput\n' +
                        '  children: NodeFilterListInput\n' +
                        '  internal: InternalFilterInput\n' +
                        '  resolve: StringQueryOperatorInput\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  version: StringQueryOperatorInput\n' +
                        '  pluginOptions: SitePluginPluginOptionsFilterInput\n' +
                        '  nodeAPIs: StringQueryOperatorInput\n' +
                        '  browserAPIs: StringQueryOperatorInput\n' +
                        '  ssrAPIs: StringQueryOperatorInput\n' +
                        '  pluginFilepath: StringQueryOperatorInput\n' +
                        '  packageJson: SitePluginPackageJsonFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginGroupConnection {\n' +
                        '  totalCount: Int!\n' +
                        '  edges: [SitePluginEdge!]!\n' +
                        '  nodes: [SitePlugin!]!\n' +
                        '  pageInfo: PageInfo!\n' +
                        '  field: String!\n' +
                        '  fieldValue: String\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginPackageJson {\n' +
                        '  name: String\n' +
                        '  description: String\n' +
                        '  version: String\n' +
                        '  main: String\n' +
                        '  license: String\n' +
                        '  dependencies: [SitePluginPackageJsonDependencies]\n' +
                        '  devDependencies: [SitePluginPackageJsonDevDependencies]\n' +
                        '  peerDependencies: [SitePluginPackageJsonPeerDependencies]\n' +
                        '  keywords: [String]\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginPackageJsonDependencies {\n' +
                        '  name: String\n' +
                        '  version: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonDependenciesFilterInput {\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  version: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonDependenciesFilterListInput {\n' +
                        '  elemMatch: SitePluginPackageJsonDependenciesFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginPackageJsonDevDependencies {\n' +
                        '  name: String\n' +
                        '  version: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonDevDependenciesFilterInput {\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  version: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonDevDependenciesFilterListInput {\n' +
                        '  elemMatch: SitePluginPackageJsonDevDependenciesFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonFilterInput {\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  description: StringQueryOperatorInput\n' +
                        '  version: StringQueryOperatorInput\n' +
                        '  main: StringQueryOperatorInput\n' +
                        '  license: StringQueryOperatorInput\n' +
                        '  dependencies: SitePluginPackageJsonDependenciesFilterListInput\n' +
                        '  devDependencies: SitePluginPackageJsonDevDependenciesFilterListInput\n' +
                        '  peerDependencies: SitePluginPackageJsonPeerDependenciesFilterListInput\n' +
                        '  keywords: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginPackageJsonPeerDependencies {\n' +
                        '  name: String\n' +
                        '  version: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonPeerDependenciesFilterInput {\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  version: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPackageJsonPeerDependenciesFilterListInput {\n' +
                        '  elemMatch: SitePluginPackageJsonPeerDependenciesFilterInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginPluginOptions {\n' +
                        '  typekit: SitePluginPluginOptionsTypekit\n' +
                        '  name: String\n' +
                        '  short_name: String\n' +
                        '  start_url: String\n' +
                        '  background_color: String\n' +
                        '  theme_color: String\n' +
                        '  display: String\n' +
                        '  icon: String\n' +
                        '  cache_busting_mode: String\n' +
                        '  include_favicon: Boolean\n' +
                        '  legacy: Boolean\n' +
                        '  theme_color_in_head: Boolean\n' +
                        '  cacheDigest: String\n' +
                        '  path: String\n' +
                        '  trackingId: String\n' +
                        '  cookieDomain: String\n' +
                        '  head: Boolean\n' +
                        '  anonymize: Boolean\n' +
                        '  respectDNT: Boolean\n' +
                        '  pageTransitionDelay: Int\n' +
                        '  printRejected: Boolean\n' +
                        '  tailwind: Boolean\n' +
                        '  develop: Boolean\n' +
                        '  debug: Boolean\n' +
                        '  content: [String]\n' +
                        '  whitelist: [String]\n' +
                        '  output: String\n' +
                        '  createLinkInHead: Boolean\n' +
                        '  pathCheck: Boolean\n' +
                        '  allExtensions: Boolean\n' +
                        '  isTSX: Boolean\n' +
                        '  jsxPragma: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPluginOptionsFilterInput {\n' +
                        '  typekit: SitePluginPluginOptionsTypekitFilterInput\n' +
                        '  name: StringQueryOperatorInput\n' +
                        '  short_name: StringQueryOperatorInput\n' +
                        '  start_url: StringQueryOperatorInput\n' +
                        '  background_color: StringQueryOperatorInput\n' +
                        '  theme_color: StringQueryOperatorInput\n' +
                        '  display: StringQueryOperatorInput\n' +
                        '  icon: StringQueryOperatorInput\n' +
                        '  cache_busting_mode: StringQueryOperatorInput\n' +
                        '  include_favicon: BooleanQueryOperatorInput\n' +
                        '  legacy: BooleanQueryOperatorInput\n' +
                        '  theme_color_in_head: BooleanQueryOperatorInput\n' +
                        '  cacheDigest: StringQueryOperatorInput\n' +
                        '  path: StringQueryOperatorInput\n' +
                        '  trackingId: StringQueryOperatorInput\n' +
                        '  cookieDomain: StringQueryOperatorInput\n' +
                        '  head: BooleanQueryOperatorInput\n' +
                        '  anonymize: BooleanQueryOperatorInput\n' +
                        '  respectDNT: BooleanQueryOperatorInput\n' +
                        '  pageTransitionDelay: IntQueryOperatorInput\n' +
                        '  printRejected: BooleanQueryOperatorInput\n' +
                        '  tailwind: BooleanQueryOperatorInput\n' +
                        '  develop: BooleanQueryOperatorInput\n' +
                        '  debug: BooleanQueryOperatorInput\n' +
                        '  content: StringQueryOperatorInput\n' +
                        '  whitelist: StringQueryOperatorInput\n' +
                        '  output: StringQueryOperatorInput\n' +
                        '  createLinkInHead: BooleanQueryOperatorInput\n' +
                        '  pathCheck: BooleanQueryOperatorInput\n' +
                        '  allExtensions: BooleanQueryOperatorInput\n' +
                        '  isTSX: BooleanQueryOperatorInput\n' +
                        '  jsxPragma: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'type SitePluginPluginOptionsTypekit {\n' +
                        '  id: String\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginPluginOptionsTypekitFilterInput {\n' +
                        '  id: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input SitePluginSortInput {\n' +
                        '  fields: [SitePluginFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'type SiteSiteMetadata {\n' +
                        '  title: String\n' +
                        '  description: String\n' +
                        '  footerTitle: String\n' +
                        '  siteUrl: String\n' +
                        '  twitter: String\n' +
                        '  instagram: String\n' +
                        '  metaImage: String\n' +
                        '}\n' +
                        '\n' +
                        'input SiteSiteMetadataFilterInput {\n' +
                        '  title: StringQueryOperatorInput\n' +
                        '  description: StringQueryOperatorInput\n' +
                        '  footerTitle: StringQueryOperatorInput\n' +
                        '  siteUrl: StringQueryOperatorInput\n' +
                        '  twitter: StringQueryOperatorInput\n' +
                        '  instagram: StringQueryOperatorInput\n' +
                        '  metaImage: StringQueryOperatorInput\n' +
                        '}\n' +
                        '\n' +
                        'input SiteSortInput {\n' +
                        '  fields: [SiteFieldsEnum]\n' +
                        '  order: [SortOrderEnum] = [ASC]\n' +
                        '}\n' +
                        '\n' +
                        'enum SortOrderEnum {\n' +
                        '  ASC\n' +
                        '  DESC\n' +
                        '}\n' +
                        '\n' +
                        'input StringQueryOperatorInput {\n' +
                        '  eq: String\n' +
                        '  ne: String\n' +
                        '  in: [String]\n' +
                        '  nin: [String]\n' +
                        '  regex: String\n' +
                        '  glob: String\n' +
                        '}\n',
                      tagName: 'graphql'
                    }
                  ],
                  'react/jsx-pascal-case': 'off',
                  'jsx-a11y/accessible-emoji': 'warn',
                  'jsx-a11y/alt-text': 'warn',
                  'jsx-a11y/anchor-has-content': 'warn',
                  'jsx-a11y/anchor-is-valid': 'warn',
                  'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
                  'jsx-a11y/aria-props': 'warn',
                  'jsx-a11y/aria-proptypes': 'warn',
                  'jsx-a11y/aria-role': 'warn',
                  'jsx-a11y/aria-unsupported-elements': 'warn',
                  'jsx-a11y/click-events-have-key-events': 'warn',
                  'jsx-a11y/control-has-associated-label': [
                    'warn',
                    {
                      ignoreElements: [
                        'audio',    'canvas',
                        'embed',    'input',
                        'textarea', 'tr',
                        'video'
                      ],
                      ignoreRoles: [
                        'grid',       'listbox',
                        'menu',       'menubar',
                        'radiogroup', 'row',
                        'tablist',    'toolbar',
                        'tree',       'treegrid'
                      ],
                      includeRoles: [ 'alert', 'dialog' ]
                    }
                  ],
                  'jsx-a11y/heading-has-content': 'warn',
                  'jsx-a11y/html-has-lang': 'warn',
                  'jsx-a11y/iframe-has-title': 'warn',
                  'jsx-a11y/img-redundant-alt': 'warn',
                  'jsx-a11y/interactive-supports-focus': [
                    'warn',
                    {
                      tabbable: [
                        'button',
                        'checkbox',
                        'link',
                        'progressbar',
                        'searchbox',
                        'slider',
                        'spinbutton',
                        'switch',
                        'textbox'
                      ]
                    }
                  ],
                  'jsx-a11y/label-has-associated-control': 'warn',
                  'jsx-a11y/lang': 'warn',
                  'jsx-a11y/media-has-caption': 'warn',
                  'jsx-a11y/mouse-events-have-key-events': 'warn',
                  'jsx-a11y/no-access-key': 'warn',
                  'jsx-a11y/no-autofocus': 'warn',
                  'jsx-a11y/no-distracting-elements': 'warn',
                  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
                  'jsx-a11y/no-noninteractive-element-interactions': [
                    'warn',
                    {
                      body: [ 'onError', 'onLoad' ],
                      iframe: [ 'onError', 'onLoad' ],
                      img: [ 'onError', 'onLoad' ]
                    }
                  ],
                  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
                  'jsx-a11y/no-noninteractive-tabindex': 'warn',
                  'jsx-a11y/no-onchange': 'warn',
                  'jsx-a11y/no-redundant-roles': 'warn',
                  'jsx-a11y/no-static-element-interactions': 'warn',
                  'jsx-a11y/role-has-required-aria-props': 'warn',
                  'jsx-a11y/role-supports-aria-props': 'warn',
                  'jsx-a11y/scope': 'warn',
                  'jsx-a11y/tabindex-no-positive': 'warn'
                }
              }
            },
            loader: '/Users/mlaroy/Sites/cascadia/node_modules/eslint-loader/index.js'
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
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/style-loader/index.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: true,
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
                  develop: true,
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
                options: { sourceMap: true, postcssOptions: {} }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                options: {},
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/style-loader/index.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: true,
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
                  develop: true,
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
                options: { sourceMap: true, postcssOptions: {} }
              }
            ]
          },
          {
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/style-loader/index.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: true,
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
                  develop: true,
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
                  sourceMap: true,
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
                options: { hmr: true },
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/style-loader/index.js'
              },
              {
                loader: '/Users/mlaroy/Sites/cascadia/node_modules/css-loader/index.js',
                options: {
                  sourceMap: true,
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
                  develop: true,
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
                  sourceMap: true,
                  plugins: [Function: plugins],
                  browsers: undefined
                }
              }
            ],
            test: /\.css$/
          }
        ]
      },
      {
        include: /node_modules\/react-dom/,
        test: /\.jsx?$/,
        use: {
          loader: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby/dist/utils/webpack-hmr-hooks-patch.js'
        }
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
        'process.env.NODE_ENV': '"development"',
        'process.env.PUBLIC_DIR': '"/Users/mlaroy/Sites/cascadia/public"',
        'process.env.BUILD_STAGE': '"develop"',
        'process.env.CYPRESS_SUPPORT': undefined,
        'process.env.GATSBY_SOCKET_IO_DEFAULT_TRANSPORT': '"websocket"',
        'process.env.GATSBY_LOGGER': '"yurnalist"',
        'process.env.GATSBY_BUILD_STAGE': '"develop"',
        __BASE_PATH__: '""',
        __PATH_PREFIX__: '""',
        __ASSET_PREFIX__: '""'
      }
    },
    GatsbyWebpackVirtualModules {},
    HotModuleReplacementPlugin {
      options: {},
      multiStep: undefined,
      fullBuildTimeout: 200,
      requestTimeout: 10000
    },
    NoEmitOnErrorsPlugin {},
    GatsbyWebpackEslintGraphqlSchemaReload {
      plugin: { name: 'GatsbyWebpackEslintGraphqlSchemaReload' },
      schema: null
    },
    DefinePlugin {
      definitions: { __MANIFEST_PLUGIN_HAS_LOCALISATION__: undefined }
    }
  ],
  target: 'web',
  devtool: 'cheap-module-source-map',
  performance: { hints: false },
  mode: 'development',
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
            themeDir: '/Users/mlaroy/Sites/cascadia/node_modules/gatsby-plugin-web-font-loader',
            themeName: 'gatsby-plugin-web-font-loader'
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
  externals: { 'socket.io-client': 'io' }
}