// tslint:disable space-in-parens
import loadable from '@loadable/component';

export default loadable(
	() => import(/* webpackChunkName: 'b' */ './B')
);
