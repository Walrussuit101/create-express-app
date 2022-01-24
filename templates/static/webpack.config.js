const path = require('path');

module.exports = {
	entry: path.join(__dirname, "src", "client", "client.ts"),
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "src", "client", "dist")
	}
}