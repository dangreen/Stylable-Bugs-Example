import React, {
	Component,
	cloneElement
} from 'react';
import {
	style,
	classes
} from './Block.st.css';

export default class Block extends Component<any> {

	render() {

		const {
			className,
			decoration,
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={style(classes.root, className)}
			>
				{cloneElement(decoration, {
					className: style(classes.decoration, decoration.props.className)
				})}
				{children}
			</div>
		);
	}
}
