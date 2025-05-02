import { useEffect, useState } from 'react';

import PokemonService from '../../services/PokemonService';

import {
  MainSectionContainer,
  PokemonListContainer,
  CardsContainer,
  PokemonDetailsContainer,
  DetailsContainer,
} from "./styles";

import FavoritesList from "../FavoritesList";
import Pagination from '../Pagination';

export default function MainSection({ specificPokemon }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);

  const limit = 10;
  const offset = page * limit;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const pokemonData = await PokemonService.listPokemon({ offset, limit });
        setPokemonList(pokemonData.results);
        setHasNextPage(!!pokemonData.next);
      } catch (error) {
        console.error('Erro ao carregar dados', error);
      }
    }
    loadPokemon();
  }, [page]);

  useEffect(() => {
    const pokemonToFetch = specificPokemon || selectedPokemon;
    if(!pokemonToFetch) return;

    async function loadPokemonDetails() {
      try {
        const pokemonData = await PokemonService.getPokemonByName(pokemonToFetch);
        setPokemonDetails(pokemonData);
      } catch (error) {
        console.error('Erro ao carregar dados', error);
      }
    }
    loadPokemonDetails();
  }, [specificPokemon, selectedPokemon]);

  function handleChangePage(newPage) {
    if (newPage >= 0) {
      setPage(newPage);
    }
  }

  return(
    <MainSectionContainer>

      <PokemonDetailsContainer>
        {!pokemonDetails && (
          <p>Selecione seu <strong>Pokémon</strong> na lista abaixo ou procure direto no campo acima, e ele irá aparecer aqui!</p>
        )}

        {pokemonDetails && (
          <DetailsContainer>
            <strong>{pokemonDetails.name.toUpperCase()}</strong>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
            <p>Altura: {pokemonDetails.height}</p>
            <p>HP: {pokemonDetails.stats?.find(stat => stat.stat.name === 'hp').base_stat}</p>
            <p>Ataque: {pokemonDetails.stats?.find(stat => stat.stat.name === 'attack').base_stat}</p>
            <p>Defesa: {pokemonDetails.stats?.find(stat => stat.stat.name === 'defense').base_stat}</p>
          </DetailsContainer>
        )}

      </PokemonDetailsContainer>

      <PokemonListContainer>

        <h1>Lista de Pokémon</h1>

        <CardsContainer>
          {pokemonList.map((pokemon) => (
            <button
              type='button'
              key={pokemon.name}
              onClick={() => setSelectedPokemon(pokemon.name)}
            >
              {pokemon.name}
            </button>
          ))}
        </CardsContainer>

        <Pagination
          currentPage={page}
          onPageChange={handleChangePage}
          hasNext={hasNextPage}
        />
      </PokemonListContainer>

      <FavoritesList />
    </MainSectionContainer>

  );
}
