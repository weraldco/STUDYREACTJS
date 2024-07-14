import useFetchData from './useFetchData';
import useLocalStore from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
export default function Demo() {
	// const [name, setName] = useLocalStore('test', '');
	// useUpdateLogger(name);
	const data = useFetchData('https://api.quotable.io/random');
	console.log(data);
	return (
		<>
			<p>{data.content}</p>
			<p>-{data.author}</p>
		</>
	);
}
