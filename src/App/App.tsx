import React, {
	Component
} from 'react';
import {
	hot
} from 'react-hot-loader';
import '@flexis/ui/reboot.st.css';
import Header from './Header';
import A from '~/containers/A/A';
import B from '~/containers/B/loadable';

@hot(module)
export default class App extends Component {

	render() {
		return (
			<>
				<Header/>
				<A/>
				<B/>
			</>
		);
	}
}
