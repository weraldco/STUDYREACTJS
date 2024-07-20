import { lazy } from 'react';
export function lazyLoad(path, nameExport) {
	return lazy(() => {
		const promisePath = import(path);
		if (nameExport == 'null') {
			return promisePath;
		} else {
			return promisePath.then((module) => ({ default: module[nameExport] }));
		}
	});
}

// lazyLoad('../page/About', 'About');

// const Home = lazy(() => import('./pages/Home'));

// const About = lazy(() =>
// 	import('./pages/About').them((module) => {
// 		return { default: module.About };
// 	})
// );
