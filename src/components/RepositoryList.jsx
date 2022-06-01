import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then(response => response.json())
			.then(data => setRepositories(data));
	}, []);

	return (
		<section className="repository-list">
			<h1>Repository list</h1>
			<br />
			<ul>
				{repositories.map(repository => {
					return <RepositoryItem key={repository.id} repository={repository} />;
				})}
			</ul>
			<br />
		</section>
	);
}
