import React from 'react';
import Link from '~/components/Link';
import ContactLink from '~/components/ContactLink';

export default function Header() {
	return (
		<>
			<Link>
				Link
			</Link>{' '}
			<ContactLink>
				Dan Green
			</ContactLink>
		</>
	);
}
