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

  > div {
    display: flex;
    align-items: center;
    gap: 6px;

    margin-bottom: 15px;

    > svg {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;

    margin-bottom: 15px;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`
