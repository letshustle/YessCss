/*eslint-env node*/
/*eslint no-var:0*/
var path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');

var staticPrefix = './webapp',
    distPath = path.join(__dirname, staticPrefix, './dist');

if (process.env.WEB_STATIC_DIST_PATH) {
    distPath = process.env.WEB_STATIC_DIST_PATH;
}

// Production optimization (react minified dist size reduces)
var isProd = false;
if (process.argv.indexOf('-p') > -1 || process.argv.indexOf('--production') > -1) {
    console.log("Build: Production mode");
    isProd = true;
}

var babelQuery = {
    plugins: [],
    extra: {}
};

//const sassLoaders = [
//    'css-loader',
//    'postcss-loader',
//    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
//]

var extractTextCSS = new ExtractTextPlugin('stylesheets/[name].css');
var extractTextLESS = new ExtractTextPlugin('stylesheets/[name].less');


var entry = {
    // js
    'app': 'app',
    'vendor': [
        'babel-core/polyfill',
        'bootstrap/js/dropdown',
        'classnames',
        'jquery',
        'lodash',
        'moment',
        'moment-timezone',
        'react-document-title',
        'react-router',
        'reflux',
        'react-fontawesome'
    ],

    // css
    // NOTE: this will also create an empty 'theme.js' file
    // TODO: figure out how to not generate this
    'theme': 'less/theme.less'
};


var config = {
    entry: entry,
    context: path.join(__dirname, staticPrefix),
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, staticPrefix),
                exclude: /(vendor|node_modules)/,
                query: babelQuery
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less$/,
                include: path.join(__dirname, staticPrefix),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, staticPrefix),
                loader: extractTextCSS.extract("style-loader", "css-loader")
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|gif|ico|jpg)($|\?)/,
                loader: 'file-loader?name=' + '[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // ignore moment.js locale files
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    resolve: {
        alias: {
            // map to custom libs in vendor that lib does not follow commonjs/require standards
        },
        modulesDirectories: [path.join(__dirname, staticPrefix), 'node_modules'],
        extensions: ['', '.jsx', '.js', '.json']
    },
    output: {
        path: distPath,
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'exports',
        sourceMapFilename: '[name].js.map',
    }
};

if (isProd) {
    var definePlugin = new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify("production")
    });
} else {
    var definePlugin = new webpack.DefinePlugin({
        'process.env': {
            __DEV__: JSON.stringify(JSON.parse('true'))
        }
    });
}

config.devServer = {
    contentBase:'./webapp/dist',
    stats: 'minimal'
  };

config.plugins.push(definePlugin)

module.exports = config;
