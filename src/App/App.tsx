import React, {
	Component
} from 'react';
import {
	hot
} from 'react-hot-loader';
import '@flexis/ui/reboot.st.css';
import Header from './Header';
import A from '~/containers/A/loadable';
import B from '~/containers/B/loadable';
import Link from '~/components/Link';
import Block from '~/components/Block';

@hot(module)
export default class App extends Component {

	render() {
		return (
			<>
				<Header/>
				<Block
					decoration={
						<Link>
							Dynamic decoration with unknown type<br/>
							Should have aqua color, but is red.
						</Link>
					}
				>
					<A/>
					<B/>
				</Block>
			</>
		);
	}
}
