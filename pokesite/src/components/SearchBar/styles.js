import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  height: 110px;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    transform: scale(0.8);
  }
`;

export const SearchContainer = styled.div`
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 48px;
    width: 96px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.button.main};
    border: 2px solid ${({ theme }) => theme.colors.button.border};
    border-radius: 4px;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button.hover};
      border-color: ${({ theme }) => theme.colors.button.hover};
    }
  }
`;
