import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";


const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPokemons = async () => {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            const pokemonData = await Promise.all(result.data.results.map(async pokemon => {
                const pokemonRecord = await axios.get(pokemon.url);
                return pokemonRecord.data;
            }));
            setPokemons(pokemonData);
        };
        fetchPokemons();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Pokémon Search</h1>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full p-2 mb-8 border rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};
export default PokemonContainer;