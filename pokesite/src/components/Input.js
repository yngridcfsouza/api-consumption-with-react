import styled from "styled-components";

export const Input = styled.input`
  width: 250px;
  height: 48px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border: 2px solid ${({ theme }) => theme.colors.button.border};
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  transition: border-color 0.3s;
  margin-right: 8px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.button.hover};
    outline: none;
  }
`;
