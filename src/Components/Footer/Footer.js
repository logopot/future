import React from "react";
import { FooterWrapper, FooterText, FooterLink } from "./Footer.styled";
import data from "../Data/Data.json"; // prilagodi putanju do data.json

const Footer = () => {
  const { text, links } = data.footer;

  return (
    <FooterWrapper>
      <FooterText>
        {text}{" "}
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <FooterLink href={link.url} title={link.title}>
              {link.label}
            </FooterLink>
            {index < links.length - 1 && ", "}
          </React.Fragment>
        ))}
        .
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
