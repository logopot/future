import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    color: ${({ theme }) => theme.colors.gray};
  }

  .App {
    color: ${({ theme }) => theme.colors.gray};

    @media (max-width: 576px) {
      overflow: hidden;
    }
  }

  .bg-stripe {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: block;
      background-color: ${({ theme }) => theme.colors.primary};
      width: 49rem;
      height: 155rem;
      top: 0;
      left: 40%;
      z-index: -1;
    }
  }

  .h1-title {
    font-size: ${({ theme }) => theme.typography.h1};

    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.typography.h1Mobile};
    }
  }

  .h2-title {
    font-size: ${({ theme }) => theme.typography.h2};
  }

  p {
    font-size: ${({ theme }) => theme.typography.p};
    white-space: pre-wrap;
  }

  .btnFT {
    margin-top: 3rem !important;
    background-color: ${({ theme }) => theme.colors.primary} !important;
    padding: 1rem 3rem !important;
    text-transform: uppercase !important;
    color: ${({ theme }) => theme.colors.white} !important;
    border: 0 !important;
    border-radius: 0 !important;
    transition: all 0.4s ease-in-out !important;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray} !important;
    }
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
