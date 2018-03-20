'use strict';

const webpack = require('webpack');
const parseOpts = require('./parseOpts.js');
const print = require('./print.js');

module.exports = (query) => {
    webpack(
        parseOpts(query),
        (err, stats) => {
            if (err) {
                throw err;
            }
            print.info(
                `[webpack:build ${query.outputDir}]
                ${stats.toString({chunks: false, colors: true})}
                `
            );
        }
    );
};
