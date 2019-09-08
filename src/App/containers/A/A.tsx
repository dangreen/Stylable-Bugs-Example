import React, {
	Component
} from 'react';
import Contacts from '~/components/Contacts';

export default class A extends Component {

	render() {
		return (
			<Contacts
				items={[
					'1',
					'2'
				]}
			/>
		);
	}
}
