import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: 360px;
    width: 100%;
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.modal};
    @media (min-width: ${theme.breakPoint.minTablet}) {
      padding: 0 20%;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      position: relative;
      width: 536px;
      padding: 40px 40px 0 40px;
      z-index: 0;
    }
  `}
`;

export const ScrollWrapper = styled.div`
  ${({ theme }) => css`
    height: calc(var(--vh) * 100 - 64px - 69px);
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      height: calc(var(--vh) * 100 - 125px - 105px - 27px);
      overflow-y: auto;
    }
  `}
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.color.grey_200};
    padding: 18px 20px;

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.color.grey_900};
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      margin-bottom: 40px;
      padding: 0;
      border-bottom: 0;
    }
  `}
`;

export const BtnWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: 24px;

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.color.blue_300};
    }
  `}
`;

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 16px 0 16px 20px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      margin-bottom: 20px;
      padding: 0;
    }
  `}
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 44px;
    height: 44px;
    border-radius: 100px;
    background-color: ${theme.color.grey_900};
  `}
`;

export const Nickname = styled.span`
  ${({ theme }) => css`
    ${theme.font.semiBold_16};
  `}
`;

export const ImgWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 20px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      & > img {
        border-radius: 20px;
      }
    }
  `}
`;

export const ImgCircle = styled.div`
  ${({ theme }) => css`
    width: 6px;
    height: 6px;
    margin: 0 auto;
    border-radius: 100px;
    background-color: ${theme.color.blue_300};
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 20px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      padding: 0;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.font.bold_16};
    margin-bottom: 8px;
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-bottom: 20px;
  `}
`;

export const hashTag = css`
  margin-bottom: 20px;
`;

export const CommentsWrapper = (theme: Theme) => css`
  border-top: 0.5px solid ${theme.color.grey_200};
  padding: 16px 20px;

  @media (min-width: ${theme.breakPoint.minDesktop}) {
    padding: 20px 0;
  }
`;

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 44px 1fr;
    column-gap: 12px;
    border-top: 0.5px solid ${theme.color.grey_200};
    padding: 12px 16px;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      height: 85px;
      margin-bottom: 0;
      padding: 20px 0;
    }
  `}
`;

export const profile = css`
  width: 44px;
  height: 44px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 100px;
    padding: 10px 53px 10px 16px;
    background-color: ${theme.color.grey_100};
  `}
`;

export const ApplyBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.semiBold_14};
    position: absolute;
    top: 50%;
    right: 16px;
    color: ${theme.color.blue_300};
    transform: translateY(-50%);
  `}
`;
