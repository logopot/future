import styled from "styled-components";

export const PerspectiveSection = styled.section`
  position: relative;
  width: 100%;
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at top left,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7)
  );
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Subtitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BodyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const BodyColText = styled.div`
  flex: 1 1 40%;
  min-width: 300px;
`;

export const BodyColImg = styled.div`
  flex: 1 1 40%;
  min-width: 300px;

  img {
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const Desc = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
