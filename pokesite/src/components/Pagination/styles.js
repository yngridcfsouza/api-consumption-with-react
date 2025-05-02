import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  button {
    color: ${({ theme }) => theme.colors.font.body};

    padding: 8px;
    background-color: ${({ theme }) => theme.colors.button.main};
    border: 2px solid ${({ theme }) => theme.colors.button.border};
    border-radius: 4px;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button.hover};
      border-color: ${({ theme }) => theme.colors.button.hover};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray[200]};
      cursor: not-allowed;
    }
  }
`;
