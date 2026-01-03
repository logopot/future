import styled from "styled-components";

export const WorksSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
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

export const ColLeft = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
`;

export const ColRight = styled.div`
  flex: 0 0 80%;
  max-width: 80%;
`;

export const Content = styled.div`
  position: relative;
`;

export const ContentImg = styled.div`
  position: absolute;
  top: -7rem;
  z-index: 2;
  left: 7rem;
  width: 60%;

  @media (max-width: 576px) {
    width: 90%;
    left: 9rem;
  }
`;

export const ContentDesc = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 3rem 10rem;

  @media (max-width: 576px) {
    padding: 1rem 2rem 1rem 0;
  }

  h2 {
    margin-bottom: 3rem;

    @media (max-width: 576px) {
      width: 65%;
      margin-top: 1rem;
    }
  }

  &::before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 100%;
    z-index: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 3rem;
`;

export const Desc = styled.p``;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
