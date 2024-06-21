

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-32 object-contain mb-4" />
      <h3 className="text-xl font-bold text-center capitalize">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
