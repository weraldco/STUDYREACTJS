export function formatNum(num) {
	num = Math.round(num).toFixed(2);
	return '$ ' + num.toString().replace(/\B(?=(\d\d\d)+(?!\d))/g, ',');
}

export function formatDate(d, type) {
	const date = new Date(d);
	const formatD = { year: 'numeric', month: 'short', day: 'numeric' };
	const formatT = { hour: '2-digit', minute: '2-digit' };
	return type === 'date'
		? date.toLocaleDateString('en-EN', formatD)
		: date.toLocaleTimeString('en-EN', formatT);
}

export const dateToday = new Date().toLocaleDateString('en-EN', {
	month: 'long',
	year: 'numeric',
});

export const dateNow = new Date().toLocaleString('en-En', {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
});
