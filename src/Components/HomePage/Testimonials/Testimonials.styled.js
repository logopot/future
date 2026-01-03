import styled from "styled-components";

export const TestimonialsSection = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const Icon = styled.img`
  width: 50px;
  margin-bottom: 1.5rem;
  opacity: 0.7;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
  font-style: italic;
`;

export const Author = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const Role = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;
