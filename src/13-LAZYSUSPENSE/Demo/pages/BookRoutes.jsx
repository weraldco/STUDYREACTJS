import { Route, Routes } from 'react-router-dom';

import BookLayout from './BookLayout';
import Books from './Books';
import BooksList from './BooksList';
import NewBook from './NewBook';

export default function BooksRoute() {
	return (
		<>
			<Routes>
				<Route element={<BookLayout />}>
					<Route index element={<BooksList />} />
					<Route path=":id" element={<Books />} />
					<Route path="new" element={<NewBook />} />
				</Route>
			</Routes>
		</>
	);
}
