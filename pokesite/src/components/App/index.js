import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container, FooterContainer } from "./styles";

import SearchBar from "../SearchBar";
import MainSection from '../MainSection';

import ToastContainer from "../Toast/ToastContainer";

function App() {
  const [specificPokemon, setSpecificPokemon] = useState('');

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <ToastContainer />
        <SearchBar
          setSpecificPokemon={setSpecificPokemon}
        />
        <MainSection
          specificPokemon={specificPokemon}
          setSpecificPokemon={setSpecificPokemon}
        />
        <FooterContainer>
          <p>Desenvolvido por Yngrid F. S.</p>
        </FooterContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
