import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;
  border: none;
  resize: none;
  padding: 12px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
