import styled from "styled-components";

export const TechInfoSection = styled.div`
  position: relative;
  padding: 5rem 20rem 0;
  background-color: ${({ theme }) => theme.colors.gray};

  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 10rem;
    z-index: -3;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export const TechInfoWrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColLeft = styled.div`
  flex: 0 0 41.6667%;
  max-width: 41.6667%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 7rem;
  }
`;

export const ColRight = styled.div`
  flex: 0 0 58.3333%;
  max-width: 58.3333%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const ContentLeft = styled.div`
  position: relative;
`;

export const ContentLeftLines = styled.div`
  transform: rotate(90deg);
  width: 32%;
`;

export const ContentRight = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20rem 5rem 3rem;

  @media (max-width: 576px) {
    padding: 1rem 1rem 3rem;
    margin-top: 0;
  }
`;

export const ContentRightTitle = styled.div``;

export const ContentRightImgTop = styled.div`
  position: absolute;
  bottom: 0;
  right: 95%;
  width: 57%;

  @media (max-width: 576px) {
    bottom: 100%;
    right: 0;
    width: 68%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ServiceContainer = styled.div`
  padding: 7rem 0;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export const ServiceItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  /* border-radius: 12px; */
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ServiceIcon = styled.div`
  margin-bottom: 1.5rem;

  img {
    width: 70px;
    height: 70px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;

    ${ServiceItem}:hover & {
      transform: scale(1.1);
    }
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
`;

export const ServiceDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;
