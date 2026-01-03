import styled from "styled-components";

export const TechTrendsSection = styled.div`
  width: 100%;
  background: repeating-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gray},
    ${({ theme }) => theme.colors.gray} 10px,
    ${({ theme }) => theme.colors.primary} 10px,
    ${({ theme }) => theme.colors.primary} 20px
  );
`;

export const Wrapper = styled.div`
  padding: 7rem 0 0;

  @media (max-width: 576px) {
    padding-bottom: 3rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex: ${({ flex }) => flex || "0 0 auto"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  margin-top: ${({ marginTop }) => marginTop || "0"};

  @media (max-width: 576px) {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  border-left: 0.5rem solid ${({ theme }) => theme.colors.primary};
  padding-left: 2rem;

  @media (max-width: 576px) {
    writing-mode: unset;
    transform: rotate(0);
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
`;
