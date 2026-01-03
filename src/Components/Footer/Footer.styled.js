import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray || "#666"};
  padding: 2rem;
  text-align: center;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.4s ease-in-out;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary || "#ff6600"};
  }
`;
