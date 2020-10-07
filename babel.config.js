module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'IE >= 11'],
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    '@loadable/babel-plugin',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-styled-components',
      {
        pure: true,
        displayName: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          Client: './client',
          Shared: './shared',
        },
      },
    ],
  ],
};