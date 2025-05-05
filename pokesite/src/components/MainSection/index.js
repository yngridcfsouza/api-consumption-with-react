import { useEffect, useState, useMemo } from 'react';

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

import Spinner from '../Spinner';

export default function MainSection({ specificPokemon, setSpecificPokemon }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [allPokemonNames, setAllPokemonNames] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return (
      savedFavorites ?
      JSON.parse(savedFavorites) :
      []
    );
  });

  const [isLoading, setIsLoading] = useState(false);

  const limit = 10;
  const offset = page * limit;

  const filteredPokemon = useMemo(() => {
    if (!specificPokemon) return null;

    const filteredList = allPokemonNames.filter((pokemon) => (
      pokemon.name.toLowerCase().includes(specificPokemon.toLowerCase()))
    );

    if (filteredList.length > 0) {
      return filteredList[0].name;
    } else {
      return null;
    }
  }, [allPokemonNames, specificPokemon]);

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
  }, [offset, page]);

  useEffect(() => {
    async function loadAllPokemonNames() {
      try {
        const pokemonData = await PokemonService.listPokemon({ offset: 0, limit: 1400 });
        setAllPokemonNames(pokemonData.results);
      } catch (error) {
        console.error("Erro ao carregar todos os nomes", error);
      }
    }

    loadAllPokemonNames();
  }, []);

  useEffect(() => {
    const pokemonToFetch = (filteredPokemon || selectedPokemon);
    if(!pokemonToFetch) return;

    async function loadPokemonDetails() {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const pokemonData = await PokemonService.getPokemonByName(pokemonToFetch.toLowerCase());
        setPokemonDetails(pokemonData);
      } catch (error) {
        console.error('Erro ao carregar dados', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPokemonDetails();
  }, [filteredPokemon, selectedPokemon, specificPokemon]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleChangePage(newPage) {
    if (newPage >= 0) {
      setPage(newPage);
    }
  }

  function handleFavoritesButtonClick() {
    if (!favorites.includes(pokemonDetails.name)) {
      setFavorites((prevState) => [
        ...prevState,
        pokemonDetails.name
      ]);
    } else {
      return console.log('Este pokemon já está em favoritos!');
    }
  }

  return(
    <MainSectionContainer>

      <PokemonDetailsContainer>

        {isLoading ? (
          <Spinner size={32} />
        ) : pokemonDetails ? (
          <>
            <DetailsContainer>
              <strong>{pokemonDetails.name.toUpperCase()}</strong>
              <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
              <p>Altura: {pokemonDetails.height}</p>
              <p>HP: {pokemonDetails.stats?.find(stat => stat.stat.name === 'hp').base_stat}</p>
              <p>Ataque: {pokemonDetails.stats?.find(stat => stat.stat.name === 'attack').base_stat}</p>
              <p>Defesa: {pokemonDetails.stats?.find(stat => stat.stat.name === 'defense').base_stat}</p>
            </DetailsContainer>

            <button type='button' onClick={handleFavoritesButtonClick}>
              Favoritar
            </button>
          </>
        ) : (
          <p>
            Selecione seu <strong>Pokémon</strong> na lista abaixo ou procure direto no campo acima, e ele irá aparecer aqui!
          </p>
        )}

      </PokemonDetailsContainer>

      <PokemonListContainer>

        <h1>Lista de Pokémon</h1>

        <CardsContainer>
          {pokemonList.map((pokemon) => (
            <button
              type='button'
              key={pokemon.name}
              onClick={() => {
                setSelectedPokemon(pokemon.name)
                setSpecificPokemon('');
              }}
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

      <FavoritesList
        favorites={favorites}
        setFavorites={setFavorites}
      />

    </MainSectionContainer>

  );
}
