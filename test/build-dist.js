'use strict';

const path = require('path');

require('../index.js').build({
    contextDir: path.resolve(__dirname, 'src/js'),
    outputDir: path.resolve(__dirname, 'dist/js'),
    minimize: true,
    modules: [
        path.resolve(__dirname, 'module/js')
    ],
    entry: {
        main: './main.js'
    }
});
