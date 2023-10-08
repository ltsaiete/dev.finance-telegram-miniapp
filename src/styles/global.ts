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
  background: ${(props) => props.theme.colors.background};
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.textBase};
  font-size: 1.4rem;
}

h2 {
  margin-bottom: 0.8rem;
  color: ${(props) => props.theme.colors.textTitle};
  font-weight: 400;
}

a {
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
}

a:hover {
  opacity: 0.9;
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
