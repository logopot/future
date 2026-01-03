import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.bg}) no-repeat center center/cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
`;

export const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  padding: 0 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroDesc = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
