'use strict';

const webpack = require('webpack');

module.exports = (query) => {
    let publicPath = '//' + query.staticHost + '/';
    if (query.publicSlug) {
        publicPath += query.publicSlug + '/';
    }

    const opts = {
        context: query.contextDir,
        output: {
            filename: '[name].js',
            chunkFilename: '[hash]-[id].js',
            path: query.outputDir,
            publicPath: publicPath
        },
        entry: query.entry,
        resolve: {},
        module: {}
    };

    if (query.modules) {
        opts.resolve.modules = query.modules;
    }

    if (query.loaders) {
        opts.module.loaders = query.loaders;
    }

    if (query.sourceMap === true) {
        opts.devtool = 'source-map';
    }

    if (query.minimize === true) {
        opts.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                output: {
                    comments: false,
                },
            }),
            new webpack.optimize.AggressiveMergingPlugin()
        ];
    }

    return opts;
};
