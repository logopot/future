import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const FluidContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
