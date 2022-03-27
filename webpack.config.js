module.exports = {
  entry: __dirname + '/client/Index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  "store": {
    "adapter": "sequelize",
    "dialect": "postgres",
    "url": "postgres://znbfzhztgogqjp:05f0b48e826d0fc3c0d4c7ae63fba0cab4c84b58479e44ca789cfbdaf7ff05e7@ec2-52-201-124-168.compute-1.amazonaws.com:5432/dakv864hep6lie"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js|jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      }
    ]
  }
};
