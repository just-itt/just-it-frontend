import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const ImgUpload = styled.label<{ isError: boolean }>`
  ${({ theme, isError }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};
    flex-flow: column;
    width: 100%;
    height: 268px;
    border: 1px dashed ${isError ? theme.color.red_200 : theme.color.grey_400};
    border-radius: 10px;
    background-color: ${theme.color.grey_100};
    cursor: pointer;

    & > svg {
      width: 52px;
      height: 48px;
      margin-bottom: 20px;
      fill: ${theme.color.grey_400};
    }

    & > span:first-of-type {
      ${theme.font.bold_20};
      color: ${theme.color.grey_500};
    }

    & > span:last-of-type {
      ${theme.font.regular_14};
      width: 294px;
      text-align: center;
      color: ${theme.color.grey_500};
    }
  `}
`;

export const UploadInput = styled.input`
  display: none;
`;

export const PreviewImgWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 268px;
    border: 1px dashed ${theme.color.grey_400};
    border-radius: 10px;
    background-color: ${theme.color.grey_100};
    overflow: hidden;
  `}
`;

export const PreviewBtnWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 88px;
    padding: 0 24px;
    border-radius: 0 0 10px 10px;
    background-color: ${theme.color.grey_900_60};
  `}
`;

export const EditBtnWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: 15px;

    & > button {
      width: 40px;
      height: 40px;
    }

    & > label {
      ${theme.flexMixin.flex_justifyC_alignC}
      width: 40px;
      height: 40px;

      :hover {
        cursor: pointer;
      }
    }

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.color.white};
    }
  `}
`;

export const AddBtn = styled.label`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC_alignC}
    ${theme.font.medium_15};
    width: 40px;
    height: 40px;
    color: ${theme.color.white};

    :hover {
      cursor: pointer;
    }
  `}
`;

export const dropdown = (theme: Theme) => css`
  width: 36px;
  height: 36px;
  background-color: transparent;

  & > svg {
    width: 20px;
    height: 20px;
  }

  & > svg > path {
    fill: ${theme.color.white};
  }

  @media (min-width: ${theme.breakPoint.minTablet}) {
    width: 40px;
    height: 40px;

    & > svg {
      width: 24px;
      height: 24px;
    }

    & > ul {
      top: -140px;
      right: -20px;
      width: 158px;
    }
  }
`;
