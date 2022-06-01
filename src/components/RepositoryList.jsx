import { RepositoryItem } from './RepositoryItem';

const repository = {
	name: 'Repository name',
	description: 'Repository description',
	link: 'https://github.com/angular/angular',
};

export function RepositoryList() {
	return (
		<section className="repository-list">
			<h1>Repository list</h1>
			<br />
			<ul>
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
			</ul>
			<br />
		</section>
	);
}
