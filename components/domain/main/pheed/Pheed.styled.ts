import Image from "next/image";
import styled from "@emotion/styled";

import { theme } from "styles/theme";

export const Pheed = styled.div`
  width: 264px;
`;

export const Thumbnail = styled(Image)`
  margin-bottom: 12px;
  border-radius: 20px;
`;

export const Title = styled.h3`
  ${theme.font.semiBold_16};
  margin-bottom: 4px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  column-gap: 4px;
  height: 24px;
  margin-bottom: 12px;
`;

export const Content = styled.p`
  ${theme.font.light_15};
  width: 217px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MoreBtn = styled.button`
  ${theme.font.light_15};
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
  ${theme.font.light_14};
`;
