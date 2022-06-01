export function RepositoryItem({ repository }) {
	return (
		<li>
			<strong>{ repository.name }</strong>
			<p>{ repository.description }</p>

			<a href={ repository.link } target="_blank" rel="noopener noreferrer">
				Access repository
			</a>
		</li>
	);
}
