import PropTypes from 'prop-types';
export default function PokemonDetails({ data, show }) {
	if (show == false) return;
	return (
		<>
			<div className="pokemon-details">
				<div className="name">
					<h3>{data.name}</h3>
					<label htmlFor="">id: </label>
					<span>{data.id}</span> <br />
					<span></span>
					{/* <label htmlFor="">Type: </label>{' '}
					<span>{data.types[0].type.name}</span>
					<br />*/}
					<label htmlFor="">Height: </label> <span>{data.height}</span>
					<br />
					<label htmlFor="">Weight: </label> <span>{data.weight}</span>
					<br />
					<label htmlFor="">Abilities: </label>
					{/* {data.abilities.map((ability) => console.log(ability))} */}
				</div>
			</div>
		</>
	);
}

PokemonDetails.propTypes = {
	data: PropTypes.object,
	show: PropTypes.bool,
};
