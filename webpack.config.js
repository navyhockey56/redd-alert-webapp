const webpackMerge = require('webpack-merge');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.mode || 'none';

const environmentWebpack = () => {
  try {
    return require(`./webpack-extensions/webpack.${mode}.js`);
  } catch {
    console.error("Failed to load webpack extension file");
    return {};
  }
}

module.exports = () => {
	console.log(`Webpack is building in mode ${mode}`);

	return webpackMerge.merge(
		{
			mode,
			module: {
				rules: [
					{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
          },
					{
						test: /\.html$/,
						use: 'html-loader'
					},
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader']
					}
				]
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: './src/index.html'
				}),
				new ProgressPlugin()
			]
		},
		environmentWebpack()
	);
}
