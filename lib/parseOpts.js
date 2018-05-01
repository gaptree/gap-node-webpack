'use strict';

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (query) => {
    let publicPath = '//' + query.staticHost + '/';
    if (query.publicSlug) {
        publicPath += query.publicSlug + '/';
    }

    const opts = {
        mode: query.mode || 'development',
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

    if (query.alias) {
        opts.resolve.alias = query.alias;
    }

    // deprecated
    if (query.loaders) {
        opts.module.loaders = query.loaders;
    }

    if (query.rules) {
        opts.module.rules = query.rules;
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
            new UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin()
        ];
    }

    return opts;
};
