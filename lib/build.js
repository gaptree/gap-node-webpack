'use strict';

const webpack = require('webpack');

module.exports = (query) => {
    webpack(
        require('./opts.js')(query),
        (err, stats) => {
            if (err) {
                throw err;
            }

            require('./print.js').info(
                `[webpack:build ${query.outputDir}]
                ${stats.toString({chunks: false, colors: true})}
                `
            );
        }
    );
};
