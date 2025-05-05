import styled from "styled-components";

export const FavoritesListContainer = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FavoritesContainer = styled.div`
  padding: 16px;

  span {
    padding: 4px 8px;
    border-radius: 12px;
    margin-right: 8px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    button {
      margin-left: 8px;
      background: transparent;
      border: none;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
