import React, {
	Component
} from 'react';
import ContactLink from '../ContactLink';
import {
	style,
	classes
} from './Contacts.st.css';

export interface IProps {
	className?: string;
	items: string[];
}

export default class Contacts extends Component<IProps> {

	render() {

		const {
			className,
			items,
			...props
		} = this.props;

		return (
			<ul
				{...props}
				className={style(classes.root, className)}
			>
				<li>
					<h3>
						Contacts:
					</h3>
				</li>
				{items.map((item, i) => (
					<li key={i}>
						<ContactLink
							className={classes.contactLink}
						>
							{item}
						</ContactLink>
					</li>
				))}
			</ul>
		);
	}
}
