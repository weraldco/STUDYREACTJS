import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom';
import BooksRoute from './pages/BookRoutes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
export default function Demo() {
	// let element = useRoutes([
	// 	{ path: '/', element: <Home /> },
	// 	{ path: '*', element: <NotFound /> },
	// ]);
	return (
		<>
			<div>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink end to="/books">
								Books
							</NavLink>
						</li>
					</ul>
				</nav>
				{/* {element} */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books/*" element={<BooksRoute />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}
