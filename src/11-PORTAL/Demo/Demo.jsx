import { useState } from 'react';
import Modal from './Modal';
export default function Demo() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="relative z-10">
				<button className="btn-open" onClick={() => setIsOpen(true)}>
					Open modal
				</button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					This is your modal
				</Modal>
				<div className="relative z-10 bg-red-400 p-5">Other Content</div>
			</div>
		</>
	);
}
