import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Header = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${theme.constantCss.navHeight};
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 0 20px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.header};
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 104px;
  height: 52px;
`;

export const MenuBtn = styled.button`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    margin-right: 20px;

    svg {
      width: 20px;
      height: 20px;
      fill: ${theme.color.grey_500};
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      display: none;
    }
  `}
`;

export const FlexWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 20px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      column-gap: 16px;
    }
  `}
`;

export const SearchBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;

    svg {
      width: 28px;
      height: 28px;
      fill: ${theme.color.grey_500};
    }
  `}
`;

export const createPheedBtn = (theme: Theme) => css`
  width: 28px;
  height: 28px;

  svg {
    width: 28px;
    height: 28px;
    fill: ${theme.color.grey_500};
  }
`;

export const loginBtn = (theme: Theme) => css`
  ${theme.font.medium_15};
  padding: 6px 18px;
  border-radius: 100px;
  color: ${theme.color.white};
  background-color: ${theme.color.blue_300};

  @media (min-width: ${theme.breakPoint.minDesktop}) {
    padding: 8px 20px;
  }
`;

export const SearchWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 40px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    padding: 0 48px 0 12px;
    background-color: ${theme.color.grey_100};

    &:focus-within {
      border: 1px solid ${theme.color.blue_300};

      svg {
        fill: ${theme.color.blue_300};
      }
    }

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.color.grey_500};
    }

    @media (min-width: ${theme.breakPoint.minTablet}) {
      column-gap: 12px;
      width: 300px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      column-gap: 8px;
      width: 380px;
    }
  `}
`;

export const Search = styled.input`
  ${({ theme }) => css`
    width: 302px;
    height: 24px;
    background-color: inherit;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      width: 184px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      width: 324px;
    }
  `}
`;

export const createPheed = (theme: Theme) => css`
  ${theme.font.medium_15};
  ${theme.flexMixin.flex_justifyC_alignC};
  width: 112px;
  height: 40px;
  border-radius: 100px;
  background-color: ${theme.color.blue_300};
  color: ${theme.color.white};
`;
