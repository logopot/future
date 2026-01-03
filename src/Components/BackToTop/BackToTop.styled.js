import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 50px;
  text-align: center;
  border: 0;
  border-radius: 0;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  z-index: 1000;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 13px;
    z-index: 11;
    display: block;
    width: 25px;
    height: 25px;
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
    top: 20px;
    transform: rotate(45deg);
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    &::after {
      border-top: 2px solid ${({ theme }) => theme.colors.white};
      border-left: 2px solid ${({ theme }) => theme.colors.white};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
  }
`;
