import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
  border: none;
  border-radius: 16px;

  padding: 32px;

  cursor: pointer;

  > h1 {
    margin-bottom: 8px;

    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;

    margin: 15px 0;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`
