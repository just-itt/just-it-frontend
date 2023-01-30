import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Header = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 0 28px;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.header};
  `}
`;

export const Title = styled.div`
  font-size: 2rem;
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding-left: 20px;
    width: 700px;
    height: 52px;
    border-radius: 100px;
    background-color: ${theme.color.grey_200};
  `}
`;

export const Search = styled.input`
  width: 624px;
  height: 24px;
  background-color: inherit;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CreatePheed = styled(Link)`
  ${({ theme }) => css`
    ${theme.font.semiBold_16};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 121px;
    height: 44px;
    border-radius: 100px;
    margin-right: 24px;
    background-color: ${theme.color.blue_200};
    color: white;
  `}
`;
