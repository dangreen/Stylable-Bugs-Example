
// export function dev(config) {
// 	return {
// 		...config,
// 		plugins: config.plugins.filter(_ => _.constructor.name !== 'StylableWebpackPlugin'),
// 		module: {
// 			...config.module,
// 			rules: [
// 				...config.module.rules,
// 				{
// 					test: /\.css$/i,
// 					use:  ['style-loader', 'css-loader']
// 				}
// 			]
// 		}
// 	};
// }

export function build(config) {
	return {
		...config,
		optimization: {
			...config.optimization,
			minimize: false
		}
	};
}
