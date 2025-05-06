import styled, { css } from "styled-components";

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.toasts.default};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.toasts.success};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.toasts.danger};
  `,
}

export const Container = styled.div`
  padding: 16px 32px;
  color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
