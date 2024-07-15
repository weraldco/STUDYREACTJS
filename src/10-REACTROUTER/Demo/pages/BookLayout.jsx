import { Link, Outlet, useSearchParams } from 'react-router-dom';
export default function BookLayout() {
	const [search, setSearch] = useSearchParams({ n: 3 });
	console.log(search.get('n'));
	const number = search.get('n');
	return (
		<>
			<nav>
				<Link to="/books/1">Books 1</Link>
				<br />

				<Link to="/books/2">Books 2</Link>
				<br />
				<Link to={`/books/${number}`}>Books {number}</Link>
				<br />

				<Link to="/books/new">New Books</Link>
			</nav>
			<Outlet context={{ msg: 'Hello World' }} />
			<input
				type="number"
				value={number}
				onChange={(e) => {
					setSearch({ n: e.target.value });
				}}
			/>
		</>
	);
}
