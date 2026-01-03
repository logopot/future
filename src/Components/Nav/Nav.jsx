import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Img/Logo/brain.svg";

import {
  NavContainer,
  Navbar,
  Brand,
  Logo,
  NavList,
  NavItem,
  StyledNavLink,
  Toggler,
  TogglerIcon,
} from "./Nav.styled";

const Nav = () => {
  const [open, setOpen] = useState(false);

  // definicija linkova
  const navLinks = [
    { path: "/", label: "Home", exact: true },
    { path: "/tech-news", label: "Tech News" },
    { path: "/ces", label: "CES" },
    { path: "/perspective", label: "Perspective" },
  ];

  return (
    <NavContainer>
      <Navbar>
        <Brand href="/">
          <Logo src={logo} alt="logo" /> <span>Future Tech</span>
        </Brand>

        <Toggler
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <TogglerIcon />
        </Toggler>

        <NavList open={open}>
          {navLinks.map((link, index) => (
            <NavItem key={index}>
              <StyledNavLink
                to={link.path}
                end={link.exact || false} // koristi end umesto exact u react-router-dom v6
              >
                {link.label}
              </StyledNavLink>
            </NavItem>
          ))}
        </NavList>
      </Navbar>
    </NavContainer>
  );
};

export default Nav;
