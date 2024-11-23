
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f8; /* Cor de fundo suave */
    color: #333; /* Cor do texto */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    line-height: 1.6; /* Melhora a legibilidade */
  }

  ul {
    list-style-type: none; /* Remove marcadores de lista */
    padding: 0;
  }

  a {
    color: #4caf50; /* Cor dos links */
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* Sublinha ao passar o mouse */
    }
  }
`

