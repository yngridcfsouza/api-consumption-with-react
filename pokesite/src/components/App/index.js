import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container, FooterContainer } from "./styles";

import SearchBar from "../SearchBar";
import MainSection from '../MainSection';

function App() {
  const [specificPokemon, setSpecificPokemon] = useState(null);

  // Usando a callback do searchTerm da SearchBar para mandar para o MainSection
  function handleSearchSpecificPokemon(name) {
    setSpecificPokemon(name);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <SearchBar onSelectPokemon={handleSearchSpecificPokemon}/>
        <MainSection specificPokemon={specificPokemon}/>
        <FooterContainer>
          <p>Desenvolvido por Yngrid F. S.</p>
        </FooterContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
