import styled from "styled-components";

export const MainSectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 16px auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 48px;
  margin-bottom: 32px;
`;

export const PokemonListContainer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;

  h1 {
    margin-bottom: 16px;
    font-size: 24px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style: none;

  button {
    min-width: 200px;
    min-height: 100%;
    padding: 16px;
    background: ${({ theme }) => theme.colors.header};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const PokemonDetailsContainer = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  p {
    text-align: center;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    padding: 16px;
    transform: scale(1.5);
  }
`;
