import styled from "styled-components";

export const TechNewsSection = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColLeft = styled.div``;
export const ColRight = styled.div``;

export const ImgWrapp = styled.div`
  position: relative;
  height: 22rem;

  @media (max-width: 576px) {
    height: 13rem;
  }
`;

export const Img = styled.div`
  position: absolute;
  top: -5rem;

  @media (max-width: 576px) {
    top: 0;
  }
`;

export const Content = styled.div``;

export const ContentLeft = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5rem 5rem 6rem;

  h4 {
    text-transform: uppercase;
  }

  .h2-title {
    margin-bottom: 4rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem 4rem;
  }
`;

export const ContentLeftLines = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 43.6%;
`;

export const ContentRight = styled.div`
  padding-top: 10rem;
  padding-right: 6rem;

  h3,
  p {
    width: 80%;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 100;

    @media (max-width: 576px) {
      width: unset;
    }
  }

  h3 {
    text-transform: uppercase;
    font-size: 2rem;

    @media (max-width: 576px) {
      margin-top: 3rem;
    }
  }

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 576px) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem 0.9rem 0;
  }
`;

export const ContentRightImg = styled.div`
  padding: 0 !important;
`;

export const Subtitle = styled.h4`
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin-bottom: 4rem;
`;

export const Desc = styled.p``;

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

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: auto;
`;
