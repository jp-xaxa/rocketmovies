import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.PINK};
`
