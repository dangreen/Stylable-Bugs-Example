import React, {
	Component
} from 'react';
import Link from '../Link';
import {
	style,
	classes
} from './ContactLink.st.css';

export default class ContactLink extends Component<any> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<Link
				{...props}
				className={style(classes.root, className)}
				target='_blank'
			>
				Contact: {children}
			</Link>
		);
	}
}
