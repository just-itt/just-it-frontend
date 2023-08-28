import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Mail = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: fit-content;

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      left: 15px;
      bottom: 15px;
      z-index: 99999999999999999;
    }
  `}
`;

export const IconBtn = styled.button<{ isClick: boolean }>`
  ${({ theme, isClick }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: ${isClick ? theme.color.blue_300 : theme.color.blue_200};
    transition: background-color 0.3s;

    svg {
      width: ${isClick ? "20px" : "35px"};
      height: ${isClick ? "20px" : "35px"};

      path {
        fill: ${theme.color.white};
      }
    }

    @media (hover: hover) {
      :hover {
        background-color: ${theme.color.blue_300};
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -410px;
    right: 0px;
    width: 300px;
    height: 400px;
    padding: 20px 25px 10px 25px;
    border-radius: 15px;
    background-color: ${theme.color.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (min-width: ${theme.breakPoint.minTablet}) {
      top: -510px;
      width: 300px;
      height: 500px;
      padding: 30px 25px 10px 25px;
    }

    @media (min-width: ${theme.breakPoint.minDesktop}) {
      left: 0px;
      width: 400px;
      height: 500px;
    }
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    ${theme.font.bold_15};
    width: fit-content;
    margin-bottom: 10px;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.bold_18};
    }
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 280px;
    margin-bottom: 10px;
    border: 1px solid ${theme.color.grey_300};
    border-radius: 5px;
    padding: 10px;
    resize: none;

    @media (min-width: ${theme.breakPoint.minTablet}) {
      height: 360px;
    }
  `}
`;

export const SubmitBtn = styled.button`
  ${({ theme }) => css`
    ${theme.flexMixin.flex_justifyC_alignC};
    ${theme.font.semiBold_14};
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_300};

    @media (min-width: ${theme.breakPoint.minTablet}) {
      ${theme.font.semiBold_15};
      padding: 8px;
    }
  `}
`;
