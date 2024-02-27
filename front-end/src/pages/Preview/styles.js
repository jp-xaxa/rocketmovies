import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "content";
`

export const Nav = styled.nav`
  grid-area: "nav";

  margin: 40px 123px 0;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
  }
`

export const Content = styled.div`
  grid-area: "content";

  margin: 0 123px 85px;
  padding-right: 16px;

  > section {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 24px;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      > p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      > svg {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 40px 0;
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
  }

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 6px;
  }
`
