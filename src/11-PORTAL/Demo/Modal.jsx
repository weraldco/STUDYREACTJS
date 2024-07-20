import ReactDOM from 'react-dom';
export default function Modal({ open, children, onClose }) {
	if (!open) return null;
	return ReactDOM.createPortal(
		<>
			<div className="modal-bg"></div>
			<div className="modal">
				{children}
				<button onClick={onClose} className="btn-close">
					Close
				</button>
			</div>
		</>,
		document.getElementById('portal')
	);
}
