import { useState } from "react";

import { Container, SearchContainer } from "./styles";
import { Input } from "../Input";

import pikachu from '../../assets/images/pikachu-img-sem-fundo.png';

export default function SearchBar({ onSelectPokemon }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChangeSearchTerm() {
    if (searchTerm.trim()) {
      onSelectPokemon(searchTerm.toLowerCase());
    }
  }

  return (
    <Container>
      <img src={pikachu} alt="Pikachu"/>
      <SearchContainer>
        <Input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Busque seu Pokémon"
        />
        <button
          type="submit"
          onClick={handleChangeSearchTerm}
        >Buscar</button>
      </SearchContainer>
    </Container>
  );
}
