import { Route, Routes } from 'react-router-dom';
import NewProducts from './NewProducts';
import Product from './Product';
import ProductList from './ProductList';
import ProductNav from './ProductNav';
export default function ProductRoutes() {
	return (
		<>
			<Routes>
				<Route element={<ProductNav />}>
					<Route index element={<ProductList />} />
					<Route path=":id" element={<Product />} />
					<Route path="new" element={<NewProducts />} />
				</Route>
			</Routes>
		</>
	);
}
