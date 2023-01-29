import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  padding: 40px;
`;

export const Item = styled.div`
  @media (max-width: 767.9px) {
    width: 200px;
  }
  @media (max-width: 1023.9px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 200px;
  }
`;
