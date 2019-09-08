import React, {
	Component
} from 'react';
import {
	style,
	classes
} from './Link.st.css';

export default class Link extends Component<any> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<a
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</a>
		);
	}
}
