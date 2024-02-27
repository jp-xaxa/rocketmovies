import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "subheader"
    "content";
`

export const New = styled(Link)`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right: 10px;
  }
`

export const Subheader = styled.div`
  grid-area: "subheader";

  margin: 50px 123px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 730px;

  > h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
  }
`

export const Section = styled.section`
  grid-area: "content";
  margin: 36px 123px;
  padding-right: 8px;

  display: flex;
  flex-direction: column;
  gap: 24px;
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
