import styled from "styled-components"

export const Container = styled.header`
  grid-area: "header";

  width: 100%;
  height: 116px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  > div {
    display: flex;
    flex-direction: column;

    > a:nth-child(1) {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
      margin-bottom: 8px;
    }

    > a:nth-child(2) {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      text-align: right;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`
