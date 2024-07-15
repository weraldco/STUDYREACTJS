import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import ProductRoutes from './pages/ProductRoutes';

export default function Demo() {
	const location = useLocation();
	return (
		<>
			<div>
				<nav>
					<ul>
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
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/product/*" element={<ProductRoutes />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}
