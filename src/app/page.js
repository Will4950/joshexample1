'use client';
import {useEffect, useState} from 'react';

export default function Page() {
	const [currentMembers, setCurrentMembers] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getMembers = async () => {
			setLoading(true);
			const res = await fetch('/api/list-cc-members', {cache: 'no-store'});
			const json = await res.json();
			if (!currentMembers) setCurrentMembers(json);
			console.log(json);
		};

		if (!loading) getMembers();
	}, []);

	return (
		<main>
			<ul>
				{currentMembers ? (
					currentMembers.members?.map((member) => (
						<li key={member}>{member}</li>
					))
				) : (
					<li>loading...</li>
				)}
			</ul>
		</main>
	);
}
