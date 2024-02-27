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

  margin: 24px 123px 85px;
  padding-right: 16px;

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

export const Form = styled.form`
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`

export const Section = styled.section`
  > h1 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 24px;
  }

  .tags {
    width: 100%;
    padding: 16px;

    display: flex;
    align-items: center;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    border-radius: 10px;
  }
`

export const ButtonDelete = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`
