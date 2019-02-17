var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: "./src/widgets.jsx",
	module: {
		rules: [{
			test: [/\.jsx?$/],
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				query: {
					presets: ['@babel/env', '@babel/react']
				}
			},
		}]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	},
	plugins: [
		new LiveReloadPlugin()
	]
};