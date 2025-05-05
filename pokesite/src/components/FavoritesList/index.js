import { FavoritesListContainer, FavoritesContainer } from "./styles";

import trash from "../../assets/images/trash.svg";

export default function FavoritesList({ favorites, setFavorites }) {
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
                onClick={() => {
                  const updated = favorites.filter((name) => name !== favorite);
                  setFavorites(updated);
                }}
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
