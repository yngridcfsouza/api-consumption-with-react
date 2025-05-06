import { FavoritesListContainer, FavoritesContainer } from "./styles";

import trash from "../../assets/images/icons/trash.svg";

import toast from "../../utils/toast";

export default function FavoritesList({ favorites, setFavorites }) {
  function handleRemoveFavorite(favorite) {
    const updated = favorites.filter((name) => name !== favorite);
    setFavorites(updated);
    toast({
      type: 'default',
      text: 'Favorito removido!'
    })
  }
  return(
    <FavoritesListContainer>
      {favorites.length === 0 ? (
        <strong>Ainda não possui favoritos!</strong>
      ) : (
      <>
         <h1>Meus Pokémon favoritos</h1>

        <FavoritesContainer>
          {favorites.map((favorite) => (
            <span key={favorite}>
              {favorite.toUpperCase()}
              <button
                onClick={() => handleRemoveFavorite(favorite)}
              >
                <img src={trash} alt="Delete"/>
              </button>
            </span>
          ))}
        </FavoritesContainer>
      </>
      )}
    </FavoritesListContainer>
  );
}
