import HttpClient from './utils/HttpClient';

class PokemonService {
  constructor() {
    this.httpClient = new HttpClient('https://pokeapi.co/api/v2');
  }

  async listPokemon({ limit, offset }) {
    return (
      this.httpClient.get(`/pokemon?limit=${limit}&offset=${offset}`)
    );
  }

  async getPokemonByName(name) {
    if (!name) {
      return console.error('400 - Bad request');
    }

    return(
      this.httpClient.get(`/pokemon/${name.toLowerCase()}`)
    );
  }
}

// eslint-disable-next-line
export default new PokemonService();
