const path = require('path');

module.exports = {
    entry: {
        "types": "./scripts/types.ts",
        "arrow": "./scripts/arrow.ts",
        "classes": "./scripts/classes.ts",
        "defaults": "./scripts/defaults.ts",
        "destructuring": "./scripts/destructuring.ts",
        "interpolation": "./scripts/interpolation.ts",
        "iterators": "./scripts/for-of.ts",
        "scoping": "./scripts/scoping.ts",
        "modules": "./scripts/modules.ts",
        "module-loaders": "./scripts/module-loaders.ts",
        "literals": "./scripts/object-literals.ts",
        "interfaces": "./scripts/interfaces.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
