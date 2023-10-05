import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 75%;
}

body {
  background: #f0f2f5;
  font-family: "Poppins", sans-serif;
  /* color: var(--color-text-base); */
}
`;
