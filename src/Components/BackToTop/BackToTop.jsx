import React, { useEffect, useState } from "react";
import { StyledButton } from "./BackToTop.styled";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <StyledButton show={show} onClick={scrollToTop} />;
};

export default BackToTop;
