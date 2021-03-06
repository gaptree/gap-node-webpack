'use restrict';

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const parseOpts = require('./parseOpts.js');

module.exports = (query) => {
    const compiler = webpack(parseOpts(query));
    const contextDir = query.contextDir;
    const publicSlug = query.publicSlug;

    return middleware(compiler, {
        stats: {colors: true},
        hot: true,
        contentBase: contextDir,
        publicPath: `/${publicSlug}/`,
        clientLogLevel: 'none',
        headers: { 'X-Custom-Header': 'yes' },
        disableHostCheck: true,
    });
};
