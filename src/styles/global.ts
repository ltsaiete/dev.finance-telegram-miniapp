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

h2 {
  margin-bottom: 0.8rem;
  /* color: var(--color-text-title); */
  font-weight: 400;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;
