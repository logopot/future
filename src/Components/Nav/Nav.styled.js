import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
`;

export const Navbar = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  span {
    margin-left: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    width: 200px;
    padding: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    transition: all 0.3s ease;
  }
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Toggler = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const TogglerIcon = styled.div`
  width: 25px;
  height: 2px;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background: ${({ theme }) => theme.colors.dark};
    left: 0;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`;
