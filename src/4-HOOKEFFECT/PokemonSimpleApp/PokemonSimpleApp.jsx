import { useEffect, useRef, useState } from 'react';
import PokemonDetails from './PokemonDetails';
export default function PokemonSimpleApp() {
	const [pokemonData, setPokemonData] = useState({});
	console.log(pokemonData);
	const [getPokemon, setGetPokemon] = useState(false);
	const pokemonName = useRef('');

	useEffect(() => {
		if (getPokemon && pokemonName) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.current}`)
				.then((response) => response.json())
				.then((data) => setPokemonData(data))
				.catch((err) => {
					console.log('Caught an error', err);
				});
		}
	}, [getPokemon]);

	return (
		<>
			<div className="pokemon-main">
				<input
					type="text"
					ref={pokemonName}
					onChange={() => {}}
					placeholder="Enter pokemon name"
				/>{' '}
				<button
					onClick={() => {
						if (pokemonName.current.value == '') return;
						setGetPokemon(true);
						pokemonName.current = pokemonName.current.value;
					}}
				>
					Get pokemon
				</button>
				<PokemonDetails data={pokemonData} show={getPokemon} />
			</div>
		</>
	);
}
