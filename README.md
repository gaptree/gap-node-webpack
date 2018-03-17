# Gap Node Webpack

## Install

```javascript
yarn add gap-node-webpack
```

## Usage

```javascript
'use strict';

const path = require('path');

require('gap-node-webpack').build({
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
```

```javascript
'use strict';

const express = require('express');
const path = require('path');
const middleware = require('gap-node-webpack').middleware;

const app = express();
const port = '8007';
const publicSlug = 'js';

app.use(middleware({
    contextDir: path.resolve(__dirname, 'src/js'),
    outputDir: path.resolve(__dirname, 'dev/js'),
    modules: [
        path.resolve(__dirname, 'module/js/')
    ],
    sourceMap: true,
    publicSlug: publicSlug,
    entry: {
        main: './main.js'
    }
}));

app.listen(port, function () {
    console.log('Front server listening on port ' + port + '!');
});
```
