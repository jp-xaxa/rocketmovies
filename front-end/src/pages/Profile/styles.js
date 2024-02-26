import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};

    display: flex;
    align-items: center;

    padding: 0 124px;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
    }
  }
`

export const Form = styled.form`
  width: 340px;
  margin: -93px auto 93px;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: 0 auto 64px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 4px;
    right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;

    > svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > input {
      display: none;
    }
  }
`
