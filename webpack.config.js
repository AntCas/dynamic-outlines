var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/DynamicOutlines.js',
    output: {
        path: path.resolve('lib'),
        filename: 'DynamicOutlines.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
