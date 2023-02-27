import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size:  30px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;
