import styled from "styled-components";

export const FavoritesListContainer = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  text-align: center;

/*   #pokemon-lista li:hover {
      transform: scale(1.05); */
`;

export const FavoritesContainer = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
