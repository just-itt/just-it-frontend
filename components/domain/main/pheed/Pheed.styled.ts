import styled from "@emotion/styled";

import { theme } from "styles/theme";

export const DetailBtn = styled.button`
  text-align: left;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
  border-radius: 20px;
  overflow: hidden;

  @media (hover: hover) {
    :hover {
      & > img {
        transform: scale(1.05);
      }
    }
  }

  & > img {
    transition: transform 0.2s ease-in-out;
  }
`;

export const Title = styled.h3`
  ${theme.font.semiBold_16};
  margin-bottom: 4px;
  padding-left: 4px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  column-gap: 4px;
  height: 24px;
  margin-bottom: 12px;
`;

export const Content = styled.p`
  ${theme.font.regular_15};
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MoreBtn = styled.button`
  ${theme.font.regular_15};
  width: 43px;
`;

export const BadgeWrapper = styled.div`
  display: flex;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 7px;
  width: 44px;
  height: 24px;
`;

export const BadgeCount = styled.span`
  ${theme.font.regular_14};
`;
