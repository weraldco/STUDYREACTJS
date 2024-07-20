import { lazy, Suspense, useState, useTransition } from 'react';
// import AdminData from './AdminData.jsx';
const AdminData = lazy(() => wait(1000).then(() => import('./AdminData.jsx')));
export default function Home() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isPending, startTransition] = useTransition();
	// console.log(isAdmin);
	return (
		<>
			<h1 className="header">Home</h1>
			<button
				onClick={() => {
					{
						import('../sum.js').then((module) => {
							alert(module.sum(2, 2));
						});
					}
				}}
				className="btn-demo"
			>
				Add 2 + 2
			</button>
			<br />
			<button
				onClick={() => {
					startTransition(() => {
						setIsAdmin((prev) => !prev);
					});
				}}
				className="btn-demo bg-orange-400"
			>
				Toggle Admin
			</button>
			{isPending && 'Loading..'}
			<Suspense fallback={<h2>Loading..</h2>}>
				<p>{isAdmin ? <AdminData /> : 'Not admin'}</p>
			</Suspense>
		</>
	);
}

function wait(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}
