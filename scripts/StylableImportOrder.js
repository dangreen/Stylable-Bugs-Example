import {
	StylableWebpackPlugin
} from '@stylable/webpack-plugin';

export default class StylableImportOrder {

	constructor() {
		this.importOrder = 0;
	}

	apply(compiler) {
		compiler.hooks.compilation.tap(StylableWebpackPlugin.name, (compilation) => {
			compilation.hooks.optimizeModules.tap(StylableWebpackPlugin.name, (modules) => {
				console.log(Array.from(modules).map(_ => _.resource).filter(_ => /\.st\.css/.test(_)));
				modules.forEach((module) => {
					if (module.type === 'stylable') {
						module.buildInfo.runtimeInfo.depth = this.importOrder++;
					}
				});
			});
		});
	}

}
