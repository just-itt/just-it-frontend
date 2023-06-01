import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: scroll;
`;

export const margin = (theme: Theme) => css`
  margin-bottom: 32px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    max-width: 520px;
  }
`;

export const textArea = (theme: Theme) => css`
  @media (min-width: ${theme.breakPoint.minTablet}) {
    height: 300px;
  }
`;

export const FilterWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;

  li {
    list-style: none;
  }
`;

export const FilterItem = styled.button<{ isSelect: boolean }>`
  ${({ theme, isSelect }) => css`
    flex-grow: 1;
    height: 40px;
    border: 1px solid ${isSelect ? theme.color.blue_300 : theme.color.grey_300};
    border-radius: 100px;
    padding: 8px 20px;
    color: ${isSelect ? theme.color.blue_300 : theme.color.grey_700};
    background-color: ${isSelect ? theme.color.blue_100 : theme.color.grey_100};

    :hover {
      background-color: ${theme.color.grey_200};
    }
  `}
`;
