const babelConfig = require('./babel-app.config');

module.exports.getPreLoaders = () => {
	return [
		{
			enforce: 'pre',
			test: /\.js$/,
			use: 'source-map-loader',
		},
		{
			enforce: 'pre',
			test: /\.ts$/,
			exclude: /node_modules/,
			use: 'tslint-loader',
		},
	];
};

module.exports.getTypeScriptLoader = (include, tsconfig, transpileOnly = false) => {
	return {
		test: /\.(js|ts)$/,
		include: include,
		exclude: [/node_modules/],
		use: [
			{
				loader: 'awesome-typescript-loader',
				options: {
					transpileOnly,
					configFileName: tsconfig,
					useBabel: true,
					babelCore: '@babel/core',
					babelOptions: {
						babelrc: false /* Important line */,
						...babelConfig,
					},
				},
			},
		],
	};
};

module.exports.getLibLoader = () => {
	return {
		test: /\.js$/,
		include: [new RegExp(`tree-shakeable-lib/dist/index.es5.js`)],
		use: [
			{
				loader: 'babel-loader',
				options: {
					...babelConfig,
				},
			},
		],
	};
};
