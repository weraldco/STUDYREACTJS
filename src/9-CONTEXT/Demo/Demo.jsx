import { createContext, useState } from 'react';
import LevelOne from './LevelOne';
export const NameContext = createContext();
export default function Demo() {
	let name = 'Werald';
	return (
		<>
			<NameContext.Provider value={name}>
				<LevelOne />
			</NameContext.Provider>
		</>
	);
}
