module.exports = {
    entry: './public/js/script.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                test   : /\.(jpe?g|png|gif|svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            },

            {
                test   : /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test   : /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'sass-loader?sourceMap', 'postcss-loader'],
            },
        ]
    }
};