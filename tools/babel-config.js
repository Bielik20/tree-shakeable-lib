module.exports = {
	// presets: [
	// 	[
	// 		'@babel/preset-env',
	// 		{
	// 			targets: {
	// 				browsers: ['last 2 versions', 'safari >= 9.0', 'ie 11', '> 2%'],
	// 			},
	// 			modules: false,
  //       // useBuiltIns: 'usage',
	// 		},
	// 	],
	// ],

	plugins: [
		[
			'@babel/plugin-transform-runtime',
			{
				helpers: false,
				corejs: 3,
				regenerator: false,
			},
		],
		'lodash',
	],
};
