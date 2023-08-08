import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const PositionWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 32px;
`;

export const NoCommentWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    text-align: center;
    color: ${theme.color.grey_500};
  `}
`;

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr 60px;
  column-gap: 16px;
`;

export const profile = (theme: Theme) => css`
  width: 40px;
  height: 40px;

  @media (min-width: ${theme.breakPoint.minTablet}) {
    width: 44px;
    height: 44px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 4px;
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: ${theme.color.grey_900};
  `}
`;

export const Nickname = styled.span`
  ${({ theme }) => css`
    ${theme.font.semiBold_14};
  `}
`;

export const Comment = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
  `}
`;

export const dropdown = css`
  svg {
    width: 20px;
    height: 20px;
  }

  ul {
    top: 0px;
  }
`;

export const BtnWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};
    column-gap: 10px;

    & > button {
      ${theme.flexMixin.flex_justifyC_alignC};

      svg {
        width: 18px;
        height: 18px;
        fill: ${theme.color.grey_900};
      }
    }
  `}
`;

export const EditNotice = styled.div`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    ${theme.flexMixin.flex_justifySb};
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    padding: 12px 40px;
    color: ${theme.color.grey_700};
    background-color: ${theme.color.grey_100};

    & > button {
      color: ${theme.color.grey_700};
    }
  `}
`;
