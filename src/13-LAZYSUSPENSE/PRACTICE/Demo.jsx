import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home';
import { lazy, Suspense } from 'react';
import NotFound from './pages/NotFound';
// import ProductRoutes from './pages/ProductRoutes';

// Lazy home page cannot be show up until you click home nav button, I put a 1sec delay to show delay the home page.
const Home = lazy(() => wait(1000).then(() => import('./pages/Home')));
const ProductRoutes = lazy(() =>
	wait(1000).then(() => import('./pages/ProductRoutes'))
);
const About = lazy(() =>
	import('./pages/About').then((module) => {
		return { default: module.About };
	})
);

export default function Demo() {
	const location = useLocation();
	return (
		<>
			<div>
				<nav>
					<ul className="list-none text-3xl font-bold flex gap-4">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/product">Product</NavLink>
						</li>
					</ul>
				</nav>
				{location.state}
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<h1>Loading..</h1>}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<Suspense fallback={<h1>Loading..</h1>}>
								<About />
							</Suspense>
						}
					/>
					<Route
						path="/product/*"
						element={
							<Suspense fallback={<h1>Loading..</h1>}>
								<ProductRoutes />
							</Suspense>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}

function wait(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}
